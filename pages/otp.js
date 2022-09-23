import Image from 'next/image'
import React from 'react'
import Login from '/public/girl.svg'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
 
function otp() {
  return (
    
        <div className={styles.logfull}>
        <Head>
        <title>Verify OTP</title>
        <meta name="description" content="Verify OTP" />
        <link rel="icon" href="" />
        </Head>
            <div className={styles.otpimg}>
                <Image src={Login}/>
            </div>
            <div className={styles.logform}>
                <h1 class="w-22 h-20 py-6 font-bold text-3xl">Verify OTP</h1>
                <p>Enter the  OTP sent to the</p>
                <p>Mobile number +91 91828202029</p>
                <form class="px-20 inline-block">
                    <input class="w-16 h-14 px-4 my-2 rounded-lg border-2 border-solid border-black-200" type="text"></input>
                    <input class="w-16 h-14 px-4 my-2 rounded-lg border-2 border-solid border-black-200" type="text"></input>
                    <input class="w-16 h-14 px-4 my-2 rounded-lg border-2 border-solid border-black-200" type="text"></input>
                    <input class="w-16 h-14 px-4 my-2 rounded-lg border-2 border-solid border-black-200" type="text"></input>
                    <p class="my-1">00:45</p>
    
                   <button className={styles.otpbtn}>Login</button>
                   <p> <a href="">Resend OTP</a></p>
                </form>
            </div>
        </div>
 
  )
}
 
export default otp

