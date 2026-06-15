"use client"

import { WhoWeAreData } from "@src/constant"
import { IWhoWeAreData } from "@src/types"

const WhoWeAre = () => {
    return (
        <div className="whoWeAreBannerSection">
            <div className="mainContainer pt-14 pb-20 space-y-2 ">
                <h1 className="text-lg lg:text-xl text-center font-semibold">Who we are?</h1>
                <div>
                    <h1 className="text-[--primary-theme-color] text-xl md:text-3xl lg:text-4xl text-center font-bold">EXPERIENCE : EXCELLENCE : ENTHUSIASM </h1>
                    <p className="text-lg lg:text-xl text-center font-medium">We craft solutions that elevate your business.</p>
                </div>
                <p className="text-[--gray] font-medium text-sm sm:text-base text-center lg:w-[90%] mx-auto">Onehub Solution is your go-to technology partner in Ahmedabad, delivering unparalleled business solutions. Our expertise and commitment to customer satisfaction drive everything we do.</p>
                <div className="!mt-24 grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10">
                    {WhoWeAreData.map((val: IWhoWeAreData, index: number) => {
                        return (
                            <div key={index} className="group whoWeAreCard relative border-[3px] border-dashed border-slate-200 rounded-2xl px-3 pt-3 w-full h-full bg-[--white] hover:shadow-2xl hover:-translate-y-5 transition-all ease-in-out duration-500">
                                {/* <Image src={"/images/orange-bg-tools-5.png"} alt="orange-bg-tool" width={1000} height={1000} className="absolute w-[150px] object-contain opacity-0 group-hover:opacity-50 transition-all ease-in-out duration-300 -scale-x-100 -ml-3" /> */}
                                <div className="whoWeAreCardContent rounded-2xl py-4 px-6 bg-[#F0F3F7] w-full h-full flex flex-col justify-start items-end transition-all ease-in-out duration-500">
                                    <div className="whoWeAreIcon absolute rounded-full p-3 -top-8 left-7 bg-[--primary-theme-color] text-[--white] w-max mx-auto border-[--primary-theme-color] shadow-[0_-2px_5px_5px_rgba(247,148,29,0.2),inset_0_4px_4px_rgba(19,120,252,0)] group-hover:text-[--primary-theme-color] group-hover:bg-[--white] transition-all ease-in-out duration-500">{val.image}</div>
                                    <h1 className="!text-right text-4xl text-[--primary-shadow-color] font-bold absolute top-5 group-hover:text-[--primary-theme-color] ">{val.title}</h1>
                                    <p className="whoWeAreDetails text-sm md:text-base text-center !mb-5 !mt-12 group-hover:text-[--white]">{val.details}</p>
                                    <div className="absolute -bottom-2 z-50 left-0 right-0 mx-auto w-[70%] h-[10px] bg-[--primary-theme-color] rounded-b-xl"></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre