"use client"

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { FooterRoutes, InformationData, Logos } from "../../../constant";
import Image from "next/image";
import Link from "next/link";
import { IFooterRoutes } from '@src/types';

const Footer = () => {
    return (
        <div className="footerSection shadow-inner !z-10">
            <div className="mainContainer pt-16 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-16">
                    <div className="space-y-5">
                        <div className="w-[80px] lg:w-[100px] 3xl:w-[120px]">
                            <Image src={Logos.verticalBlackLogo} alt="logo" width={1500} height={1500} className="w-[100%] h-[100%] object-contain" />
                        </div>
                        <p className="text-base 3xl:text-xl font-semibold w-[90%] text-[--gray]">Onehub Solution is one of the best web design and development company in Ahmedabad. We build a website with the latest technology and framework.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="space-y-2">
                            <h1 className="font-semibold text-lg 3xl:text-2xl text-[--primary-theme-color]">Quick Links</h1>
                            <div className="bar w-[50px]"></div>
                        </div>
                        <ul className="list-none space-y-2 !mt-5 flex flex-col">
                            {FooterRoutes.map((val: IFooterRoutes, index: number) => {
                                return (
                                    <Link href={val.path} key={index} className=" text-base 3xl:text-xl text-left text-[--gray] font-semibold list-none w-max transition-all ease-in-out duration-500 hover:text-[--primary-theme-color] hover:translate-x-2 cursor-pointer space-x-2">
                                        <ArrowForwardIosRoundedIcon fontSize="small" className="text-[14px]" />
                                        <span>{val.name}</span>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <div className="space-y-2">
                            <h1 className="font-semibold text-lg 3xl:text-2xl text-[--primary-theme-color]">Contact Us</h1>
                            <div className="bar w-[80px]"></div>
                        </div>
                        <div className="!mt-5 space-y-3 3xl:space-y-5">
                            <Link href={InformationData.addressLink} target="_blank" className="flex items-start space-x-2 pt-[2px] text-sm 3xl:text-xl cursor-pointer text-[--gray] hover:text-[--primary-theme-color] hover:underline transition-all ease-in-out duration-300">
                                <HomeWorkIcon />
                                <span className="font-semibold">{InformationData.address}</span>
                            </Link>
                            <Link href={`mailto:${InformationData.email}`} target="_blank" className="flex items-start space-x-2 pt-[2px] text-sm 3xl:text-xl cursor-pointer text-[--gray] hover:text-[--primary-theme-color] hover:underline transition-all ease-in-out duration-300 w-max">
                                <EmailIcon />
                                <span className="font-semibold">{InformationData.email}</span>
                            </Link>
                            <Link href={`tel:${InformationData.contactNumber}`} target="_blank" className="flex items-start space-x-2 pt-[2px] text-sm 3xl:text-xl cursor-pointer text-[--gray] hover:text-[--primary-theme-color] hover:underline transition-all ease-in-out duration-300 w-max">
                                <CallIcon />
                                <span className="font-semibold">{InformationData.contactNumber}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 py-4">
                    <h1 className="text-center text-sm"><span className="text-[--primary-theme-color] font-bold text-lg cursor-pointer hover:text-[--secondary-theme-color] transition-all ease-in-out duration-700">Onehub  Solutions</span> © {new Date().getFullYear()}. All rights reserved.</h1>
                </div>
            </div >
        </div >
    )
}

export default Footer