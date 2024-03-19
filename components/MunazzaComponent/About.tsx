import React from 'react'
import Image from "next/image"
import IMg from "@../../../public/joknnxncjen.png"
import IMG2 from "@../../../components/MunazzaComponent/op788xu.png"
import IMG3 from "@../../../public/Bag.png"
import Icon1 from "@../../../public/icon1.png"
import Icon2 from "@../../../public/icon2.png"
import Icon3 from "@../../../public/icon3.png"
import uI from "@../../../public/svgs.png"
import po from "@../../../public/svg2.png"
import UI3 from "@../../../public/svg3.png"
import BG from "@../../../public/bg.png"
import TextOverlay from './TextOverlay'
import UMG22 from "@../../../public/op.png"
import UMG67 from "@../../../public/opl2.png"
import UMG7 from "@../../../public/opl3.png"
import UMG788 from "@../../../public/opl4.png"
import UMG87777 from "@../../../public/opl5.png"
import Main from "@../../../public/worko.png"

// import { Sarina } from "next/font/google";

// const inter = Sarina({ weight: "400" });

const data = [
  {
    "h2":"Our mission",
    "p":"Our mission is to provide a community-driven, cost-effective and sustainable housing solution for the 21st century, fostering meaningful connections and promoting a sense of belonging."
  },
  {
    "h2":"Our vision",
    "p":"Our vision is to revolutionize the way people live by creating a global network of inclusive and diverse communities where individuals can thrive both personally and professionally without any hinderance."
  },
  {
    "h2":"Our values",
    "p":"We value community, inclusivity, sustainability, and personal growth. We strive to provide a living experience that not only meets the basic needs of our residents, but also empowers them to lead fulfilling lives."
  }
]


const Boxes = [
  {
    numbers : "800",
    Communities : "Communities"
  },
  {
    numbers : "20000",
    Communities : "Monthly visitors"
  },
  {
    numbers : "128",
    Communities : "Reviews"
  },
  {
    numbers : "25000",
    Communities : "Members"
  },
  {
    numbers : "150",
    Communities : "Destinations"
  },
  {
    numbers : "30",
    Communities : "Countries"
  },
  {
    numbers : "16000",
    Communities : "Rooms"
  },
  {
    numbers : "1200",
    Communities : "Monthly Bookings"
  },
]

const SVG  = [
  {
    svg:"/icon1.png",
    h1:"No booking fees",
    p:"Never pay a booking fee. More money for living instead."
  },
  {
    svg:"/icon2.png",
    h1:"100% online process",
    p:"Book rooms, chat with hosts, and pay rent online."
  },
  {
    svg:"/icon3.png",
    h1:"Payment protection",
    p:"We securely collect your rent after you move in."
  },
]
const page = () => {
  return (
    <>
    <div className='px-16 '>
      <div className='h-[90px]'>

      </div>
      <div className='grid grid-cols-2'>
        <div className=' col-span-1 '>
          <h1 className='mt-10 text-[70px]/tight font-bold text-[#141414]/90'>We are changing the way people connect</h1>
          <p className='text-[#454545]/80 mt-5 text-[18px]'>At <span className='text-black font-semibold'>Hostel Bird</span>, we're redefining community living by fostering dynamic and inclusive environments where connections flourish. Our mission is to revolutionize residential experiences, uniting individuals from diverse backgrounds through shared spaces and innovative technologies. We're committed to creating more than just a place to live; we're building vibrant, connected communities that transform the way people interact, share, and grow together.</p>
          <div className='flex '>
          <Image src={IMG2} alt="" className='mt-8 relative  w-[654px] h-[412px] ' />
      
          <Image src={UMG788} alt="" className="w-[200px] h-[250px] ml-[82px]"/>
         
          </div>

        </div>
        <div className='px-10 mt-10 object-cover flex flex-col items-end'>
          {/* <Image src={IMg} alt="" width={700} height={700} /> */}
       <Image src={UMG22} alt="" className='w-[454px] '/>
       
      

        </div>

      </div>




      
      <div className=''>
        <Image src={IMG3} alt="" className='object-cover mt-[52px]' />
      </div>
      <div>
        <h2 className='text-[45px] mt-12 font-bold'>About Hostel Bird </h2>
        <p className='text-[#454545]/80 w-[836px] mt-3 text-[20px]'>
        Hostel Bird is dedicated to pioneering vibrant, connected communities where every individual can thrive. Our vision is rooted in innovation, inclusivity, and a deep commitment to enriching the coliving experience for all.
        </p>
      </div>
     <div className=''>
     <div className='mt-14  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  '>
     
     {
     data.map((item,key) => {
       return (
         <div className='border border-[#0C2D57]/15 text-left pl-7 pr-2  shadow-sm border-1 w-[410px] h-[220px]  py-4'>
       <h2 className='font-semibold text-[23px] w-[354px] '>{item.h2}</h2>
       <p className='text-[#636363] mt-2  text-[17px]'>{item.p}</p>
       </div>
       )
     })
     }


</div>
     </div>

     <div className='mt-16'>
      <h2 className='font-bold text-[40px] text-[#141414]/90 mt-7 text-center'>Your next coliving home</h2>

     <div className='mt-16 grid grid-cols-4 gap-x-[133px] gap-y-12'>
            {
              Boxes.map((item,key) => {
                return (
                  <div className='border rounded-xl text-center py-3 w-[200px] h-[100px] bg-[#0C2D57]/3 shadow-md '>
                      <h2 className='font-bold text-[30px]'>{item.numbers}</h2>
                      <p className='text-[18px] text-[#636363]'>{item.Communities}</p>
                  </div>
                )
              })
            }
      </div>
      <hr className='mt-16 text-gray-200 border '/>
      {/* <div className='flex '>
        {
          SVG.map((item,key) => {
            return (
             <div>
               <div className='flex'>
              
              <Image src={item.svg} alt=""width={70} height={70} />
               <h2> {item.h1}</h2>
               </div>
           
             </div>
            )
          })
        }
      </div> */}
      <div className='flex gap-x-24 mt-14 justify-center'>
      <Image src={uI} alt="" className='w-[369px] h-[ 83px]'/>
      <Image src={po} alt="" className='w-[369px] h-[ 83px]'/>
      <Image src={UI3} alt="" className='w-[369px] h-[ 83px]'/>
      </div>
     </div>
     </div>


<div className="relative mt-[100px]">
      <Image src={BG} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-white text-[45px] font-bold ">Are you ready?</h2>
       <button className='w-[166px] h-[48px] border rounded-full mt-3 px- font-semibold text-[#141414] text-lg bg-[#FFFFFF]/55'>
       Find my stay
       </button>
      </div>
      

      </div><div className='h-[383px]'>
    </div> 
     </> 
 

  )
}

export default page