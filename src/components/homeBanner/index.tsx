"use client"

// import Lottie from 'react-lottie';
// import animationData from '../../../public/animations/home-banner-animations.json';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

const HomeBanner = () => {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };

    return (
        <div className="homeBannerGradientBackgroundColor w-full h-full relative overflow-hidden py-36 xl:pt-40 xl:pb-36">
            <div className="mainContainer flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0  lg:space-x-7 w-full z-10">
                <div className="w-full lg:w-[55%] xl:w-[50%] space-y-2 flex flex-col justify-center">
                    <Fade direction='up' cascade delay={100} triggerOnce>
                        <h1 className="font-semibold text-lg sm:text-xl xl:text-2xl mt-7 text-center lg:text-left"><span className="text-[--primary-theme-color]">Software Development</span> Company</h1>
                    </Fade>
                    <Fade direction='up' cascade delay={300} triggerOnce>
                        <h1 className="heading text-3xl lg:text-5xl xl:text-6xl font-semibold text-center lg:text-left"><span className="text-[--black]">Leading Your <span className="text-[--primary-theme-color]">Business</span> into the Future of </span><span className="text-[--primary-theme-color]">Technology</span></h1>
                    </Fade>
                    <Fade direction='up' cascade delay={500} triggerOnce>
                        <p className="block text-sm lg:text-base xl:text-[17px] text-center lg:text-left !mb-4 md:!mb-8 xl:!mb-6">We’re committed to providing exceptional website development, software solutions, and mobile applications that align with your unique needs. Through cutting-edge technology and a deep understanding of your goals, we ensure that your digital transformation journey is seamless and successful.</p>
                    </Fade>
                    <Fade direction="up" cascade delay={700} triggerOnce>
                        <Link
                            href="/contact-us"
                            className="animated-button block w-max mx-auto lg:mx-0 !shadow-none bg-[--white] bg-gradient-to-r from-[--primary-theme-color] to-[--primary-theme-color] border-[3px] border-[--primary-theme-color] px-6 py-2 xl:px-10 rounded-full font-semibold text-sm sm:text-base md:text-lg xl:text-xl"
                        >
                            Contact Us
                        </Link>
                    </Fade>
                </div>
                <div className="w-full lg:w-[45%] xl:w-[50%]">
                    <Fade cascade delay={100} triggerOnce className='flex justify-center xl:justify-end'>
                        <div className='relative w-[85%] h-max'>
                            <div className="w-[90%] h-[90%] bg-[#f9b652] absolute right-4 lg:right-6 xl:right-10 border-4 border-[--primary-theme-color] z-10 drop-shadow-xl animatedBannerOrangeImage"></div>
                            <Image src={"/images/home-banner-random-1.webp"} alt='' width={1000} height={1000} className='w-full h-full drop-shadow-xl z-[-1]' />
                            {/* <Image src={"/images/home-banner-random-orange-1.svg"} alt='' width={1000} height={1000} className='w-[100px] h-full absolute -left-16 top-0' /> */}
                            <Image src={"/images/orange-bg-tools-4.webp"} alt='' width={1000} height={1000} className='w-[50px] absolute right-5 xl:right-8 bottom-10 opacity-60 animatedBannerGradientRound' />
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="absolute hidden lg:block -top-20 -right-4 h-[300px] w-[40px] border-[1px] border-[--primary-theme-color] rounded-b-full rotate-45 bg-gradient-to-b from-[#ffdcb7] from-1% to-[--white] to-100% z-[-1]">
            </div>
            <div className="animatedBannerGradientRound absolute top-[75px] left-[10%] lg:top-32 lg:left-[40%] h-[70px] w-[70px] rounded-full -rotate-45 bg-gradient-to-b from-[#ffdcb7] from-1% to-[--white] to-80% z-[-1]">
            </div>
            <div className="absolute hidden sm:block -top-20 -left-3 h-[300px] w-[40px] rounded-b-full -rotate-45 bg-gradient-to-b from-[#ffdcb7] from-1% to-[--white] to-100%  from-10% via-[#ffdcb7] via-10% z-[0]">
            </div>
            <div className="absolute hidden sm:block -bottom-1 xl:bottom-10 -right-1 h-[300px] w-[30px] rounded-b-full rotate-45 bg-gradient-to-b from-[--primary-shadow-color] from-10% via-[#ffdcb7] via-10% to-[#fdf9f480] to-100%">
            </div>
            <div className="animatedBannerGradientCircle hidden sm:block absolute -bottom-80 -left-40 h-[600px] w-[600px] rounded-full z-[-1] p-28 opacity-40">
                <div className='w-full h-full bg-[--white] rounded-full'> </div>
            </div>
        </div >
    )
}

export default HomeBanner