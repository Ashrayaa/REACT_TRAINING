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
                <h1 class="w-22 h-20 py-6 font-bold text-3xl">Sign Up</h1>
                <form class="px-20">
                    <input class="w-80 h-14 px-4 my-2 rounded-lg border-2 border-solid border-black-200" type="text" placeholder="Phone Number"></input>
                    <input class="w-80 h-14 px-4 my-2 rounded-lg border-2 border-solid border-black-200" type="text" placeholder="Student Name"></input>
                    <input class="w-80 h-14 px-4 my-2 rounded-lg border-2 border-solid border-black-200" type="text" placeholder="Student Email"></input>
                    <p class="my-1">Select class</p>
                    <input class="w-32 h-10  rounded-3xl border-2 border-solid border-black-200" type="button" value="Plus One"></input>
                    <input class="w-32 h-10 mx-2 my-4 rounded-3xl border-2 border-solid border-black-200" type="button" value="Plus Two"></input>
                   
                   <button className={styles.otpbtn}>Signup</button>
                   <p>Already have an account? <a href="">Login</a></p>
                </form>
            </div>
        </div>
 
  )
}
 
export default otp

