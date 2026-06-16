"use client"

import { IFeaturesData } from "@src/types";
import { FeaturesData } from "../../constant";

const Features = () => {
    return (
        <div className="mainContainer pt-14 pb-20 flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0  lg:space-x-10">
            <div className="w-full lg:w-[25%] text-center lg:text-left">
                <h1 className="text-lg lg:text-2xl font-medium">
                    Choose a Web Partner
                </h1>

                <h1 className="heading text-2xl md:text-3xl lg:text-4xl font-bold">
                    You Can Trust
                </h1>

                <p className="text-[--gray] text-sm sm:text-base lg:text-[18px] mt-5">
                    When you choose Onehub Solution as your agency partner, you can sleep well knowing we'll handle everything under one roof.
                </p>
            </div>
            <div className="w-full lg:w-[75%] flex flex-col md:flex-row items-start md:space-x-5 space-y-5 md:!space-y-28">
                <div className="w-full [&>*:nth-child(1)]:rounded-tr-[70px] [&>*:nth-child(1)]:lg:rounded-tr-[90px] [&>*:nth-child(2)]:rounded-bl-[70px] [&>*:nth-child(2)]:lg:rounded-bl-[90px] space-y-5 ">
                    {FeaturesData.map((val: IFeaturesData, index: number) => {
                        return (
                            index % 2 === 0 &&
                            <div key={index} className="featuresAnimatedCard group relative bg-[--white] shadow-[0px_0px_42px_-7px_rgba(0,0,0,0.1)] overflow-hidden z-0 p-5 lg:p-7 h-max before:top-[-10px] before:left-[-10px] before:absolute before:bg-gradient-to-b before:from-[#f7941d] before:via-[#f7941d] before:to-[#fce3ba]  before:rounded-[40px] before:h-[40px] before:w-[40px] before:z-[-1] before:transition-transform before:duration-700 before:ease-out before:scale-100 before:origin-center before:content-['']">
                                {/* <Image src={"/images/orange-bg-tools-6.png"} alt="orange-bg-tool" width={1000} height={1000} className="w-[170px] h-[170px] absolute -bottom-5 -right-5 z-[-1] opacity-0 group-hover:opacity-85 transition-all ease-in-out duration-500 delay-100" /> */}
                                <div className="flex items-start space-x-4">
                                    <div className="border-2 border-[--primary-theme-color] group-hover:border-[--white] rounded-full p-3 w-max transition-all ease-in-out duration-500">{val.icon}</div>
                                    <div className="space-y-1">
                                        <h1 className="text-xl font-semibold text-[--primary-theme-color] group-hover:text-[--white] transition-all ease-in-out duration-500">{val.name}</h1>
                                        <h1 className="text-[13px] lg:text-[15px] group-hover:text-[--white] transition-all ease-in-out duration-500">{val.details}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full [&>*:nth-child(1)]:rounded-tl-[70px] [&>*:nth-child(1)]:lg:rounded-tl-[90px] [&>*:nth-child(2)]:rounded-br-[90px] [&>*:nth-child(2)]:lg:rounded-br-[70px] space-y-5">
                    {FeaturesData.map((val: IFeaturesData, index: number) => {
                        return (
                            index % 2 !== 0 && index <= 4 && <div key={index} className="featuresAnimatedCard group relative bg-[--white] shadow-[0px_0px_42px_-7px_rgba(0,0,0,0.1)] overflow-hidden z-0 p-5 lg:p-7 h-max before:top-[-10px] before:right-[-10px] before:absolute before:bg-gradient-to-b before:from-[#f7941d] before:via-[#f7941d] before:to-[#fce3ba] before:rounded-[40px] before:h-[40px] before:w-[40px] before:z-[-1] before:transition-transform before:duration-700 before:ease-out before:scale-100 before:origin-center before:content-['']">
                                {/* <Image src={"/images/orange-bg-tools-6.png"} alt="orange-bg-tool" width={1000} height={1000} className="w-[170px] h-[170px] absolute -bottom-5 -left-5 z-[-1] opacity-0 group-hover:opacity-85 transition-all ease-in-out duration-500 delay-100" /> */}
                                <div className="flex items-start space-x-4">
                                    <div className="border-2 border-[--primary-theme-color] group-hover:border-[--white]  rounded-full p-2 lg:p-3">{val.icon}</div>
                                    <div className="space-y-1 ">
                                        <h1 className="text-xl font-semibold text-[--primary-theme-color] group-hover:text-[--white] transition-all ease-in-out duration-500">{val.name}</h1>
                                        <h1 className="text-[13px] lg:text-[15px] group-hover:text-[--white] transition-all ease-in-out duration-500">{val.details}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Features