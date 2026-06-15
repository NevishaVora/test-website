"use client"

import { IBannerProps } from "@src/types"
import Breadcrumb from "../breadcrumb"

const Banner = ({ route, name, title }: IBannerProps) => {
    return (
        <div className="homeBannerGradientBackgroundColor w-full h-full relative overflow-hidden py-36 xl:pt-44 xl:pb-32">
            <div className="mainContainer flex flex-col justify-center items-center space-y-2 ">
                <Breadcrumb route={route} name={name} />
                <h1 className="text-2xl lg:text-3xl font-bold text-center">{title}</h1>
            </div>
            <div className="absolute hidden lg:block -top-20 -right-4 h-[300px] w-[40px] border-[1px] border-[--primary-theme-color] rounded-b-full rotate-45 bg-gradient-to-b from-[#ffdcb7] from-1% to-[--white] to-100% z-[-1]">
            </div>
            <div className="animatedBannerGradientRound absolute top-[75px] left-[10%] lg:top-32 lg:left-[25%] h-[50px] w-[50px] rounded-full bg-gradient-to-b from-[#ffcb7] from-1% to-[--white] to-80% z-[-1]">
            </div>
            <div className="absolute hidden sm:block -top-20 -left-3 h-[300px] w-[40px] rounded-b-full -rotate-45 bg-gradient-to-b from-[#ffdcb7] from-1% to-[--white] to-100%  from-10% via-[#ffdcb7] via-10% z-[0]">
            </div>
            <div className="absolute hidden sm:block -bottom-1 xl:bottom-10 -right-1 h-[300px] w-[30px] rounded-b-full rotate-45 bg-gradient-to-b from-[--primary-shadow-color] from-10% via-[#ffdcb7] via-10% to-[#fdf9f480] to-100%">
            </div>
            <div className="animatedBannerGradientCircle hidden sm:block absolute -bottom-0 -left-0 h-[600px] w-[600px] rounded-full z-[-1] p-14 opacity-40">
                <div className='w-full h-full bg-[--white] rounded-full'> </div>
            </div>
        </div>
    )
}

export default Banner
