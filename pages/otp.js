import Image from "next/image";
import React from "react";
import otpimg from "/public/girl.png";
import Head from "next/head";
import Verifyotpform from "../src/components/Otp/Verifyotpform"
import Otpleft from "../src/components/Otp/Otpleft";

function otp() {
  return (
    <div class="flex flex-row w-full bg-white-900">
      <Head>
        <title>Verify OTP</title>
        <meta name="description" content="Verify OTP" />
        <link rel="icon" href="" />
        <link
          href="//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>

      {/* the left side */}
    <Otpleft/>

      {/* the right side */}

     <Verifyotpform />
    </div>
  );
}

export default otp;
