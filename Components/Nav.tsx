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
