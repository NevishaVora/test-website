"use client"
import { ITechnologiesChild, ITechnologies } from "@src/types"
import Image from "next/image"
import { useEffect, useState } from "react"
import { TechnologiesData } from "../../constant"

const Technologies = () => {
    const [technologiesTypeLabel, setTechnologiesTypeLabel] = useState<string>("front-end")
    const [technologiesImage, setTechnologiesImage] = useState<ITechnologies | null | undefined>(null)

    useEffect(() => {
        const selectedTechnology = TechnologiesData.find((val: ITechnologies) => val.name === technologiesTypeLabel)
        setTechnologiesImage(selectedTechnology)
    }, [technologiesTypeLabel])

    return (
        <div className="mainContainer pt-14 pb-20">
            <h1 className="text-lg lg:text-xl text-center font-semibold">We work with</h1>
            <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-center font-bold">Technologies & Tools</h1>
            <p className="text-[--gray] text-sm sm:text-base lg:text-[18px] text-center lg:w-[80%] mx-auto !mt-5">Onehub using Cutting Edge Technologies for boosting their clients businesses to build their reputation in the eyes of their customers and partners. We are using the latest technology to automate mundane tasks and streamline processes.</p>
            <ul className="scrollbarHide flex items-center justify-between overflow-y-auto mx-auto space-x-5 lg:space-x-7 sm:py-4 sm:w-[80%] xl:w-[70%] !mt-10" >
                {TechnologiesData?.map((val: ITechnologies, index: number) => {
                    return (
                        <li key={index} className={`${technologiesTypeLabel === val.name ? " border-[--primary-theme-color]" : " border-transparent"} hover:text-[--primary-theme-color] border-b-2 lg:border-b-4 whitespace-nowrap text-sm cursor-pointer text-slate-700 font-semibold lg:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setTechnologiesTypeLabel(val.name)}>{val.label}</li>
                    )
                })}
            </ ul>
            <div className="flex flex-wrap justify-center gap-10 lg:gap-0 lg:gap-y-10 !mt-10">
                {technologiesImage?.child?.map((val: ITechnologiesChild, index: number) => {
                    return (
                        <div className="w-1/3 sm:w-1/4 md:w-1/6 " data-aos="flip-up" key={index}>
                            <Image src={val.image} alt="data" className="object-contain w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-2" width={1000} height={1000} />
                            <p className="font-semibold tracking-wide text-md text-center ">{val.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies