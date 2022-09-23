import Image from 'next/image'
import React from 'react'
import Login from '/public/loginimage.png'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
 
function login() {
  return (
    
        <div className={styles.logfull}>
                   <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/login.png" />
      </Head>
            <div className={styles.logimg}>
                <Image src={Login}/>
            </div>
            <div className={styles.logform}>
                <h1 class="w-22 h-20 mt-40 align-top text-left leading-10 font-bold text-3xl">Login / Lookup</h1>
                <form>
                    <input class="w-80 h-16  rounded-lg border-2 border-solid border-black-200" type="text" placeholder="Phone Number"></input>
                   <br></br>
                   <br></br> 
                   <button className={styles.logbtn}>Login</button>
                </form>
            </div>
        </div>
 
  )
}
 
export default login

