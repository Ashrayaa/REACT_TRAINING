import React from "react";
import Image from "next/image";
import Login from "/public/loginimage.png";

function Signupleft(){
    return(
        <div class="w-7/12 h-screen m-0 pt-32 p-32 bg-[#00C285]">
        <Image src={Login} />
      </div>
  
    
    )
}
export default Signupleft;