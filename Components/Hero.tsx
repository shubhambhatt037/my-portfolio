import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/legacy/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import styled from "styled-components";

interface Cta {
  title: string;
  url: string;
  sameTab: boolean;
}

const Container = styled.div`
  height: 88vh;
  margin-top: 10vh;
  padding: 50px;
  background-image: url('/images/banner.jpg');
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Hero: React.FC = () => {
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
    <Container id="home">
      <Particle />
      <ContentWrapper>
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">SHUBHAM </span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            A relentless problem solver and tech enthusiast, driven by ambition and a commitment to lifelong learning.
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
            className="object-cover rounded-full"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Hero;
