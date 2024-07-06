import React from "react";
import Image from "next/legacy/image";

const projectsData = [
  {
    name: "Discord Clone",
    image: "/images/discord.png",
    description: "Real time Chat Application",
    githubLink: "https://github.com/shubhambhatt037/discord-clone",
  },
  {
    name: "Food Chat Bot",
    image: "/images/food.png",
    description: "AI chatbot for ordering food items",
    githubLink: "https://github.com/shubhambhatt037/FoodChatBot",
  },
  {
    name: "Movie Recommendation System",
    image: "/images/movierecommendation.png",
    description: "Content-based Movie Recommendation System",
    githubLink: "https://github.com/shubhambhatt037/Movie-Recommendation-System",
  },
  {
    name: "Weather App",
    image: "/images/weather.png",
    description: "A responsive weather application",
    githubLink: "https://github.com/shubhambhatt037/WeatherApp",
  },
  {
    name: "Quick Info Bot",
    image: "/images/chatbot.avif",
    description: "Gives short summary of any topic of your choice from wikipedia",
    githubLink: "https://github.com/shubhambhatt037/QuickInfoBot",
  },
  {
    name: "Sentiment Analysis",
    image: "/images/twitter.jpeg",
    description: "Analysis of sentiments in tweets",
    githubLink: "https://github.com/shubhambhatt037/QuickInfoBot",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]" id="projects">
      <h1 className="heading">
        PRO<span className="text-yellow-400">JECTS</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectsData.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${300 * index}`}>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" />
            </div>
            <div className="text-white mt-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
              <a href={project.githubLink} className="text-blue-500 hover:underline" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// import React from "react";
// import Image from "next/legacy/image";
// import styled from "styled-components";

// const projectsData = [
//   {
//     name: "Discord Clone",
//     image: "/images/discord.png",
//     description: "Real time Chat Application",
//     githubLink: "https://github.com/shubhambhatt037/discord-clone",
//   },
//   {
//     name: "Food Chat Bot",
//     image: "/images/food.png",
//     description: "AI chatbot for ordering food items",
//     githubLink: "https://github.com/shubhambhatt037/FoodChatBot",
//   },
//   {
//     name: "Movie Recommendation System",
//     image: "/images/movierecommendation.png",
//     description: "Content-based Movie Recommendation System",
//     githubLink: "https://github.com/shubhambhatt037/Movie-Recommendation-System",
//   },
//   {
//     name: "Weather App",
//     image: "/images/weather.png",
//     description: "A responsive weather application",
//     githubLink: "https://github.com/shubhambhatt037/WeatherApp",
//   },
//   {
//     name: "Quick Info Bot",
//     image: "/images/chatbot.avif",
//     description: "Gives short summary of any topic of your choice from wikipedia",
//     githubLink: "https://github.com/shubhambhatt037/QuickInfoBot",
//   },
//   {
//     name: "Sentiment Analysis",
//     image: "/images/twitter.jpeg",
//     description: "Analysis of sentiments in tweets",
//     githubLink: "https://github.com/shubhambhatt037/QuickInfoBot",
//   },
// ];

// const Projects = () => {
//   return (
//     <ProjectsSection id="projects">
//       <Heading>
//         PRO<span className="highlight">JECTS</span>
//       </Heading>
//       <ProjectsGrid>
//         {projectsData.map((project, index) => (
//           <ProjectCard key={index} data-aos="fade-up" data-aos-delay={`${300 * index}`}>
//             <ImageWrapper>
//               <StyledImage src={project.image} alt={project.name} layout="fill" objectFit="cover" />
//             </ImageWrapper>
//             <ProjectInfo>
//               <ProjectName>{project.name}</ProjectName>
//               <ProjectDescription>{project.description}</ProjectDescription>
//               <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
//                 GitHub Link
//               </ProjectLink>
//             </ProjectInfo>
//           </ProjectCard>
//         ))}
//       </ProjectsGrid>
//     </ProjectsSection>
//   );
// };

// const ProjectsSection = styled.div`
//   background-color: #02050a;
//   padding-top: 4rem;
//   padding-bottom: 1rem;

//   @media (min-width: 768px) {
//     padding-top: 8rem;
//   }
// `;

// const Heading = styled.h1`
//   text-align: center;
//   color: white;
//   font-size: 28px;
//   font-weight: bold;
//   text-transform: uppercase;

//   .highlight {
//     color: #ffdd57;
//   }

//   @media (min-width: 640px) {
//     font-size: 33px;
//   }

//   @media (min-width: 768px) {
//     font-size: 45px;
//   }
// `;

// const ProjectsGrid = styled.div`
//   width: 80%;
//   padding-top: 2rem;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 2rem;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: 1fr 1fr 1fr;
//   }
// `;

// const ProjectCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
//   transition: transform 0.2s;

//   &:hover {
//     transform: translateY(-1.5rem);
//   }
// `;

// const ImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 200px;

//   @media (min-width: 768px) {
//     height: 300px;
//   }
// `;

// const StyledImage = styled(Image)`
//   border-radius: 8px;
// `;

// const ProjectInfo = styled.div`
//   margin-top: 0.5rem;
//   color: white;
// `;

// const ProjectName = styled.h3`
//   font-size: 1.125rem;
//   font-weight: 600;
// `;

// const ProjectDescription = styled.p`
//   font-size: 0.875rem;
//   margin-top: 0.25rem;
// `;

// const ProjectLink = styled.a`
//   color: #1e90ff;
//   font-size: 0.875rem;
//   margin-top: 0.25rem;
//   display: inline-block;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export default Projects;
