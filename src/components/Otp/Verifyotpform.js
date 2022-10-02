import React from "react";

function Verifyotpform(){
    return(
        <div className="flex flex-column justify-center align-middle lg:w-6/12 lg:h-3/6 lg:m-52 md:h-2/5 md:mt-72 bg-[#FAFFFD] m-4 shadow-lg border rounded-xl">
        <form className="p-12 font-base">
          <h1 className="w-62 h-12 font-semibold font-base font-montserrat text-3xl">
            Verify OTP
          </h1>
          <p className="font-osans text-sm lg:text-base">
            Enter the OTP sent to the
          </p>
          <p className="font-osans pb-4 text-sm lg:text-base">
            Mobile number <span className="font-bold">+91 91828202029</span>
          </p>

          <input
            type="text"
            name="otp1"
            id="opt1"
            className="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />
          <input
            type="text"
            name="otp2"
            id="opt2"
            className="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />
          <input
            type="text"
            name="otp3"
            id="opt3"
            className="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />
          <input
            type="text"
            name="otp4"
            id="opt4"
            className="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
          />

          <p className="font-osans font-bold py-4">00:45</p>

          <button className="font-base font-bold text-lg border-2 lg:mt-4 bg-[#00C285] text-white w-80 h-14 rounded-lg">
            Login
          </button>
          <p className="font-base text-center font-semibold lg:mt-8">
            {" "}
            <a href="">Resent OTP</a>
          </p>
        </form>
      </div>
    )
}
export default Verifyotpform;