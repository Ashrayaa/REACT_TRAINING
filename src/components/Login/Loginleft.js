import React from "react";
import Login from "/public/loginimage.png";
import Image from "next/image";


function Loginleft() {
  return (
    <div class=" w-7/12 h-screen m-0 pt-32 p-32 bg-[#F4BA58]">
      <Image src={Login} />
    </div>
  );
};
export default Loginleft;