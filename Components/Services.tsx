import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className=" bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Utilizing C, C++, and Java, along with HTML and CSS, I craft
              visually appealing and interactive user interfaces. Proficient in
              JavaScript and its frameworks like React.js, I bring dynamic
              functionality to web applications, ensuring seamless user
              experiences.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className=" bg-red-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Leveraging Python, Node.js, and FastAPI, I develop robust
              server-side logic and APIs, ensuring efficient data handling and
              processing. Experienced in database management with MySQL and
              Prisma, I implement secure and scalable data storage solutions for
              applications.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className=" bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              FullStack
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Combining my expertise in frontend and backend technologies, I
              create fullstack applications using frameworks like Next.js.
              Proficient in version control with Git and GitHub, I collaborate
              effectively in development teams, ensuring smooth project
              workflows and code management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
