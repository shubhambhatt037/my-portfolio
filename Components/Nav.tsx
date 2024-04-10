import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { teardownTraceSubscriber } from "next/dist/build/swc";
import React from "react";

interface Props {
    openNav: ()=> void; 
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="nav-link"><Link href="/">HOME</Link></div>
        <div className="nav-link"><Link href="/Services">SERVICES</Link></div>
        <div className="nav-link"><Link href="/About">ABOUT</Link></div>
        <div className="nav-link"><Link href="/Projects">PROJECTS</Link></div>
        <div className="nav-link"><Link href="/Footer">CONTACT</Link></div>
        <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
