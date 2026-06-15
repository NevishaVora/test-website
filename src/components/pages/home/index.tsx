"use client"

import Features from "@src/components/features"
import HomeBanner from "@src/components/homeBanner"
// import Services from "@src/components/services"
import Technologies from "@src/components/technologies"
import { StepsData } from "@src/constant"
import { IStepsData } from "@src/types"

const Home = () => {
    return (
        <>
            <HomeBanner />
            {/* <WhyChooseUs /> */}
            <Technologies />
            {/* <Services /> */}
            <div className="relative">
                <Features />
                <div className="animatedBannerGradientCircle hidden sm:block absolute top-80 -left-48 h-[350px] w-[350px] rounded-full z-[-1] p-16 opacity-40">
                    <div className='w-full h-full bg-[--white] rounded-full'> </div>
                </div>
                <div className="mainContainer bg-[--background-color] p-10 lg:p-14 rounded-t-3xl ">
                    <h1 className="text-center text-lg lg:text-2xl">Learn why Onehub is the top choice for</h1>
                    <h1 className="heading !text-[--black] text-2xl lg:text-4xl text-center font-semibold">Businesses that prioritize growth</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 !mt-14 lg:w-[80%] lg:mx-auto">
                        {StepsData.map((val: IStepsData, index: number) => {
                            return (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-center items-center lg:justify-start">{val.image}</div>
                                    <h1 className="font-semibold text-lg lg:text-xl text-center lg:text-left">{val.title}</h1>
                                    <p className="text-[--gray] text-[15px] font-medium text-center lg:text-left">{val.details}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home