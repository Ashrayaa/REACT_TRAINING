import React from "react";
import Image from "next/image";
import otpimg from "/public/girl.png";

function Otpleft() {
    return(
        <div class="w-7/12 h-screen m-0 pt-52 p-32 bg-[#DA85A0]">
        <Image src={otpimg} />
      </div>
    )
}
export default Otpleft;