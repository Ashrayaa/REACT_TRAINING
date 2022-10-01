import React from 'react'

function Loginform(){
  return (
    <div className="flex flex-column m-8 w-10/12 lg:w-3/6 lg:mt-64 lg:h-2/5 lg:ml-44 lg:justify-center bg-[#FAFFFD] shadow-lg border rounded-xl"> 
         <form className="p-12 font-base">
           
           <h1 className="w-62 h-12 text-center font-semibold font-base font-montserrat text-3xl">Login / Lookup</h1>
           <input className="border-black-200 my-12 border-2 rounded bg-[#F9F9F9] h-12 px-3 block w-full text-[#5B5858]" type="text" placeholder="Phone Number"></input>
              
           <button className="font-base font-bold text-lg border-2 bg-[#5500C2] text-white w-80 h-14 rounded-lg"><a href="http://localhost:3000/otp">Login</a> </button>
         </form>
     </div>
  )
}

export default Loginform;