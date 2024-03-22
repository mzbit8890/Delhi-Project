import React from 'react'
import Image from "next/image"
import IMg from "@../../../components/MunazzaComponent/joknnxncjen.png"
import IMG2 from "@../../../components/MunazzaComponent/Newimage.png"
import IMG3 from "@../../../components/MunazzaComponent/about.png"
import Icon1 from "@../../../components/MunazzaComponent/icon1.png"
import Icon2 from "@../../../components/MunazzaComponent/icon2.png"
import Icon3 from "@../../../components/icon3.png"
import uI from "@../../../components/MunazzaComponent/svgs.png"
import po from "@../../../components/MunazzaComponent/svg2.png"
import UI3 from "@../../../components/MunazzaComponent/svg3.png"
import BG from "@../../../components/MunazzaComponent/bg.png"
import TextOverlay from '@./../../components/MunazzaComponent/TextOverlay'
import UMG22 from "@../../../components/MunazzaComponent/op788xu.png"
import UMG67 from "@../../../components/MunazzaComponent/opl2.png"
import UMG7 from "@../../../components/MunazzaComponent/opl3.png"
import UMG788 from "@../../../components/MunazzaComponent/opl4.png"
import UMG87777 from "@../../../components/opl5.png"
import Main from "@../../../components/MunazzaComponent/worko.png"
import Wrapper from '@/components/MunazzaComponent/Wrapper'
import all from "@../../../components/MunazzaComponent/allimages.png"
import RI1 from "@../../../app/About/olm.png"
import RI2 from "@../../../app/About/second.png"
import RI3 from "@../../../app/About/third1.png"
import first from "@/app/hh/first.png"
import second from "@/app/hh/images.png"
import third from "@/app/hh/oop.png"
import box from "@/app/hh/image.png"
import internet from "@/app/About/internet.png"
import badge from "@/app/About/badge.png"
import home from "@/app/About/home.png"
import people from "@/app/About/people.png"
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'


// import { Sarina } from "next/font/google";

// const inter = Sarina({ weight: "400" });

const data = [
  {
    "h2": "Our mission",
    "p": "Our mission is to provide a community-driven, cost-effective and sustainable housing solution for the 21st century, fostering meaningful connections and promoting a sense of belonging."
  },
  {
    "h2": "Our vision",
    "p": "Our vision is to revolutionize the way people live by creating a global network of inclusive and diverse communities where individuals can thrive both personally and professionally without any hinderance."
  },
  {
    "h2": "Our values",
    "p": "We value community, inclusivity, sustainability, and personal growth. We strive to provide a living experience that not only meets the basic needs of our residents, but also empowers them to lead fulfilling lives."
  }
]


const Boxes = [
  {
    numbers: "800",
    Communities: "Communities"
  },
  {
    numbers: "20000",
    Communities: "Monthly visitors"
  },
  {
    numbers: "128",
    Communities: "Reviews"
  },
  {
    numbers: "25000",
    Communities: "Members"
  },
  {
    numbers: "150",
    Communities: "Destinations"
  },
  {
    numbers: "30",
    Communities: "Countries"
  },
  {
    numbers: "16000",
    Communities: "Rooms"
  },
  {
    numbers: "1200",
    Communities: "Monthly Bookings"
  },
]

const SVG = [
  {
    svg: "/icon1.png",
    h1: "No booking fees",
    p: "Never pay a booking fee. More money for living instead."
  },
  {
    svg: "/icon2.png",
    h1: "100% online process",
    p: "Book rooms, chat with hosts, and pay rent online."
  },
  {
    svg: "/icon3.png",
    h1: "Payment protection",
    p: "We securely collect your rent after you move in."
  },
]




const ResponsiveBoxes = [
  {
    nu: "800",
    pa: "Communities"
  },
  {
    nu: "20000",
    pa: "Monthly visitors"
  },
  {
    nu: "128",
    pa: "Reviews"
  },
  {
    nu: "15000",
    pa: "Rooms"
  },
  {
    nu: "150",
    pa: "Destinations"
  },
  {
    nu: "30",
    pa: "Countries"
  },

]


const Images = [
  {
    "image":uI
  },
  {
    "image":po
  },
  {
    "image" : UI3
  }
]


const ResponsiveImages  = [
  {
    "image":RI1
  },
  {
    "image":RI2
  },
  {
    "image" : RI3
  } 
]
const page = () => {
  return (
    
    <div className='mt-20'>
      <Navbar />
      <div className=''>

        {/* <div className='grid grid-cols-2 max-w-screen-2xl mx-auto sm:px-6 xl:px-9'>
        <div className=' col-span-1 '>
          <h1 className='mt-10 2xl:text-[70px]/tight text-[50px]/tight font-bold text-[#141414]/90'>We are changing the way people connect</h1>
          <p className='text-[#454545]/80 mt-5 text-[18px] w-[669px] h-[143px]'>At <span className='text-black font-semibold'>Hostel Bird</span>, we're redefining community living by fostering dynamic and inclusive environments where connections flourish. Our mission is to revolutionize residential experiences, uniting individuals from diverse backgrounds through shared spaces and innovative technologies. We're committed to creating more than just a place to live; we're building vibrant, connected communities that transform the way people interact, share, and grow together.</p>
          <div className='flex '>
          <Image src={IMG2} alt="" className='mt-8 relative  w-[654px] h-[412px] ' />        
          <Image src={UMG788} alt="" className="w-[200px] h-[250px] ml-[80px]  2xl:ml-[90px]"/> 
         
           </div> 

        </div> */}
        {/* <div className='px-10 mt-10 object-cover flex flex-col items-end'> */}
        {/* <Image src={IMg} alt="" width={700} height={700} /> */}
        {/* <Image src={UMG22} alt="" className='2xl:w-[454px] 2xl:mx-6 w-[425px] mx-3'/> 
       <Image src={all} alt="" className='mx-6'/>
       
      

        </div>  */}
        {/* </div>  */}

        <div className="container pmm:block hidden  mx-auto px-12 ttp:px-16 images:px-20 py-8">
      <div className={`grid grid-cols-6 grid-flow-col  overflow-hidden rounded-lg `}> {/* Adjust columns as needed */}
    <div className="col-span-4">
    <div className="text-balance">
    <h1 className='mt-10 text-[45px]/[1.20] opo:text-[55px]/[1.20] images4:text-[65px]/[1.20] images3:text-[80px]/[1.20] images:text-[80px]/[1.20] font-bold w-[520] images2:pr-20 text-[#141414]/90'>We are changing the way people connect.</h1>
          <p className='text-[#454545]/80 mt-5 pr-4 images2:pr-8 text-[13px] pko:text-[15px] ppp:text-[18px] images:text-[22px]'>At <span className='text-black font-semibold'>Hostel Bird</span>, we're redefining community living by fostering dynamic and inclusive environments where connections flourish. Our mission is to revolutionize residential experiences, uniting individuals from diverse backgrounds through shared spaces and innovative technologies. We're committed to creating more than just a place to live; we're building vibrant, connected communities that transform the way people interact, share, and grow together.</p>
    </div>
    <div className="flex gap-28 ttl:gap-20 jj:gap-32 ">
    <Image src={box} alt="The Box" className="pt-14 w-[368px] llp:w-full  pmm:block hidden h-[288px] object-cover ttl:object-fill ttl:h-[368px] iko:h-[468px] images2:h-[528px]" priority/> <Image src={third} alt="kjhxisjaioxosa" className="hidden pmm:block mr-10 opo:mr-8 ool:mr-10 mt-6 w-[160px] h-[160px]  llm:w-[180px] llm:h-[180px]  ttp:w-[230px] ttp:h-[230px] poq:w-[280px] poq:h-[280px]" />
    </div>
    </div>
    {/* <div className="col-span-1 mt-5"> 
           

    </div> */}
   
           <div className="col-span-2 mt-5 h-[589px] pmm:block hidden">
         <Image src={second} alt="kjhxisjaioxosa" className="w-full object-cover" />
           
    </div> 
    
            
            
       
      </div>
    </div>

    <div className='pmm:hidden mt-28 huh:mt-36  block mx-5 sm:px-10'>
    <h1 className='text-[25px]/[1.20] boxes:text-[28px]/[1.20] huh:text-[37px]/[1.20] sm:text-[47px]/[1.20]   font-bold text-[#141414]/90'>We are changing the way people connect.</h1>
          <p className='text-[#454545]/80 mt-5 text-[12px] boxes:text-[13px] hidden huh:block huh:text-[15px] sm:text-[17px] images:text-[22px]'>At <span className='text-black font-semibold'>Hostel Bird</span>, we're redefining community living by fostering dynamic and inclusive environments where connections flourish. Our mission is to revolutionize residential experiences, uniting individuals from diverse backgrounds through shared spaces and innovative technologies. We're committed to creating more than just a place to live; we're building vibrant, connected communities that transform the way people interact, share, and grow together.</p>
          <p className='text-[#454545]/80 mt-5 text-[12px] huh:hidden block boxes:text-[13px] huh:text-[15px] sm:text-[17px] images:text-[22px]'>At <span className='text-black font-semibold'>Hostel Bird</span>, we're redefining community living by fostering dynamic and inclusive environments where connections flourish. Our mission is to revolutionize residential experiences, uniting individuals from diverse backgrounds through shared spaces and innovative technologies. </p>
      <div className='flex mt-5 huh:mt-10  justify-between mr-9 mop:mr-0 gap-2 huh:gap-0'>
        <Image src={internet} alt="Internet" className='h-[57px] mop:h-[63px] kj:h-[73px]  rounded-[20px]  boxes:h-[83px] nn:h-[98px] yy4:h-[116px] carol:h-[136px] yy6: yy5: yy4: yy3: yy2:h-[163px] yy:h-full'/>
        <Image src={badge} alt="Badge" className='h-[57px] mop:h-[63px] kj:h-[73px]  rounded-[20px]  boxes:h-[83px] nn:h-[98px] carol:h-[136px]  yy4:h-[116px] yy6: yy5: yy4: yy3: yy2:h-[163px] yy:h-full'/>
        <Image src={home} alt="Home" className='h-[57px] mop:h-[63px] kj:h-[73px]  rounded-[20px]  boxes:h-[83px] nn:h-[98px] carol:h-[136px] yy6: yy5:  yy4:h-[116px] yy3: yy2:h-[163px] yy:h-full '/>
        <Image src={people} alt="People" className='h-[57px] mop:h-[63px] kj:h-[73px]  rounded-[20px]  boxes:h-[83px] nn:h-[98px] carol:h-[136px] yy6: yy5:  yy4:h-[116px] yy3: yy2:h-[163px] yy:h-full'/>
      </div>
    </div>





        <div className='flex justify-center items-center  im:px-9'>
          <Image src={IMG3} alt="" className='object-cover mt-[52px]  rounded-xl im:w-full im:h-[664px]  mx-6' />
        </div>
        <div className=' sm:px-6'>
          <div className=' xl:px-9 mx-5'>
            <h2 className='lg:text-[51px] huh:mt-12 mt-9 font-bold smm:text-[30px] text-[25px]'>About Hostel Bird </h2>
            <p className='text-[#454545]/80 lg:w-[836px] mn:w-[590px] but:w-[400px]  mt-3 lg:text-[20px]  mn:text-[18px] but:text-[15px] text-[13px]'>
              Hostel Bird is dedicated to pioneering vibrant, connected communities where every individual can thrive. Our vision is rooted in innovation, inclusivity, and a deep commitment to enriching the coliving experience for all.
            </p>
          </div>
          <div className='mr-8 sm:mr-10 sm:ml-4'>
            <div className='mt-14  grid grid-cols-1 lg:grid-cols-2 destiny:grid-cols-3 lg:gap-12 im:mx-6 lk:mx-4  but:mr-6'>

              {
                data.map((item, key) => {
                  return (
                    <div className='border border-[#0C2D57]/15 text-left  huh:pl-7 pl-4 huh:pr-3 mx-4 py-3 mb-4 shadow-sm border-1 destiny:w-full lg:w-full uu:w-[800px] ii:w-full fou:w-full huh:w-full w-full huh:h-[160px] h-[160px] lg:h-[90%] huh:mx-5 huh:mt-9 huh:mr-3 fou:h-[220px]  huh:py-4'>
                      <h2 className='font-semibold fou:text-[25px] text-[18px] huh:w-[354px]'>{item.h2}</h2>
                      <p className='text-[#636363] mt-2  yy3:text-[19px] fou:text-[16px] text-[12px] pr-2'>{item.p}</p>
                    </div>
                  )
                })
              }


            </div>
          </div>

          <div className='jm:block hidden mt-16 '>
            <h2 className='font-bold kk:text-[47px] text-[30px]  text-[#141414]/90 mt-7 text-center'>Your next coliving home</h2>

            <div className='mt-16 grid grid-cols-4 gg:gap-x-[50px] gap-y-12 '>
              {
                Boxes.map((item, key) => {
                  return (
                    <div className='border max-w-screen-2xl mx-auto rounded-xl bg-gradient-to-t from-white to-[#f5f6f8]   text-center py-3 cro:w-[200px] cro:h-[100px] kk:w-[150px] w-[120px] h-[62px] kk:h-[80px]  shadow-md '>
                      <h2 className='font-bold cro:text-[30px] kk:text-[22px] text-[18px]'>{item.numbers}</h2>
                      <p className='cro:text-[18px] kk:text-[14px] text-[11px] text-[#636363]'>{item.Communities}</p>
                    </div>
                  )
                })
              }
            </div>
            <hr className='mmm:mt-16 mt-8 text-gray-200 border ' />
 

{/* 
           <div className='mt-9 '>
           <div className=''>
             <Image src={RI1} alt=""  className='border border-[#0C2D57]/10 yu:py-5 yu:px-6  py-4 px-4 rounded-2xl mx-3' priority={true} />
             <Image src={RI2} alt=""  className='border border-[#0C2D57]/10 mt-9 yu:py-5 yu:px-6 rounded-2xl mx-3' priority={true} />
             <Image src={RI3} alt=""  className='border border-[#0C2D57]/10 mt-9 py-5 px-6 rounded-2xl mx-3' priority={true} />
             

             </div>
       
           </div> */}


{/* <div className='mt-9 block mmm:hidden'>
  <div className=''>
    <Image src={RI1} alt="" className='border border-[#0C2D57]/10 yu:py-5 yu:px-6 py-4 px-4 rounded-2xl mx-3'  />
    <Image src={RI2} alt="" className='border border-[#0C2D57]/10 mt-9 yu:py-5 yu:px-6 rounded-2xl mx-3'  />
    <Image src={RI3} alt="" className='border border-[#0C2D57]/10 mt-9 py-5 px-6 rounded-2xl mx-3' />
  </div>
</div> */}



          </div> 
       </div> 
       <div className='rty:block hidden '>
             <div className='flex   mt-12  justify-center   kj:gap-64 jkk:gap-52 gtr:gap-44 jui:gap-36 gyu:gap-28 hyq:gap-20 fre:gap-14 edw:gap-12 frw:gap-11 gap-9 kj:mx-16 jkk:mx-14 gtr:mx-12 hyq:mx-10 fre:mx-9 edw:mx-8 frw:mx-6 mx-5'>
              {
                Images.map((item,key) => {
                  return <div className=''>
                    <Image src={item.image} alt="Our Services" className='fwq:w-[369px] dew:w-[359px] w-[349px] fwq:h-[83px] dew:h-[73px] h-[63px] ' />
                    </div>
                })
              }
            </div>
           </div>


        <div className='jm:hidden block mt-9 '>
          <h2 className='font-bold kk:text-[40px] text-[25px] smm:text-[30px]  text-[#141414]/90 mt-7 mx-8 text-center'>Your  coliving home</h2>


          <div className='mt-6 ii:mt-12 sm:mt-16 grid grid-cols-3 gap-y-7 gap-3 ii:mx-12 oli:mx-8 mx-6'>
            {
              ResponsiveBoxes.map((item, key) => {
                return (
                  <div className='border  mx-auto rounded-xl text-center oli:py-3 py-2  oli:w-[120px] ii:w-[112px] ii:h[56px] w-full h-full  oli:h-[62px] bg-[#0C2D57]/3 shadow-md '>
                    <h2 className='font-bold  oli:text-[18px]  text-[13px]'>{item.nu}</h2>
                    <p className=' oli:text-[11px] text-[8.9px] text-[#636363]'>{item.pa}</p>
                  </div>
                )
              })
            }
          </div>

          <hr className='mt-16 text-gray-200 border ' />
        </div>

        <div className='rty:hidden block bvy:mt-8 mt-6 vgt:mx-10 eqr:mx-5 crt:mx-12 ybv:mx-10 czs:mx-8 ggy:mx-10 bvy:mx-8 eta:mx-7 hjx:mx-5  mx-4'>
              {
                  ResponsiveImages.map((item,key) => {
                    return (
                    <div className='ubr:mb-10 eqr:mb-6 sep:mb-5 hjx:mb-4 mb-3 border border-[#0C2D57]/10 crt:px-6  czs:px-4 bvy:px-3 px-2 crt:py-5 zew:py-4 eqr:py-3 py-2 rounded-2xl twe:w-[640px] ubr:w-[600px] fto:w-[550px] ddw:w-[500px] eqr:w-[460px] crt:w-[380px] czs:w-[340px] bvy:w-[310px] dqe:w-[290px] sep:w-[270px] hjx:w-[250px] daq:w-[239px] lui:w-[229px] w-[215px] twe:h-[130px] ubr:h-[120px] fto:h-[110px]  ddw:h-[100px] eqr:h-[90px] crt:h-[80px] czs:h-[70px] bvy:h-[64px] dqe:h-[59px] sep:h-[53px] daq:h-[50px] lui:h-[47px] h-[43px] ' >
                     <Image src={item.image} alt="services bvy:w-[340px] w-[320px] bvy:h-[50px] h-[45px]"/>
                    </div>
                    )
                  })
                }
              </div>
           


        <div className="relative rty:mt-[90px] mt-[70px]">
          <Image src={BG} alt="" className='h-[230px] crt:h-full' />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white md:text-[45px] but:text-[30px] last:text-[20px] text-[15px] font-bold ">Are you ready?</h2>
            <button className='fou:w-[166px] fou:h-[48px] w-[106px] h-[30px] border rounded-full mt-3 px- font-semibold text-[#141414] fou:text-lg text-[12.23px]  bg-[#FFFFFF]/55'>
              Find my stay
            </button>
          </div>


        </div>
      </div>





     
<Footer/>
    </div>
  )
}

export default page