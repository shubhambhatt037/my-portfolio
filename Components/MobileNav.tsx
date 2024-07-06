import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface NavLinkMobileProps {
    onClick: () => void;
    children: React.ReactNode;
}

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

    const scrollToSectionAndCloseNav = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        closeNav(); 
    };

    const NavLinkMobile: React.FC<NavLinkMobileProps> = ({ onClick, children }) => {
        return (
            <div onClick={onClick} className="nav-link-mobile">
                {children}
            </div>
        );
    };

    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("home")}>HOME</NavLinkMobile>
                <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("about")}>ABOUT</NavLinkMobile>
                <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("projects")}>PROJECTS</NavLinkMobile>
                <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("skills")}>SKILLS</NavLinkMobile>
                <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("contact")}>CONTACT</NavLinkMobile>
            </div>
            <div onClick={closeNav} className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
                <XMarkIcon />
            </div>
        </div>
    );
};

export default MobileNav;


// import { XMarkIcon } from "@heroicons/react/16/solid";
// import React from "react";
// import styled from "styled-components";

// interface NavLinkMobileProps {
//     onClick: () => void;
//     children: React.ReactNode;
// }

// interface Props {
//     nav: boolean;
//     closeNav: () => void;
// }

// const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
//     const scrollToSectionAndCloseNav = (id: string): void => {
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//         }
//         closeNav();
//     };

//     const NavLinkMobile: React.FC<NavLinkMobileProps> = ({ onClick, children }) => {
//         return (
//             <StyledNavLinkMobile onClick={onClick}>
//                 {children}
//             </StyledNavLinkMobile>
//         );
//     };

//     return (
//         <StyledMobileNavContainer $nav={nav}>
//             <StyledNavContent>
//                 <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("home")}>HOME</NavLinkMobile>
//                 <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("about")}>ABOUT</NavLinkMobile>
//                 <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("projects")}>PROJECTS</NavLinkMobile>
//                 <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("skills")}>SKILLS</NavLinkMobile>
//                 <NavLinkMobile onClick={() => scrollToSectionAndCloseNav("contact")}>CONTACT</NavLinkMobile>
//             </StyledNavContent>
//             <StyledCloseButton onClick={closeNav}>
//                 <XMarkIcon />
//             </StyledCloseButton>
//         </StyledMobileNavContainer>
//     );
// };

// const StyledMobileNavContainer = styled.div<{ $nav: boolean }>`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 1000000;
//     background-color: #09101a;
//     transform: ${({ $nav }) => ($nav ? 'translateX(0)' : 'translateX(-100%)')};
//     transition: transform 0.3s;
// `;

// const StyledNavContent = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// const StyledNavLinkMobile = styled.div`
//     margin-bottom: 2rem;
//     font-weight: 600;
//     color: white;
//     cursor: pointer;
//     font-size: 27px;
//     position: relative;

//     &::after {
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

//     &:hover::after {
//         transform: scaleX(1);
//     }
// `;

// const StyledCloseButton = styled.div`
//     position: absolute;
//     z-index: 100000000;
//     cursor: pointer;
//     top: 2rem;
//     right: 2rem;
//     width: 2rem;
//     height: 2rem;
//     color: #ffdd57;
// `;

// export default MobileNav;
