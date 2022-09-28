import React from "react";

function Verifyotpform(){
    return(
        <div class="flex flex-column w-3/12 h-full mt-64 ml-32 bg-[#FAFFFD] shadow-lg border rounded-xl">
        <form class="p-12 font-base">
          <h1 class="w-62 h-12 font-semibold font-base font-montserrat text-3xl">
            Verify OTP
          </h1>
          <p class="font-osans text-sm lg:text-base">
            Enter the OTP sent to the
          </p>
          <p class="font-osans pb-4 text-sm lg:text-base">
            Mobile number <span className="font-bold">+91 91828202029</span>
          </p>

          <input
            type="text"
            name="otp1"
            id="opt1"
            class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />
          <input
            type="text"
            name="otp2"
            id="opt2"
            class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />
          <input
            type="text"
            name="otp3"
            id="opt3"
            class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />
          <input
            type="text"
            name="otp4"
            id="opt4"
            class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />

          <p class="font-osans font-bold py-4">00:45</p>

          <button class="font-base font-bold text-lg border-2 bg-[#00C285] text-white w-80 h-14 rounded-lg">
            Login
          </button>
          <p class="font-base text-center font-semibold md:py-2">
            {" "}
            <a href="">Resent OTP</a>
          </p>
        </form>
      </div>
    )
}
export default Verifyotpform;