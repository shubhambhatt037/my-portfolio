import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Coder",
        1500,
        "Web Developer",
        1500,
        "Problem Solver",
        1500,
        "Programmer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;


// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import styled from 'styled-components';

// const StyledTypeAnimation = styled(TypeAnimation)`
//   font-size: 2 rem;
//   color: #55e6a5;
//   font-weight: bold;
//   text-transform: uppercase;

//   @media (min-width: 768px) {
//     font-size: 3rem;
//   }
// `;

// const TextEffect = () => {
//   return (
//     <StyledTypeAnimation
//       sequence={[
//         "Coder",
//         1500,
//         "Web Developer",
//         1500,
//         "Problem Solver",
//         1500,
//         "Software Engineer",
//         1500,
//       ]}
//       speed={50}
//       repeat={Infinity}
//     />
//   );
// };

// export default TextEffect;
