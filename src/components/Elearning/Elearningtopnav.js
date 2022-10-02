import React from "react";
import Image from "next/image";
import Search from "/public/search.png";
import Bell from "/public/bell.png";
import Avatar from "/public/avatar.png";

export const Elearningtopnav = () => {
  return (
    <div className="ml-[263px] h-20 bg-[#FAFFFD] shadow-sm border">
      <div className="flex flex-row gap-6 w-36 p-2 h-10">
        <Image src={Search} />
        <Image src={Bell} />
        <Image src={Avatar} />
      </div>
    </div>
  );
};
