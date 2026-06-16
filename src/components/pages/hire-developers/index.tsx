"use client"

import Banner from "@src/components/banner";
import HiredForm from "@src/components/Forms/hiredForm";

const HireDevelopers = () => {
    return (
        <div>
            <Banner route={"/hire-developers"} name={"Hire Developers"} title={"Hire Developers"} />
            <div className="homeBannerSection">
                <div className="mainContainer pt-14 pb-20">
                    <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-center font-bold">Ready to start a Project?</h1>
                    <p className="text-[--gray] text-sm sm:text-base lg:text-[18px] text-center lg:w-[80%] mx-auto !mt-5">To start, use form below to tell us about you and the project</p>

                    <div className="flex justify-center items-center !mt-14">
                        <div>
                            <HiredForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireDevelopers