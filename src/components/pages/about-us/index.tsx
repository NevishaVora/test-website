"use client";

import AboutRules from "@src/components/aboutRules";
import Banner from "@src/components/banner";
// import OurTeams from "@src/components/ourTeams"
import WhoWeAre from "@src/components/whoWeAre";
import { AchievementData } from "@src/constant";
import { IAchievementData } from "@src/types";

const AboutUs = () => {
    return (
        <div>
            <Banner
                route={"/about-us"}
                name={"About Us"}
                title={"About Onehub Solutions"}
            />

            <WhoWeAre />

            <div className="bg-[--black] mb-20">
                <div className="mainContainer pt-20 pb-20">
                    <div className="text-center">
                        <h1>
                            <span className="text-xl md:text-2xl lg:text-3xl font-medium text-[--white]">
                                Partner{" "}
                            </span>
                            <span className="heading text-2xl md:text-3xl lg:text-4xl font-bold text-[--white]">
                                WITH US
                            </span>
                        </h1>

                        <h2 className="text-lg md:text-xl font-medium mt-4 mb-4 text-[--white]">
                            2+ Years of Commercial Experience Delivering Custom
                            Software Development Solutions
                        </h2>

                        <p className="text-[--white] text-sm sm:text-base lg:text-[18px] max-w-5xl mx-auto">
                            Onehub is a reliable digital transformation partner,
                            providing customized software development, business
                            intelligence, and mobile/web app development services
                            to help you stay ahead in the dynamic business
                            landscape. We are among the top 1% talent on freelance
                            portals like Upwork.
                        </p>
                    </div>

                    {/* Achievement Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {AchievementData.map(
                            (val: IAchievementData, index: number) => (
                                <div
                                    key={index}
                                    className="linearInnerBackground shadow-inner transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-center bg-[--white] rounded-xl py-10 px-4"
                                >
                                    <div className="w-max relative ml-2">
                                        {val.icons}

                                        <svg
                                            width="66"
                                            height="56"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute -top-1 -left-4"
                                        >
                                            <path
                                                opacity="0.9"
                                                d="M0 14.169 25.047 0l24.771 14.169v27.803L25.047 55.873 0 41.972V14.169Z"
                                                fill="var(--primary-shadow-color)"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl font-semibold text-center mt-5">
                                        {val.digit}
                                    </h3>

                                    <h4 className="font-semibold text-xl text-[--gray] text-center">
                                        {val.title}
                                    </h4>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* <OurTeams /> */}
            <AboutRules />
        </div>
    );
};

export default AboutUs;