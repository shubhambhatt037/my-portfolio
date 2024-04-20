import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/legacy/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

interface Cta {
  title: string;
  url: string;
  sameTab: boolean;
}

const Hero: React.FC = () => {
  const resumePath = "/Shubham-Resume.pdf";
  const cta: Cta = {
    title: "Download Resume",
    url: resumePath,
    sameTab: false,
  };

  const handleDownloadResume = () => {
    if (cta.sameTab) {
      window.open(cta.url, "_self");
    } else {
      window.open(cta.url, "_blank");
    }
  };

  return (
    <div
      className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center"
      id="home"
    >
      <Particle />
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2  h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I'M <span className="text-yellow-400">SHUBHAM </span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            A relentless problem solver and tech enthusiast, driven by ambition
            and a commitment to lifelong learning.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              type="button"
              onClick={handleDownloadResume}
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] 
              font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            >
              {cta.title}
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[500px] bg-[#55e6a5] relative flex justify-center lg:flex lg:items-center rounded-full h-[500px]">
          <Image
            src="/images/hero.jpeg"
            alt="user"
            layout="intrinsic"
            width={500}
            height={500}
            className="object-cover rounded-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
