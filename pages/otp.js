import Image from 'next/image'
import React from 'react'
import otpimg from '/public/girl.png'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
 
function otp() {
  return (
    
    <div class="flex flex-row w-full bg-white-900">
        <Head>
            <title>Verify OTP</title>
            <meta name="description" content="Verify OTP" />
            <link rel="icon" href="" />
            <link href='//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800' 
            rel='stylesheet' type='text/css'></link>
        </Head>

        {/* the left side */}
        <div class="w-7/12 h-screen m-0 pt-52 p-32 bg-[#DA85A0]">
        <Image src={otpimg}/>
        </div>

        {/* the right side */}
        <div class="flex flex-column w-3/12 h-full mt-64 ml-32 bg-[#FAFFFD] shadow-lg border rounded-xl">
            <form class="p-12 font-base">
                <h1 class="w-62 h-12 font-semibold font-base font-montserrat text-3xl">Verify OTP</h1>
                <p class="font-osans text-sm lg:text-base">Enter the  OTP sent to the</p>
                <p class="font-osans pb-4 text-sm lg:text-base">Mobile number <span className='font-bold'>+91 91828202029</span></p>
                
                <input type="text" name="otp1" id="opt1" class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;" />
                <input type="text" name="otp1" id="opt1" class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;" />
                <input type="text" name="otp1" id="opt1" class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;" />
                <input type="text" name="otp1" id="opt1" class="border-2 border-[#D0D0D0] rounded-md bg-[#F9F9F9]  w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;" />
                
              
                <p class="font-osans font-bold py-4">00:45</p>
        
                <button className={styles.otpbtn}>Login</button>
                <p class="font-base text-center font-semibold md:py-2"> <a href="">Resent OTP</a></p>
            </form>

        </div>

    </div>
 
  )
}
 
export default otp

