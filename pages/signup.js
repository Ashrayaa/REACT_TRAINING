import Image from "next/image";
import React from "react";
import Login from "/public/loginimage.png";
import Head from "next/head";

function signup() {
  return (
    <div class="flex flex-row w-full bg-white-900">
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/signup.png" />
        <link
          href="//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>

      {/* the left side */}

      <div class="w-7/12 h-screen m-0 pt-32 p-32 bg-[#00C285]">
        <Image src={Login} />
      </div>

      {/* the right side */}

      <div class="flex flex-column w-3/12 h-full mt-44 ml-32 bg-[#FAFFFD] shadow-lg border rounded-xl">
        <form class="p-12 font-base">
          <h1 class="w-44 h-12 font-semibold font-base text-3xl">Signup</h1>
          <input
            class="border-black-200 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-2 block w-full text-[#5B5858]"
            type="text"
            placeholder="Phone Number"
          ></input>
          <input
            class="border-black-200 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-6 block w-full text-[#5B5858]"
            type="text"
            placeholder="Student Name"
          ></input>
          <input
            class="border-black-200 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-6 block w-full text-[#5B5858]"
            type="text"
            placeholder="Student Email"
          ></input>
          <p class="my-1 font-semibold">Select class</p>
          <input
            class="w-32 h-10  rounded-3xl border-2 border-solid border-black-200 border-[#00C285]"
            type="button"
            value="Plus One"
          ></input>
          <input
            class="w-32 h-10 mx-2 my-4 rounded-3xl border-2 border-solid border-black-200"
            type="button"
            value="Plus Two"
          ></input>
          <button class=" text-red-500 font-base font-bold text-lg border-2 bg-[#00C285] lg:text-white w-80 h-14 rounded-lg">
            <a href="http://localhost:3000/login">Signup</a>
          </button>
          <div class="flex flex-row pt-4">
            <div className="border h-0 w-8 border-black bg-black mx-2 my-2"></div>
            <p class="text-xs font-semibold">
              Already have an account?{" "}
              <a href="" class="text-[#00C285]">
                Login
              </a>
            </p>
            <div className="border h-0 w-7 border-black bg-black mx-2 my-2"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signup;
