import React from "react";
import Image from "next/image";
import Logopaperlms from "/public/logopaperlms.svg";
import Mycourse from "/public/mycourse.png";
import { Listnav } from "./Listnav";

export const Sidenav = () => {
  return (
    <div className="lg:w-2/12 h-screen bg-[#00C285] fixed">
      {/*Logo*/}
      <div className="flex justify-center m-8">
        <Image src={Logopaperlms} />
      </div>

      <Listnav listname="Home" img="" />
      <Listnav listname="My course" img="" />

      <Listnav listname="Mock Test" img="" />
      <Listnav listname="Practice" img="" />

      {/* Navigation Links */}
      {/* <div className="">
        <ul className="flex flex-col px-4 gap-14 ml-20 mt-20 text-white text-xl font-semibold">
          <li 
            className="hover:bg-white hover:justify-center hover:h-12 hover:w-96 hover:text-[#00C285] hover:rounded-l-full">
            Home
          </li>
          <li
          className="hover:bg-white hover:text-[#00C285] hover:h-12 hover:w-96 hover:rounded-l-full"
          >My Course</li>
          <li
          className="hover:bg-white hover:text-[#00C285] hover:h-12 hover:w-96 hover:rounded-l-full"
          >Mock Test</li>
          <li className="hover:bg-white hover:text-[#00C285] hover:h-12 hover:w-96 hover:rounded-l-full"
          >Practice</li>
        </ul>
      </div> */}
    </div>
  );
};
