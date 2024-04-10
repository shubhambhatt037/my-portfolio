import React from "react";

interface Props {
  title: string;
  year: string;
  content?: string; 
}

const SkillsItem = ({ title, year, content }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
        {year}{" "}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      {title === "Bachelor of Technology" && (
        // Render custom content for Bachelor of Technology
        <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 ">
          {/* Add custom content here */}
          Computer Science and Engineering<br></br>
          CGPA - 8.17<br></br>
          Graphic Era Hill University, Dehradun
        </p>
      )}
      {title === "Intermediate" && (
        // Render custom content for Intermediate
        <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 ">
          {/* Add custom content here */}
          Physics, Chemistry, Maths and Computer Science<br></br>
          Percentage - 91.6%<br></br>
          Gen BC Joshi Army Public School, Pithoragarh
        </p>
      )}
      {title === "High School" && (
        // Render custom content for High School
        <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 ">
          {/* Add custom content here */}
          Maths, Science and Social Science<br></br>
          Percentage - 84%<br></br>
          Don Bosco School, Pithoragarh
        </p>
      )}
      {content && (
        // Render custom content if provided
        <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 ">
          {content}
        </p>
      )}
    </div>
  );
};

export default SkillsItem;
