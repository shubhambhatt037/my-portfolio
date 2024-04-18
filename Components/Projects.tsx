import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  background-color: #02050a;
  padding-top: 4rem;
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  width: 80%;
  padding-top: 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectCard = styled.div`
  transform: translateY(0);
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
  background-color: #1a1a1a;
  color: white;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <h1 className="heading">
        PRO<span className="text-yellow-400">JECTS</span>
      </h1>
      <Wrapper>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} data-aos="fade-up" data-aos-delay={`${300 * index}`}>
            <ProjectImage src={project.image} alt={project.name} />
            <ProjectInfo>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
              <a href={project.githubLink} className="text-blue-500 hover:underline" rel="noopener noreferrer">
                GitHub Link
              </a>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Projects;
