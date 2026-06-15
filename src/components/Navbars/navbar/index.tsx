"use client"
import ClearAllIcon from '@mui/icons-material/ClearAll';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Popover } from '@mui/material';
import { IRoutesChild, IRoutes } from '@src/types';
import Image from "next/image";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { Logos, Routes } from '../../../constant';
import MobileDrawer from '../mobileNavbar';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [drawerToggle, setDrawerToggle] = useState<boolean>(false)
    const [isNavbarBg, setIsNavbarBg] = useState<boolean>(false)
    const [anchorElServices, setAnchorElServices] = useState<HTMLElement | null>(null)
    const [selectedTechnologies, setSelectedTechnologies] = useState<IRoutesChild[]>([])
    const router = useRouter()
    const pathname = usePathname()

    const popupOpenHandler = (event: React.MouseEvent<HTMLElement>) => setAnchorElServices(event.currentTarget)
    const popupCloseHandler = () => setAnchorElServices(null)
    const sideNavHandler = () => setDrawerToggle(true)

    const navbarBgVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 15) {
            setIsNavbarBg(true)
        }
        else {
            setIsNavbarBg(false)
        }
    };

    if (typeof window !== 'undefined') window.addEventListener('scroll', navbarBgVisible)

    const clickHandler = (path: string) => {
        popupCloseHandler()
        router.push(path)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null;

    return (
        <div className={`${isNavbarBg ? "bg-[--white] w-[100%] shadow-md" : "bg-transparent w-[100%]"} fixed top-0 left-0 z-50`}>
            <div className="mainContainer py-4 flex justify-between items-center">
                <Link href="/" className="w-[80px] lg:w-[100px] 3xl:w-[120px] block">
                    <Image
                        src={Logos.verticalBlackLogo} 
                        alt="One Hub Solutions Logo"
                        width={1500}
                        height={1500}
                        className="w-full h-full object-contain"
                        priority 
                    />
                </Link>
                <div className="navMenuItems hidden lg:flex items-center space-x-4 xl:space-x-6">
                    {Routes.map((route: IRoutes, index: number) => (
                        <React.Fragment key={index}>
                            <li className={`relative list-none text-base xl:text-lg 3xl:text-2xl font-semibold hover:text-[--primary-theme-color] transition-all ease-in-out duration-500 p-1 cursor-pointer ${pathname === route.path && "!text-[--primary-theme-color]"}`}
                                onClick={(e) => {
                                    if (route?.child?.length && route?.child?.length > 0) {
                                        popupOpenHandler(e)
                                        setSelectedTechnologies(route?.child)
                                    } else {
                                        router.push(route.path)
                                    }
                                }}><span>{route.name}</span> {route?.child && <KeyboardArrowDownOutlinedIcon fontSize="small" />}</li>
                        </React.Fragment>
                    ))}
                </div>
                <div className='flex items-center space-x-2'>
                    <button className={`animated-button bg-[--white] bg-gradient-to-r from-[--primary-theme-color] to-[--primary-theme-color] border-[3px] border-[--primary-theme-color] px-4 py-1 sm:px-5 sm:py-2 md:px-6 rounded-full font-semibold text-sm sm:text-base lg:text-lg 3xl:text-2xl`} onClick={() => router.push("/hire-developers")}>
                        Apply For Job
                    </button>
                    <div className='max-w lg:hidden cursor-pointer'>
                        <ClearAllIcon onClick={sideNavHandler} className={`text-[30px] md:text-[40px]`} />
                    </div>
                </div>
            </div>
            <Popover
                open={Boolean(anchorElServices)}
                anchorEl={anchorElServices}
                onClose={popupCloseHandler}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
            >
                <div className={`py-7 px-10 w-full flex flex-wrap items-start justify-between space-x-10`}>
                    {selectedTechnologies?.map((technology: IRoutesChild, idx: number) => (
                        <div className={`space-y-2`} key={idx}>
                            <h1 className='text-lg font-semibold !mb-3 whitespace-nowrap truncate max-w-xs'>{technology.name}</h1>
                            <ul className='space-y-1'>
                                {technology?.child?.map((techChild: { name: string, path: string, image: string }, i: number) => {
                                    return (
                                        <li key={i} className='flex items-center py-[6px] px-2 rounded-lg text-[14px] font-medium text-[--gray] cursor-pointer tracking-wider hover:bg-[--background-color] hover:text-shadow-sm hover:text-[--primary-theme-color] transition-all ease-in-out duration-500 whitespace-nowrap truncate max-w-xs' onClick={() => clickHandler(`/services${techChild.path}`)}>
                                            <Image src={techChild.image} alt='techLogo' width={1000} height={1000} className='w-6 h-6 object-contain mr-2' /> {techChild.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </Popover >
            <MobileDrawer
                drawerToggle={drawerToggle}
                setDrawerToggle={setDrawerToggle}
            />
        </div >
    )
}

export default Navbar