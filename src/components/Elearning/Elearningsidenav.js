import React from "react";
import Image from "next/image";
import Head from "next/head";
import Logopaperlms from "/public/logopaperlms.svg";
import Homeicon from "/public/homeicon.svg";
import Mycourse from "/public/mycourse.png";
import Mocktest from "/public/mocktest.png";
import Practice from "/public/practice.png";


export const Elearningsidenav = (props) => {
    // const navlinks =['Home', 'My Course', 'MockcTest', 'Practice']
  return (
    <div class="flex flex-row w-full bg-white-900">
        <Head>
            
        </Head>

        {/* sidenav-greenbox-whole div */}

        <div class=" flex flex-col align-middle w-2/12 sm:2/12 h-screen bg-[#00C285]">

            {/* logo on the top */}
            <div class="mx-12 p-8">
            <Image src={Logopaperlms} />
            </div>

            {/* nav-links on the sidenav */}
            <div class="w-64 h-20 bg-white mt-10 ml-4 px-8 py-2 rounded-l-full flex flex-row space-x-5">
            <Image src={Homeicon} />
            {/* {navlinks.map((navlink) => {
                return <a href="">{navlink}</a>
            })} */}
            <a class="text-[#00C285] text-xl text-center mt-5 font-semibold ">Home</a>
            </div>

            <div class="flex flex-row gap-4 ml-10 mt-8 w-40 h-10">
            <Image src={Mycourse} />
            {/* {navlinks.map((navlink) => {
                return <a href="">{navlink}</a>
            })} */}
            <a class="text-white text-xl mt-2 text-center font-semibold ">MyCourse</a>
            </div>

            <div class="flex flex-row gap-4 ml-10 mt-8 w-40 h-10">
            <Image src={Mocktest} />
            {/* {navlinks.map((navlink) => {
                return <a href="">{navlink}</a>
            })} */}
            <a class="text-white text-xl mt-2 text-center font-semibold ">MockTest</a>
            </div>

            <div class="flex flex-row gap-4 ml-10 mt-8 w-36 h-10">
            <Image src={Practice} />
            {/* {navlinks.map((navlink) => {
                return <a href="">{navlink}</a>
            })} */}
            <a class="text-white text-xl mt-2 text-center font-semibold">Practice</a>
            </div>

        </div>


    </div>
  );
};
