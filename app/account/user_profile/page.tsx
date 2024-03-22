"use client"
import IMG from "./profileimage.png"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Icon from "./arrowIcon.png"
import AddPhoto from "@../../../app/user_profile/Add Photo.png"
import Pencil from "./pencil.png"
import Edit from "./edit.png"
import Plus from "./plus.png"
import Ad from "./aoko.png"
import { preload } from "react-dom"
import { Hind } from "next/font/google"
import IMG1 from "./plus44.png"
import mapbook from "./bookmap.png"
import House from "./houses.png"


const hind = Hind({ subsets: ["latin"], weight: ['400'], variable: '--font-hind' });

const UserProfile = () => {

    const {back} = useRouter()
    function Back () {
        return back()
    }


    
    return (
       <div className="vvw:hidden block">

        {/* First Section */}

       <div className={hind.variable}>
       <div className="bg-[#091A47] w-full h-[340px]">
         <button onClick={Back} className="text-white ">
            <Image src={Icon} alt="Back Button Icon" className="w-[25px] h-[25px] mt-5 mx-5"/>
         </button>
       <div className=" flex justify-center">
        <Image src={IMG} alt="Profile Image" className="w-[100px] h-[100px]"/> 
       </div>
       <div className="flex justify-center">
       {/* <p className="text-white sqs:text-[13px] mt-3 swd:text-[12px] swxw:text-[11px] ffy:text-[10px] wdw:text-[9.75px] ade:text-[9.60px] bgq:text-[9.20px] hjnno:text-[9px] xuq:text-[8.85px] text-[8.70px] px-14 xuq:px-0  ">Travellers are more likely to connect when they can see you.</p> */}
       {/* <p className="text-white sqs:text-[13px] mt-3 swd:text-[12px] swxw:text-[11px] ffy:text-[10px] text-[9.75px] ">Travellers are more likely to connect when they can see you.</p> */}
    
       <p className="sqs:text-[13px] text-white mt-3 swd:text-[12px] swxw:text-[11px] ffy:text-[10px] text-[9.75px] text-center wdw:text-left ">
        Travellers are more likely to
        <br className="wdw:hidden block" />
        connect when they can see you.
      </p>
    
       </div>
       <div className="flex justify-center mt-3">
        {/* <button className="for:w-[390px]bxq:w-[370px] sqs:w-[350px] swd:w-[330px] sgvx:w-[315px] swxw:w-[295px] xaq:w-[278px] ffy:w-[265px] wdw:w-[255px] ade:w-[245px] bgq:w-[235px] hjnno:w-[215px] xuq:w-[200px] w-[190px] ade:h-[35px] h-[30px]  bg-[#F65656]  rounded-lg"> */}
          
        <button className="for:w-[390px]bxq:w-[370px] sqs:w-[350px] swd:w-[330px] sgvx:w-[315px] swxw:w-[295px] xaq:w-[278px] ffy:w-[265px] wdw:w-[255px] hjnno:w-[225px] hcbq:w-[200px] w-[180px] ade:h-[35px] h-[30px]  bg-[#F65656]  rounded-lg">
          <div className="flex justify-center items-center gap-2">
            <Image src={Ad} alt="" className="w-[62px] h-[9px]"/>
          <Image src={Plus} alt="button" className="w-[18px] h-[18px] "/>
          </div>
          </button>
       </div>
       </div>

       {/* Second Section */}
       <div className="relative -top-[75px] rounded-[30px]  bg-white  h-[645px] ">
         <div className="pt-[26px] mx-5 flex justify-between">
          <h2 className="text-[20px] font-bold text-[#454545]">Fahad Bhat</h2>
          <div className="flex items-center gap-1 ">
          <Image src={Edit} alt="" className="w-[22px] h-[10px]"/>
          <Image src={Pencil} className="w-[15px] h-[15px] object-cover" alt=""/>
          </div>
         </div>
         <h2 className="text-[#454545] text-[14px] font-custom-semibold mx-5 mt-6">About me</h2>
         <div className="">
         <button className="text-[#F65656] text-[12px] font-custom-bold flex items-center justify-center gap-x-[8px] mx-5 mt-3 min-w-[97px] min-h-[39px] border-2 rounded-[20px] border-[#F65656]">
          <Image src={IMG1} alt="" className="w-[15px] h-[15px]"/>
         Add bio
         </button>
         </div>

         <h2 className="text-[#454545] text-[14px] font-custom-semibold mx-5 mt-8">Languages</h2>
         <div className="">
         <button className="text-[#F65656] text-[12px] font-custom-bold flex items-center justify-center gap-x-[8px] mx-5 mt-3 min-w-[135px] min-h-[39px] border-2 rounded-[20px] border-[#F65656]">
          <Image src={IMG1} alt="" className="w-[15px] h-[15px]"/>
          Add languages
         </button>
         </div>

         <h2 className="text-[#454545] text-[14px] font-custom-semibold mx-5 mt-8">I have lived in</h2>
         <div className="">
         <button className="text-[#F65656] text-[12px] font-custom-bold flex items-center justify-center gap-x-[8px] mx-5 mt-3 min-w-[108px] min-h-[39px] border-2 rounded-[20px] border-[#F65656]">
          <Image src={IMG1} alt="" className="w-[15px] h-[15px]"/>
          Add cities
         </button>
         </div>

         <h2 className="text-[#454545] text-[14px] font-custom-semibold mx-5 mt-8">Interests</h2>
         <div className="">
         <button className="text-[#F65656] text-[12px] font-custom-bold flex items-center justify-center gap-x-[8px] mx-5 mt-3 min-w-[127px] min-h-[39px] border-2 rounded-[20px] border-[#F65656]">
          <Image src={IMG1} alt="" className="w-[15px] h-[15px]"/>
          Add interests
         </button>
         </div>


         <h2 className="text-[17px] text-[#454545] font-bold mx-5 mt-8">My Travel Stats</h2>
         


         {/* <div className="flex gap-0">

         <div className="flex items-center justify-center w-[185px] h-[64px] mx-5 bg-customBlue rounded-[15px] px-3 mt-4">
 
 <div className="flex-none">
   <Image src={mapbook} alt="Image" className="w-[30px] h-[30px]"/>
 </div>


 <div className="flex flex-col justify-center flex-grow pl-[14px]">
   <div className="text-[18px] font-bold text-[#1A9CE3]">0</div>
   <div className="text-[11px] font-custom-bold text-[#1A9CE3]">Countries</div>
 </div>
 </div>
 <div className="flex items-center justify-center w-[185px] h-[64px] mx-5 bg-customRed rounded-[15px] px-3 mt-4">
 
 <div className="flex-none">
   <Image src={House} alt="Image" className="w-[30px] h-[30px]"/>
 </div>


 <div className="flex flex-col justify-center flex-grow pl-[14px]">
   <div className="text-[18px] font-bold text-[#C74343]">0</div>
   <div className="text-[11px] font-custom-bold text-[#C74343]">Properties</div>
 </div>
 </div>

         </div>
       
 */}



<div className="flex hbhe:ml-5 ml-4">

   <div className="flex items-center justify-center bqwd:w-[185px] asw:w-[180px] dew:w-[175px] hg:w-[170px] w-[150px] vyv:h-[64px] dew:h-[62px] hg:h-[61px] h-[59px] bg-customBlue rounded-[15px] qwx:px-3 px-2 mt-4">
 
 <div className="flex-none">
   <Image src={mapbook} alt="Image" className="bqwd:w-[30px] dew:w-[25px] qwx:w-[20px] hg:w-[17px] w-[15px] bqwd:h-[30px] dew:h-[25px] qwx:h-[20px] hg:h-[17px] h-[15px]"/>
 </div>


 <div className="flex flex-col justify-center flex-grow bqwd:pl-[14px] hbhe:pl-[12px] pl-[10px]">
   <div className="vyv:text-[18px] dew:text-[17px] jed:text-[16px] qwx:text-[14px] hg:text-[12px] text-[10px] font-bold text-[#1A9CE3]">0</div>
   <div className="vyv:text-[11px] dew:text-[10px] jed:text-[9px] hg:text-[8px] text-[7px] font-custom-bold text-[#1A9CE3]">Countries</div>
 </div>
 </div>




 <div className="flex items-center justify-center bqwd:w-[185px] vyv:w-[180px] dew:w-[175px] qwx:w-[170px] w-[165px] vyv:h-[64px] dew:h-[62px] qwx:h-[61px] vyv:mx-5 hbhe:mx-4 hg:mx-3 mx-2 bg-customRed rounded-[15px] qwx:px-3 px-2 mt-4">
 
 <div className="flex-none">
   <Image src={House} alt="Image" className="bqwd:w-[30px] dew:w-[25px] qwx:w-[20px] w-[17px] bqwd:h-[30px] dew:h-[25px] qwx:h-[20px] h-[17px]"/>
 </div>


 <div className="flex flex-col justify-center flex-grow bqwd:pl-[14px] hbhe:pl-[12px] qwx:pl-[10px] pl-[8px]">
   <div className="vyv:text-[18px] dew:text-[17px] jed:text-[16px] qwx:text-[14px] hg:text-[12px] text-[10px] font-bold text-[#C74343]">0</div>
   <div className="vyv:text-[11px] dew:text-[10px]  jed:text-[9px] hg:text-[8px] text-[7px] font-custom-bold text-[#C74343]">Properties</div>
 </div>
 </div>

         </div>  
       </div>
       </div>
       </div>
       
    )
}

export default UserProfile