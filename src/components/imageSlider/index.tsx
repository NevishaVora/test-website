"use client"
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { IImageSliderProps } from '@src/types';
import Image from 'next/image';
import { useRef, useState } from 'react';

const ImageSlider = ({ data, slideIndex, setShowSlider, setSlideIndex }: IImageSliderProps) => {
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [zoomLevel, setZoomLevel] = useState<number>(1);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);
    const [translateX, setTranslateX] = useState<number>(0);
    const [translateY, setTranslateY] = useState<number>(0);
    const fullScreenRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLImageElement | null>(null);

    console.log("== data =>", data);
    console.log("== slideIndex =>", slideIndex);

    const handleImageSlideChange = (n: number) => {
        const newIndex = (slideIndex + n + data.length) % data.length;
        setSlideIndex(newIndex);
        setZoomLevel(1);
        setTranslateX(0);
        setTranslateY(0);
    };

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            setIsFullScreen(true);
            fullScreenRef.current?.requestFullscreen();
        } else {
            setIsFullScreen(false);
            document.exitFullscreen();
        }
    };

    const handleZoomInOut = () => {
        setZoomLevel(prevZoomLevel => (prevZoomLevel === 1 ? 2 : 1));
        setTranslateX(0);
        setTranslateY(0);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setStartX(e.clientX - translateX);
        setStartY(e.clientY - translateY);
        setIsDragging(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const diffX = e.clientX - startX;
        const diffY = e.clientY - startY;
        requestAnimationFrame(() => {
            if (zoomLevel === 1) {
                setTranslateX(diffX);
                if (diffX > 500) {
                    handleImageSlideChange(-1);
                    setIsDragging(false);
                } else if (diffX < -500) {
                    handleImageSlideChange(1);
                    setIsDragging(false);
                }
            } else {
                setTranslateX(diffX);
                setTranslateY(diffY);
            }
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (zoomLevel === 1 && translateX < 500 && translateX > -500) setTranslateX(0);
    };

    const handleMouseDoubleClick = () => {
        if (zoomLevel > 1) {
            setZoomLevel(prevZoomLevel => prevZoomLevel === 3 ? 1 : prevZoomLevel + 1);
        } else {
            setZoomLevel(2);
        }
        setTranslateX(0);
        setTranslateY(0);
    };

    return (
        <div className="ImageSliderContainer" ref={fullScreenRef}>
            <div className={`absolute w-full p-4 flex justify-between items-center z-10 ${zoomLevel > 1 ? 'bg-[--shadow-color]' : ''} top-0`}>
                <h1 className='text-white'>{slideIndex + 1}/{data.length}</h1>
                <div className='flex items-center space-x-3'>
                    <span className='text-white cursor-pointer opacity-80 hover:opacity-100' onClick={handleFullscreen}>
                        {!isFullScreen ? <FullscreenIcon /> : <FullscreenExitIcon />}
                    </span>
                    <span className='text-white cursor-pointer opacity-80 hover:opacity-100' onClick={handleZoomInOut}>
                        {zoomLevel === 1 ? <ZoomInIcon /> : <ZoomOutIcon />}
                    </span>
                    <CloseIcon
                        fontSize='medium'
                        className='text-white cursor-pointer opacity-80 hover:opacity-100'
                        onClick={() => {
                            setShowSlider(false)
                            setSlideIndex(0)
                        }}
                    />
                </div>
            </div>
            <div className="w-[78%] xl:w-[94%] h-[85vh] flex justify-center items-center overflow-hidden relative">
                {data.map((val: File | string, index: number) => (
                    <Image
                        key={index}
                        draggable="false"
                        src={val instanceof File ? URL.createObjectURL(val) : val}
                        alt={`Image ${index + 1}`}
                        width={1000}
                        height={1000}
                        ref={sliderRef}
                        onDoubleClick={handleMouseDoubleClick}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className={`w-auto max-h-full object-contain transition-transform ease-in-out duration-500  slide ${slideIndex === index && 'active'} ${zoomLevel === 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-move"}`}
                        style={{ transform: `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)` }}
                    />
                ))}
            </div>
            {data.length > 1 && (
                <>
                    <button className="absolute top-[50%] translate-y-[-50%] cursor-pointer left-0 md:left-4 opacity-80 hover:opacity-100 rounded-r-lg w-max h-max" onClick={() => handleImageSlideChange(-1)}>
                        <ChevronLeftRoundedIcon fontSize='large' className='text-white' />
                    </button>
                    <button className="absolute top-[50%] translate-y-[-50%] cursor-pointer right-0 md:right-4 opacity-80 hover:opacity-100 rounded-l-lg w-max h-max" onClick={() => handleImageSlideChange(1)}>
                        <ChevronRightRoundedIcon fontSize='large' className='text-white' />
                    </button>
                </>
            )}
        </div>
    );
};

export default ImageSlider;
