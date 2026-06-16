"use client"

import DoneAllIcon from '@mui/icons-material/DoneAll';
import { AboutRulesData } from "@src/constant";

const AboutRules = () => {
    return (
        <div className="mainContainer pt-10 pb-20 flex flex-col lg:flex-row items-start justify-between space-y-5 lg:space-y-0 lg:space-x-5">
            <div className="w-full lg:w-[50%] lg:sticky lg:top-[140px] lg:self-start text-center lg:text-left mx-auto lg:mx-0">
                <h1 className="text-lg lg:text-xl font-semibold">
                    We have a couple of
                </h1>

                <h1 className="heading text-2xl md:text-3xl lg:text-4xl font-bold">
                    Ground rules at Onehub
                </h1>

                <p className="text-[--gray] text-sm sm:text-base lg:text-[18px] lg:w-[80%] mt-5 mx-auto lg:mx-0">
                    we are accountable for our actions and that determines our reputation.
                    From Software development to our corporate culture and relationships,
                    our goal is for everything we create and cultivate to live up to the
                    tenets of our Core values.
                </p>
            </div>
            <div className="w-full lg:w-[50%] space-y-5">
                {Object.values(AboutRulesData).map((section: { name: string, child: string[] }, sectionIndex: number) => (
                    <div key={sectionIndex} className="space-y-5">
                        <h1 className="text-xl lg:text-3xl font-semibold">{section.name}</h1>
                        <ul className="list-none space-y-5">
                            {section.child.map((val: string, childIndex: number) => (
                                <div key={childIndex} className="flex items-start space-x-3">
                                    <div className="rounded-full p-1">
                                        <DoneAllIcon className="text-[--primary-theme-color] text-[23px]" />
                                    </div>
                                    <li className="text-sm lg:text-[19px] text-[--gray]">{val}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutRules