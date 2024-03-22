import React from 'react'
import Image from "next/image"
import first from "@/components/HomeSection/Destination/pl2.png"
import green from "@/components/HomeSection/Destination/green3.png"
import sun from "@/components/HomeSection/Destination/ooo.png"
import build from "@/components/HomeSection/Destination/build2.png"
import castle from "@/components/HomeSection/Destination/castle2.png"
import delhi from "@/components/HomeSection/Destination/delhi2.png"
import kumaon from "@/components/HomeSection/Destination/kumau.png"
import amrit from "@/components/HomeSection/Destination/amrit2.png"

import ja from "@/components/HomeSection/Destination/ja.png"
import del from "@/components/HomeSection/Destination/del.png"
import kum from "@/components/HomeSection/Destination/kum.png"
import amr from "@/components/HomeSection/Destination/amr.png"
import su from "@/components/HomeSection/Destination/su.png"
import agr from "@/components/HomeSection/Destination/agr.png"
import arrow from "@/components/HomeSection/Destination/arrow.png"


import { Box } from '@mui/material'
import Link from 'next/link'
import HorizontalScroll from './HorizontalScroll'

let firstRow = [
    {
        img: first,
        text: "Karnataka",
        altText: "Karnataka image"
    },
    {
        img: green,
        text: "Kerela",
        altText: "Kerela image"
    },
    {
        img: sun,
        text: "Jaisalmer",
        altText: "Jaisalmer image"
    },
    {
        img: build,
        text: "Agra",
        altText: "Agra image"
    },
]
let SecondRow = [
    {
        img: castle,
        text: "Jaipur",
        altText: "Jaipur image"
    },
    {
        img: delhi,
        text: "Delhi",
        altText: "Delhi image"
    },
    {
        img: kumaon,
        text: "Kumaon",
        altText: "Kumaon image"
    },
    {
        img: amrit,
        text: "Amritsar",
        altText: "Amritsar image"
    },

]
let SecondRow22= [
   
    {
        img: delhi,
        text: "Delhi",
        altText: "Delhi image"
    },
    {
        img: kumaon,
        text: "Kumaon",
        altText: "Kumaon image"
    },
    {
        img: amrit,
        text: "Amritsar",
        altText: "Amritsar image"
    },

    {
        img: sun,
        text: "Jaisalmer",
        altText: "Jaisalmer image"
    },
    {
        img: build,
        text: "Agra",
        altText: "Agra image"
    },
]
let SecondRow2 = [
    {
        img: ja,
        text: "Jaipur",
        altText: "Jaipur image"
    },
    {
        img: del,
        text: "Delhi",
        altText: "Delhi image"
    },
    {
        img: kum,
        text: "Kumaon",
        altText: "Kumaon image"
    },
    {
        img: amr,
        text: "Amritsar",
        altText: "Amritsar image"
    },

    {
        img: su,
        text: "Jaisalmer",
        altText: "Jaisalmer image"
    },
    {
        img: agr,
        text: "Agra",
        altText: "Agra image"
    },
]

const Destination = () => {
    return (
        <>
            <Box>
                <div className='mx-1 mt-5'>



                    <div className='flex items-center justify-between'>
                        <h2 className='text-[25px] smm:text-[50px] font-bold text-[#141414]/90'>Top Destinations</h2>
                        <Link href="/AllDestinations">
                            <div className=' gap-2 hidden md:flex '>
                                <p className='text-[23px] font-bold text-[#F65656] hover:text-[#f17b7b]'>All Destinations</p>
                                <div className='flex items-end'>
                                <Image src={arrow} alt="Arrow" width={30} height={30}  />


                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='destiny:flex hidden justify-center gap-10 '>
                        {
                            firstRow.map((item) => {
                                return (
                                    <>
                                        <div className=' h-[380px] rounded-[15px] w-full mt-8 relative hover:scale-110 duration-300'>
                                            <Image src={item.img} alt={item.altText} className='object-cover rounded-[20px] h-[390px]'/>
                                            <div className="absolute inset-0  rounded-[15px] px-8 pt-32">
                                                <p className="text-white text-[30px] font-bold">{item.text}</p>
                                                <div className='flex justify-end h-[340px] items-center'>
                                                    <button
                                                        className="w-[100px] h-[35px] text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white hover:bg-black/60"

                                                    >
                                                        Explore
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                        {/* <div className=' h-[380px] rounded-[15px] w-full'>
<Image src={ppl} alt="" className='object-cover rounded-[20px] h-[380px]'/>
</div>
<div className=' h-[380px] rounded-[15px] w-full'>
<Image src={ppl} alt="" className='object-cover rounded-[20px] h-[380px]'/>
</div>
<div className=' h-[380px] rounded-[15px] w-full'>
<Image src={ppl} alt="" className='object-cover rounded-[20px] h-[380px]'/>
</div> */}




                    </div>
                    <div className='destiny:flex hidden justify-center gap-10 mb-36'>
                        {
                            SecondRow.map((item) => {
                                return (
                                    <>
                                        <div className=' h-[380px] rounded-[15px] w-full mt-12 relative hover:scale-110 duration-300'>
                                            <Image src={item.img} alt={item.altText} className='object-cover rounded-[20px] h-[390px]' />
                                            <div className="absolute inset-0  rounded-[15px] px-8 pt-32">
                                                <p className="text-white text-[30px] font-bold">{item.text}</p>
                                                <div className='flex justify-end h-[340px] items-center'>
                                                    <button
                                                        className="w-[100px] h-[35px] text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white hover:bg-black/60"

                                                    >
                                                        Explore
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }





                    </div>
                </div>

            </Box> 
            <div className='flex destiny:hidden mt-8  relative'>
                <HorizontalScroll>
                    {SecondRow2.map((item) => (


                        <>
                            <Image src={item.img} alt={item.altText} className=' flex mr-4 th:mr-8 object-cover rounded-[20px] h-[360px] ' />

                            {/* <div className="absolute bottom-0 "><p className=" text-white text-[30px] font-bold">{item.text}</p>
                                <button className=" text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white hover:bg-black/60">
                                    Explore
                                </button>
                            </div>

                            <div className='absolute text-white flex justify-center items-center'>{item.text}</div>
                            <button
                                className=" absolute w-[100px] h-[35px] text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white hover:bg-black/60"

                            >
                                Explore
                            </button> */}
                        </>


                    ))}</HorizontalScroll>
             </div> 


                      
                        {/* <div className='relative'>
                            <div>
                                
                                <Image src={castle} alt="Jaipur Image" className='relative'/>  
                                <h2 className='absolute font-bold '>Jaipur</h2>
                            <button className='w-[100px] h-[35px] text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white hover:bg-black/60'>
                            Explore
                            </button>
                                </div> */}                          
                        {/* </div> */}


  {/* <div className='flex'>

                        <div className="relative">
      <div className=" inset-0 flex ">
        <Image src={castle} alt="Jaipur Image" className="" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-bold text-white text-center">Jaipur</h2>
      </div>
      <div className="absolute bottom-10 inset-x-0 flex items-center justify-center">
        <button className="w-[100px] h-[35px] text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white bg-transparent border-white hover:bg-black/60">
          Explore
        </button>
      </div>
    </div>
                        <div className="relative">
      <div className=" inset-0 flex ">
        <Image src={castle} alt="Jaipur Image" className="" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-bold text-white text-center">Jaipur</h2>
      </div>
      <div className="absolute bottom-10 inset-x-0 flex items-center justify-center">
        <button className="w-[100px] h-[35px] text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white bg-transparent border-white hover:bg-black/60">
          Explore
        </button>
      </div>
    </div>

  

    <div className="relative">
      <div className=" inset-0 flex ">
        <Image src={castle} alt="Jaipur Image" className="" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-bold text-white text-center">Jaipur</h2>
      </div>
      <div className="absolute bottom-10 inset-x-0 flex items-center justify-center">
        <button className="w-[100px] h-[35px] text-[15px] font-bold text-center pb-2 rounded-[24px] border-4 text-white bg-transparent border-white hover:bg-black/60">
          Explore
        </button>
      </div>
    </div>



    </div>
                       */}
                       
   



        </>
    )
}

export default Destination;







