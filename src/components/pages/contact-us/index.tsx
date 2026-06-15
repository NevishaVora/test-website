"use client"

import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Banner from "@src/components/banner";
import Link from "next/link";
import ContactForm from '@src/components/Forms/contactForm';
import { InformationData } from '@src/constant';
import Image from 'next/image';

const ContactUs = () => {

    return (
        <div className="">
            <Banner route={"/contact-us"} name={"Contact Us"} title={"Contact with Onehub Solutions"} />
            <div className='contactUsBannerSection py-20'>
                <div className="mainContainer flex flex-col lg:flex-row justify-between items-center space-x-6 w-full">
                    <div className='w-full lg:w-[50%] sm:border-2 rounded-xl bg-[--white] pt-10 pb-14 sm:shadow-[0px_0px_32px_-7px_rgba(0,0,0,0.1)]'>
                        <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-center font-bold">Get In Touch with Us</h1>
                        <p className="text-[--gray] text-sm sm:text-base lg:text-[18px] text-center w-[80%] mx-auto !mt-3">We provide digital experience services to startups and small businesses.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className="linearShadowBackground mb-14 relative overflow-hidden">
                <div className="mainContainer pt-20 pb-14 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-14 lg:space-y-0 xl:space-x-10">
                    <div className="flex flex-col justify-center items-center space-y-2 w-full">
                        <EmailOutlinedIcon className="text-[50px] text-[--primary-theme-color] animate-bounce" />
                        <h1 className="font-medium text-lg md:text-xl">Email</h1>
                        <p className="text-[--gray] text-base md:text-lg text-center"> Our friendly team is here to help.</p>
                        <Link href={`mailto:${InformationData.email}`} target="_blank" className="text-center text-[15px] md:text-base text-[--primary-theme-color] hover:underline">{InformationData.email}</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 w-full">
                        <LocationOnOutlinedIcon className="text-[50px] text-[--primary-theme-color] animate-bounce" />
                        <h1 className="font-medium text-lg md:text-xl">Corporate Address</h1>
                        <p className="text-[--gray] text-base md:text-lg text-center"> Come say hello at our office HQ.</p>
                        <Link href={InformationData.addressLink} target="_blank" className="text-center text-[15px] md:text-base text-[--primary-theme-color] hover:underline w-[80%]">{InformationData.address}</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 w-full">
                        <CallOutlinedIcon className="text-[50px] text-[--primary-theme-color] animate-bounce" />
                        <h1 className="font-medium text-lg md:text-xl">Contact Number</h1>
                        <p className="text-[--gray] text-base md:text-lg text-center"> Mon-Sat from 9:30 AM to 7:00 PM.</p>
                        <Link href={`tel:${InformationData.contactNumber}`} target="_blank" className="text-center text-[15px] md:text-base text-[--primary-theme-color] hover:underline">{InformationData.contactNumber}</Link>
                    </div>
                </div>
                
                <Image src={"/images/orange-bg-tools-6.png"} alt="orange-bg-tool" width={1000} height={1000} className="w-[450px] h-[330px] absolute -bottom-5 -right-5 z-[-1] opacity-25" />
            </div>
        </div>
    )
}

export default ContactUs