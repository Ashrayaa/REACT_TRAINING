import React from "react";
import Image from "next/image";
import Login from "/public/loginimage.png";

function Signupleft(){
    return(
        <div className="flex flex-col justify-center p-16 bg-[#00C285]">
        <Image className="sm:object-contain" src={Login} />
      </div>
  
    
    )
}
export default Signupleft;