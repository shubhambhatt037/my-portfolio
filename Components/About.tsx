import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/legacy/image";

interface Cta {
  title: string;
  url: string;
  sameTab: boolean;
}

const About: React.FC = () => {
  const resumePath = '/Shubham-Resume.pdf';
  const cta: Cta = {
    title: "Download Resume",
    url: resumePath,
    sameTab: false, // Open in a new tab
  };

  const handleDownloadResume = () => {
    if (cta.sameTab) {
      window.open(cta.url, '_self');
    } else {
      window.open(cta.url, '_blank');
    }
  };

  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div className="md:pl-10">
          <h1 className="text-[50px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] 1g:text-[45px] md:leading-[3rem] leading-[2rem] capitalize
         mb-[rem] font-bold text-white">
            Transforming <span className=" text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              My career objective is to utilize my fervent passion for technology and adept problem-solving skills to make 
              significant contributions to innovative projects. I am committed to a continuous journey of learning, where I 
              will not only refine existing skills but also eagerly acquire new ones. Through this dedication to personal 
              growth and development, I aspire to not only advance my own career but also bring substantial value to the 
              organization I am privileged to work for.
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] 
            font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            onClick={handleDownloadResume}
          >
            {cta.title}
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div data-aos="fade-left" className="lg:w-[500x] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image src="/images/about.jpg" alt="user" layout="fill" objectFit="contain" className="relative z-[11]
            w-[100%] h-[100%] object-contain " sizes="(max-width: 768px) 100vw, 500px" />
          <div className="absolute w-[100%] -[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}; 

export default About;
