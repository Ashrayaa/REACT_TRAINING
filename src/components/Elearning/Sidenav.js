import React from "react";
import Image from "next/image";
import Logopaperlms from "/public/logopaperlms.svg";

export const Sidenav = () => {
  return (
    <div className="yarn decoration-violet-50">
      {/*Logo*/}
      <div className="flex justify-center m-8">
        <Image src={Logopaperlms} />
      </div>

      {/* Navigation Links */}
      <div className="">
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
      </div>
    </div>
  );
};
