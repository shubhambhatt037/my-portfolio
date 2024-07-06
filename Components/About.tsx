// import React from "react";
// import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
// import Image from "next/legacy/image";

// interface Cta {
//   title: string;
//   url: string;
//   sameTab: boolean;
// }

// const About: React.FC = () => {
//   const resumePath = '/Shubham-Resume.pdf';
//   const cta: Cta = {
//     title: "Download Resume",
//     url: resumePath,
//     sameTab: false, // Open in a new tab
//   };

//   const handleDownloadResume = () => {
//     if (cta.sameTab) {
//       window.open(cta.url, '_self');
//     } else {
//       window.open(cta.url, '_blank');
//     }
//   };

//   return (
//     <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" id="about">
//       <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
//         <div className="md:pl-10">
//           <h1 className="text-[50px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
//             ABOUT ME
//           </h1>
//           <h2 className="text-[25px] md:text-[35px] 1g:text-[45px] md:leading-[3rem] leading-[2rem] capitalize
//          mb-[rem] font-bold text-white">
//             Transforming <span className=" text-yellow-400">Visions</span>
//           </h2>
//           <div className="mb-[3rem] flex items-center md:space-x-10">
//             <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
//             <p className="text-[19px] text-slate-300 w-[80%]">
//               My career objective is to utilize my fervent passion for technology and adept problem-solving skills to make 
//               significant contributions to innovative projects. I am committed to a continuous journey of learning, where I 
//               will not only refine existing skills but also eagerly acquire new ones. Through this dedication to personal 
//               growth and development, I aspire to not only advance my own career but also bring substantial value to the 
//               organization I am privileged to work for.
//             </p>
//           </div>
//           <button
//             className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] 
//             font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
//             onClick={handleDownloadResume}
//           >
//             {cta.title}
//             <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
//           </button>
//         </div>
//         <div data-aos="fade-left" className="lg:w-[500x] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
//           <Image src="/images/about.jpg" alt="user" layout="fill" objectFit="contain" className="relative z-[11]
//             w-[100%] h-[100%] object-contain " sizes="(max-width: 768px) 100vw, 500px" />
//           <div className="absolute w-[100%] -[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
//         </div>
//         <div className="hidden md:block"></div>
//       </div>
//     </div>
//   );
// }; 

// export default About;

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
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] lg:w-[80%] mx-auto gap-[3rem] items-center">
        <div className="md:pl-10">
          <h1 className="text-[40px] md:text-[50px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">
            Transforming <span className=" text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-full md:w-[80%]">
              My career objective is to utilize my fervent passion for technology and adept problem-solving skills to make significant contributions to innovative projects. I am committed to a continuous journey of learning, where I will not only refine existing skills but also eagerly acquire new ones. Through this dedication to personal growth and development, I aspire to not only advance my own career but also bring substantial value to the organization I am privileged to work for.
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            onClick={handleDownloadResume}
          >
            {cta.title}
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image src="/images/about.jpg" alt="user" layout="fill" objectFit="contain" className="relative z-[11] w-[100%] h-[100%] object-contain" sizes="(max-width: 768px) 100vw, 500px" />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
// import Image from "next/legacy/image";
// import styled from "styled-components";

// interface Cta {
//   title: string;
//   url: string;
//   sameTab: boolean;
// }

// const About: React.FC = () => {
//   const resumePath = '/Shubham-Resume.pdf';
//   const cta: Cta = {
//     title: "Download Resume",
//     url: resumePath,
//     sameTab: false, // Open in a new tab
//   };

//   const handleDownloadResume = () => {
//     if (cta.sameTab) {
//       window.open(cta.url, '_self');
//     } else {
//       window.open(cta.url, '_blank');
//     }
//   };

//   return (
//     <AboutSection id="about">
//       <ContentGrid>
//         <TextContent>
//           <Heading>ABOUT ME</Heading>
//           <SubHeading>
//             Transforming <Highlight>Visions</Highlight>
//           </SubHeading>
//           <TextContainer>
//             <Divider />
//             <Description>
//               My career objective is to utilize my fervent passion for technology and adept problem-solving skills to make significant contributions to innovative projects. I am committed to a continuous journey of learning, where I will not only refine existing skills but also eagerly acquire new ones. Through this dedication to personal growth and development, I aspire to not only advance my own career but also bring substantial value to the organization I am privileged to work for.
//             </Description>
//           </TextContainer>
//           <DownloadButton onClick={handleDownloadResume}>
//             {cta.title}
//             <ArrowDownTrayIcon className="icon" />
//           </DownloadButton>
//         </TextContent>
//         <ImageContainer data-aos="fade-left">
//           <StyledImage src="/images/about.jpg" alt="user" layout="fill" objectFit="contain" sizes="(max-width: 768px) 100vw, 500px" />
//           <Overlay />
//         </ImageContainer>
//         <Spacer />
//       </ContentGrid>
//     </AboutSection>
//   );
// };

// const AboutSection = styled.div`
//   background-color: #121121;
//   padding-bottom: 3rem;
//   padding-top: 4rem;

//   @media (min-width: 768px) {
//     padding-top: 8rem;
//   }
// `;

// const ContentGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   width: 90%;
//   margin: 0 auto;
//   gap: 3rem;
//   align-items: center;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//     width: 80%;
//   }
// `;

// const TextContent = styled.div`
//   padding-left: 10px;

//   @media (min-width: 768px) {
//     padding-left: 10%;
//   }
// `;

// const Heading = styled.h1`
//   font-size: 40px;
//   font-weight: bold;
//   text-transform: uppercase;
//   color: #55e6a5;
//   margin-bottom: 1rem;

//   @media (min-width: 768px) {
//     font-size: 50px;
//   }
// `;

// const SubHeading = styled.h2`
//   font-size: 25px;
//   line-height: 2rem;
//   text-transform: capitalize;
//   margin-bottom: 1rem;
//   font-weight: bold;
//   color: white;

//   @media (min-width: 768px) {
//     font-size: 35px;
//     line-height: 3rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 45px;
//   }
// `;

// const Highlight = styled.span`
//   color: #ffdd57;
// `;

// const TextContainer = styled.div`
//   margin-bottom: 3rem;
//   display: flex;
//   align-items: center;
//   space-x: 10px;

//   @media (min-width: 768px) {
//     space-x: 10px;
//   }
// `;

// const Divider = styled.span`
//   width: 100px;
//   height: 5px;
//   background-color: #718096;
//   border-radius: 5px;
//   display: none;

//   @media (min-width: 768px) {
//     display: block;
//   }
// `;

// const Description = styled.p`
//   font-size: 19px;
//   color: #a0aec0;
//   width: 100%;

//   @media (min-width: 768px) {
//     width: 80%;
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
//   space-x: 2px;
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

// const ImageContainer = styled.div`
//   position: relative;
//   width: 300px;
//   height: 300px;
//   margin: 2rem auto;

//   @media (min-width: 1024px) {
//     width: 500px;
//     height: 500px;
//     margin: 0;
//   }
// `;

// const StyledImage = styled(Image)`
//   position: relative;
//   z-index: 11;
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 10;
//   background-color: #55e6a5;
//   top: -2rem;
//   right: -2rem;
// `;

// const Spacer = styled.div`
//   display: none;

//   @media (min-width: 768px) {
//     display: block;
//   }
// `;

// export default About;
