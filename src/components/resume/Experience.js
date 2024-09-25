import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Infosys - (2021 - 2022)"
            result="BANGLORE"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Banglore isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Fues - (2022 - 2023)"
            result="CHENNAI "
            des="The Chennai economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
        
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
