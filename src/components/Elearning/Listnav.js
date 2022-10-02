import React from "react";
import Image from "next/image";

export const Listnav = (props) => {
  return (
    <div className="flex flex-row space-x-2 justify-center">
      <Image src={props.img} />
      <div className="text-white text-xl font-semibold py-6 hover:bg-white hover:text-[#00C285] hover:rounded-l-full hover:w-64 hover:p-8">
        <a href="#">{props.listname}</a>
      </div>
    </div>
  );
};
