// import React from "react";
// import styled from "styled-components";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineSeparator,
//   TimelineConnector,
//   TimelineDot,
// } from "@mui/lab";

// const Container = styled.div`
//   background-color: #121121;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 0px 30px 0px 0px; /* Adjust padding as needed */
//   @media (max-width: 960px) {
//     padding: 0px;
//     margin: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   max-width: 1350px;
//   padding: 40px 0px 0px 0px;
// `;

// const Title = styled.h1`
//   font-size: 36px;
//   text-align: center;
//   font-weight: 600;
//   color: #f0e68c;
//   margin-bottom: 20px;
//   padding: 0px 0px 0px 50px;
// `;

// const TimelineSection = styled.div`
//   width: 60%;
//   @media (max-width: 660px) {
//     width: 100%;
//   }
// `;

// const EducationCard = styled.div`
//   background-color: #121121;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   margin-bottom: 30px;
//   width: 90%;
//   max-width: 800px;
//   display: flex;
//   flex-direction: row; /* Changed to column */
//   align-items: flex-start; /* Changed to flex-start */
//   gap: 20px;
//   transition: all 0.3s ease;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//   }
//   outline: 2px solid #854CE6;
//   @media (max-width: 768px) {
//     padding; 10px;
// }
// `;

// const Image = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   border-radius: 8px; /* Changed border-radius */
//   margin-right: 20px; /* Added margin-right */
//   @media (max-width: 768px) {
//     width: 50px;
//     height: 50px;
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   color: #fff; /* Changed text color */
// `;

// const School = styled.h3`
//   font-size: 20px;
//   margin: 0; /* Removed margin */
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Date = styled.p`
//   font-size: 16px;
//   margin: 0; /* Removed margin */
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Grade = styled.p`
//   font-size: 16px;
//   margin: 0; /* Removed margin */
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Degree = styled.p`
//   font-size: 16px;
//   margin: 0; /* Removed margin */
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Description = styled.p`
//   font-size: 16px;
//   color: grey;
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const EducationPage: React.FC = () => {
//   const education = [
//     {
//       id: 0,
//       img: "https://www.namastedehradun.com/wp-content/uploads/2016/06/Graphic_Era_Hill_University_Logo-300x300.png",
//       school: "Graphic Era Hill University, Dehradun",
//       date: "Sept 2021 - July 2025",
//       grade: "8.17 CGPA",
//       desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Graphic Era Hill University Dehradun Uttarakhand. I am currently in 3rd year. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
//       degree:
//         "Bachelor of Technology - BTech, Computer Science and Engineering",
//     },
//     {
//       id: 1,
//       img: "/images/aps.png",
//       school: "Genl BC Joshi Army Public School Pithoragarh",
//       date: "Apr 2019 - Apr 2020",
//       grade: "91.6%",
//       desc: "I completed my class 12 from General BC Joshi Army Public School Pithoragarh with subjects Physics, Chemistry, Maths and Computer Science",
//       degree: "CBSE(XII), Science with Computer",
//     },
//     {
//       id: 2,
//       img: "/images/dbs.jpeg",
//       school: "Don Bosco Sr Sec School Pithoragarh",
//       date: "Apr 2017 - Apr 2018",
//       grade: "82.5%",
//       desc: "I completed my class 10 education at Don Bosco Sr Sec School Pithoragarh, where I studied Science, Social Science, Mathematics, English, Hindi and Computer Science",
//       degree: "CBSE(X), Science with Computer",
//     },
//   ];

//   return (
//     <Container id="education">
//       <h1 className="heading">
//         EDU<span className="text-yellow-400">CATION</span>
//       </h1>
//       <Wrapper>
//         <TimelineSection>
//           <Timeline>
//             {education.map((edu, index) => (
//               <TimelineItem key={edu.id}>
//                 <EducationCard>
//                   <Image src={edu.img} alt={edu.school} />
//                   <Content>
//                     <School>{edu.school}</School>
//                     <Degree>{edu.degree}</Degree>
//                     <Date>{edu.date}</Date>
//                     <Grade>{edu.grade}</Grade>
//                     <Description>{edu.desc}</Description>
//                   </Content>
//                 </EducationCard>
//                 {index !== education.length && (
//                   <TimelineSeparator>
//                     <TimelineDot
//                       variant="outlined"
//                       color="secondary"
//                       sx={{ position: "relative", top: "-10px", left: "15px" }}
//                     />
//                     <TimelineConnector
//                       style={{
//                         background: "#854CE6",
//                         marginLeft: "20px",
//                         marginTop: "-10px",
//                         marginBottom: "30px",
//                       }}
//                     />
//                   </TimelineSeparator>
//                 )}
//               </TimelineItem>
//             ))}
//           </Timeline>
//         </TimelineSection>
//       </Wrapper>
//     </Container>
//   );
// };

// export default EducationPage;


import React from "react";
import styled from "styled-components";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
} from "@mui/lab";

const Container = styled.div`
  background-color: #121121;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  @media (max-width: 960px) {
    padding: 0;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding-top: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  color: #f0e68c;
  margin-bottom: 20px;
  padding-left: 50px;
`;

const TimelineSection = styled.div`
  width: 60%;
  @media (max-width: 660px) {
    width: 100%;
  }
`;

const EducationCard = styled.div`
  background-color: #121121;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  outline: 2px solid #854ce6;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
`;

const School = styled.h3`
  font-size: 20px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Date = styled.p`
  font-size: 16px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.p`
  font-size: 16px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Degree = styled.p`
  font-size: 16px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: grey;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationPage: React.FC = () => {
  const education = [
    {
      id: 0,
      img: "https://www.namastedehradun.com/wp-content/uploads/2016/06/Graphic_Era_Hill_University_Logo-300x300.png",
      school: "Graphic Era Hill University, Dehradun",
      date: "Sept 2021 - July 2025",
      grade: "8.17 CGPA",
      desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Graphic Era Hill University Dehradun Uttarakhand. I am currently in 3rd year. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
      id: 1,
      img: "/images/aps.png",
      school: "Genl BC Joshi Army Public School Pithoragarh",
      date: "Apr 2019 - Apr 2020",
      grade: "91.6%",
      desc: "I completed my class 12 from General BC Joshi Army Public School Pithoragarh with subjects Physics, Chemistry, Maths and Computer Science",
      degree: "CBSE(XII), Science with Computer",
    },
    {
      id: 2,
      img: "/images/dbs.jpeg",
      school: "Don Bosco Sr Sec School Pithoragarh",
      date: "Apr 2017 - Apr 2018",
      grade: "82.5%",
      desc: "I completed my class 10 education at Don Bosco Sr Sec School Pithoragarh, where I studied Science, Social Science, Mathematics, English, Hindi and Computer Science",
      degree: "CBSE(X), Science with Computer",
    },
  ];

  return (
    <Container id="education">
      <Title>EDU<span className="highlight">CATION</span></Title>
      <Wrapper>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <EducationCard>
                  <Image src={edu.img} alt={edu.school} />
                  <Content>
                    <School>{edu.school}</School>
                    <Degree>{edu.degree}</Degree>
                    <Date>{edu.date}</Date>
                    <Grade>{edu.grade}</Grade>
                    <Description>{edu.desc}</Description>
                  </Content>
                </EducationCard>
                {index !== education.length - 1 && (
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color="secondary"
                      sx={{ position: "relative", top: "-10px", left: "15px" }}
                    />
                    <TimelineConnector
                      style={{
                        background: "#854ce6",
                        marginLeft: "20px",
                        marginTop: "-10px",
                        marginBottom: "30px",
                      }}
                    />
                  </TimelineSeparator>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default EducationPage;
