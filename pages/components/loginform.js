

export default loginform

import React from 'react'

export const loginform = () => {
  return (
    <div class="flex flex-column w-3/12 h-full mt-64 ml-32 bg-[#FAFFFD] shadow-lg border rounded-xl"> 
         <form class="p-12 font-base">
           
           <h1 class="w-62 h-12 text-center font-semibold font-base font-montserrat text-3xl">Login / Lookup</h1>
           <input class="border-black-200 my-12 border-2 rounded bg-[#F9F9F9] h-12 px-3 block w-full text-[#5B5858]" type="text" placeholder="Phone Number"></input>
              
           <button class="font-base font-bold text-lg border-2 bg-[#5500C2] text-white w-80 h-14 rounded-lg"><a href="http://localhost:3000/otp">Login</a> </button>
         </form>
     </div>
  )
}
