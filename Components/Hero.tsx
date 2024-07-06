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
            HI, I&apos;M <span className="text-yellow-400">SHUBHAM </span>
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

// import React from "react";
// import Particle from "./Particle";
// import TextEffect from "./TextEffect";
// import Image from "next/legacy/image";
// import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
// import styled from "styled-components";

// interface Cta {
//   title: string;
//   url: string;
//   sameTab: boolean;
// }

// const Hero: React.FC = () => {
//   const resumePath = "/Shubham-Resume.pdf";
//   const cta: Cta = {
//     title: "Download Resume",
//     url: resumePath,
//     sameTab: false,
//   };

//   const handleDownloadResume = () => {
//     if (cta.sameTab) {
//       window.open(cta.url, "_self");
//     } else {
//       window.open(cta.url, "_blank");
//     }
//   };

//   return (
//     <HeroSection id="home">
//       <Particle />
//       <ContentGrid>
//         <TextContent>
//           <Heading>
//             HI, I'M <Highlight>SHUBHAM</Highlight>
//           </Heading>
//           <TextEffect />
//           <Description>
//             A relentless problem solver and tech enthusiast, driven by ambition
//             and a commitment to lifelong learning.
//           </Description>
//           <ButtonContainer>
//             <DownloadButton type="button" onClick={handleDownloadResume}>
//               {cta.title}
//               <ArrowDownTrayIcon className="icon" />
//             </DownloadButton>
//           </ButtonContainer>
//         </TextContent>
//         <ImageWrapper>
//           <StyledImage
//             src="/images/hero.jpeg"
//             alt="user"
//             layout="intrinsic"
//             width={500}//             height={500}
//           />
//         </ImageWrapper>
//       </ContentGrid>
//     </HeroSection>
//   );
// };

// const HeroSection = styled.div`
//   height: 88vh;
//   background-image: url('/images/banner.jpg');
//   background-size: cover;
//   background-position: center;
//   margin-top: 10vh;
//   position: relative;
// `;

// const ContentGrid = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr;
//   height: 100%;
//   align-items: center;

//   @media (min-width: 640px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const TextContent = styled.div``;

// const Heading = styled.h1`
//   font-size: 35px;
//   font-weight: bold;
//   color: white;

//   @media (min-width: 768px) {
//     font-size: 50px;
//   }
// `;

// const Highlight = styled.span`
//   color: #ffdd57;
// `;

// const Description = styled.p`
//   margin-top: 1.5rem;
//   font-size: 18px;
//   color: rgba(255, 255, 255, 0.57);
// `;

// const ButtonContainer = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;

//   @media (min-width: 640px) {
//     flex-direction: row;
//     align-items: center;
//     gap: 6px;
//   }
// `;

// const DownloadButton = styled.button`
//   padding: 1rem 2rem;
//   font-size: 18px;
//   font-weight: bold;
//   text-transform: uppercase;
//   background-color: #55e6a5;
//   color: black;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #ffdd57;
//   }

//   .icon {
//     width: 1.6rem;
//     height: 1.7rem;
//     color: black;
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 100%;
//   background-color: #55e6a5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   height: 500px;
//   position: relative;

//   @media (min-width: 640px) {
//     width: 500px;
//   }
// `;

// const StyledImage = styled(Image)`
//   object-fit: cover;
//   border-radius: 50%;
//   max-width: 100%;
// `;

// export default Hero;
