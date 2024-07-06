import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";

interface NavLinkProps {
    onClick: () => void;
    children: React.ReactNode; // Explicitly define the children prop
}

interface Props {
    openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
    const router = useRouter(); // useRouter hook to access router information

    // Function to handle smooth scrolling to the anchor
    const scrollToSection = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full fixed z-50 top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex justify-between w-[85%] mx-auto h-[100%] items-center">
                <h1 className="flex-[0.6] cursor-pointer text-[30px] text-white font-bold">
                    SHUBHAM
                    <span className="text-yellow-300"> BHATT</span>
                </h1>
                <div className="flex space-x-6">

                    <NavLink onClick={() => scrollToSection("home")}>HOME</NavLink>
                    <NavLink onClick={() => scrollToSection("about")}>ABOUT</NavLink>
                    <NavLink onClick={() => scrollToSection("projects")}>PROJECTS</NavLink>
                    <NavLink onClick={() => scrollToSection("skills")}>SKILLS</NavLink>
                    <NavLink onClick={() => scrollToSection("contact")}>CONTACT</NavLink>
                </div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
                </div>
            </div>
        </div>
    );
};

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => {
    return (
        <span className="nav-link text-white" onClick={onClick}>
            {children}
        </span>
    );
};

export default Nav;


// import { useRouter } from "next/router";
// import { Bars3Icon } from "@heroicons/react/16/solid";
// import React from "react";
// import styled from "styled-components";

// interface NavLinkProps {
//     onClick: () => void;
//     children: React.ReactNode;
// }

// interface Props {
//     openNav: () => void;
// }

// const Nav: React.FC<Props> = ({ openNav }) => {
//     const router = useRouter();

//     const scrollToSection = (id: string): void => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         <NavContainer>
//             <NavContent>
//                 <Logo>
//                     SHUBHAM
//                     <span> BHATT</span>
//                 </Logo>
//                 <LinksContainer>
//                     <NavLink onClick={() => scrollToSection("home")}>HOME</NavLink>
//                     <NavLink onClick={() => scrollToSection("about")}>ABOUT</NavLink>
//                     <NavLink onClick={() => scrollToSection("projects")}>PROJECTS</NavLink>
//                     <NavLink onClick={() => scrollToSection("skills")}>SKILLS</NavLink>
//                     <NavLink onClick={() => scrollToSection("contact")}>CONTACT</NavLink>
//                 </LinksContainer>
//                 <BarsIcon onClick={openNav}>
//                     <Bars3Icon className="icon" />
//                 </BarsIcon>
//             </NavContent>
//         </NavContainer>
//     );
// };

// const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => {
//     return (
//         <StyledNavLink onClick={onClick}>
//             {children}
//         </StyledNavLink>
//     );
// };

// export default Nav;

// const NavContainer = styled.div`
//     width: 100%;
//     position: fixed;
//     top: 0;
//     height: 12vh;
//     background-color: #141c27;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     z-index: 50;
// `;

// const NavContent = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 85%;
//     height: 100%;
//     margin: 0 auto;
// `;

// const Logo = styled.h1`
//     flex: 0.6;
//     cursor: pointer;
//     font-size: 30px;
//     color: white;
//     font-weight: bold;

//     span {
//         color: #ffdd57;
//     }
// `;

// const LinksContainer = styled.div`
//     display: flex;
//     gap: 1.5rem;

//     @media (max-width: 768px) {
//         display: none;
//     }
// `;

// const StyledNavLink = styled.span`
//     position: relative;
//     font-weight: 600;
//     color: white;
//     cursor: pointer;
//     font-size: 17px;
//     white-space: nowrap;

//     &:after {
//         content: '';
//         position: absolute;
//         height: 3px;
//         background-color: #ffdd57;
//         width: 100%;
//         transform: scaleX(0);
//         transition: transform 0.3s ease;
//         transform-origin: center;
//         bottom: -5px;
//         left: 0;
//     }

//     &:hover:after {
//         transform: scaleX(1);
//     }
// `;

// const BarsIcon = styled.div`
//     display: block;

//     @media (min-width: 768px) {
//         display: none;
//     }

//     .icon {
//         width: 2rem;
//         height: 2rem;
//         cursor: pointer;
//         color: #ffdd57;
//     }
// `;
