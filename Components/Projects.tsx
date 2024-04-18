import React from "react";

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
    githubLink: "https://github.com/username/project6",
  },
];

const Projects = () => {
  return (
    <div id="projects">
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]" >
      <h1 className="heading">
        PRO<span className="text-yellow-400">JECTS</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectsData.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${300 * index}`}>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
              <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
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
    </div>
  );
};

export default Projects;
