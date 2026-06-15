"use client"

import AboutRules from "@src/components/aboutRules"
import Banner from "@src/components/banner"
import OurTeams from "@src/components/ourTeams"
import WhoWeAre from "@src/components/whoWeAre"
import { AchievementData } from "@src/constant"
import { IAchievementData } from "@src/types"

const AboutUs = () => {
    return (
        <div>
            <Banner route={"/about-us"} name={"About Us"} title={"About Onehub Solutions"} />
            <WhoWeAre />
            <div className="bg-[--black] !mb-40">
                <div className="relative mainContainer pt-20 pb-36">
                    <h1 className=""><span className="text-xl md:text-2xl lg:text-3xl text-center font-medium text-[--white]">Partner </span> <span className="heading text-2xl md:text-3xl lg:text-4xl text-center font-bold">WITH US</span></h1>
                    <h1 className="text-lg font-medium mt-4 mb-2 text-[--white]">2+ Years of Commercial Experience Delivering Custom Software Development Solutions</h1>
                    <p className="text-[--white] text-sm sm:text-base lg:text-[18px] lg:w-[80%]"> Onehub is a reliable digital transformation partner, providing customized software development, business intelligence, and mobile/web app development services to help you stay ahead in the dynamic business landscape. We are among the top 1% talent on freelance portals like Upwork.</p>
                    <div className="absolute top-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-20 gap-10 w-[90%] md:w-full mx-auto">
                        {AchievementData.map((val: IAchievementData, index: number) => {
                            return (
                                <div key={index} className="linearInnerBackground shadow-inner transition-all ease-in-out duration-500 hover:translate-y-[-10px] flex flex-col justify-center items-center bg-[--white] rounded-xl w-full xl:w-[240px] py-10 px-4">
                                    <div className="w-max relative ml-2">
                                        {val.icons}
                                        <svg width="66" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1 -left-4">
                                            <path opacity="0.9" d="M0 14.169 25.047 0l24.771 14.169v27.803L25.047 55.873 0 41.972V14.169Z" fill="var(--primary-shadow-color)"></path></svg>
                                    </div>
                                    <h1 className="text-3xl md:text-2xl lg:text-3xl font-semibold text-center !mt-5">{val.digit}</h1>
                                    <h1 className="font-semibold text-xl md:text-base lg:text-xl text-[--gray] text-center">{val.title}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <OurTeams /> */}
            <AboutRules />
        </div>
    )
}

export default AboutUs