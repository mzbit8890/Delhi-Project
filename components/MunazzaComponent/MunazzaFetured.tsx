
import Wrapper from "./Wrapper"
import Bg from "@../../../components/MunazzaComponent/featured.png"
import Im from "@../../../components/MunazzaComponent/Bgimage.png"
import Im2 from "@../../../components/MunazzaComponent/bgimage2.png"
import im3 from "@../../../components/MunazzaComponent/Bgimage3.png"
import im4 from "@../../../components/MunazzaComponent/Bgimage4.png"
import im5 from "@../../../components/MunazzaComponent/bgImage5.png"
import Fav from "@../../../components/MunazzaComponent/feat.png"
import Book from "@../../../components/MunazzaComponent/book.png"
import IMG from "@../../../components/MunazzaComponent/featured.png"
import arrow from "@../../../components/MunazzaComponent/icon.png"
import lefta from "@../../../components/MunazzaComponent/leftarrow.png"
import Responsive from "@../../../components/MunazzaComponent/responsive1.png"
import Responsive1 from "@../../../components/MunazzaComponent/responsive2.png"
import Responsive2 from "@../../../components/MunazzaComponent/feature.png"
import bookbutton from "@../../../components/MunazzaComponent/bookbutton.png"
import fbutton from "@../../../components/MunazzaComponent/fea.png"





let Boxes = [
    {
        image:Im,
        head:"Introducing Hostel Jodhpur",
        p:"Welcoming you in our second hostel in the land of camels and castles."
    },
    {
        image:Im2,
        head:"Introducing Sprinklers Hostel",
        p:"Welcoming you in our second hostel in the land of camels and castles."
    },
    {
        image:im3,
        head:"Featuring Hostel Goa (Anjuna)r",
        p:"Welcoming you in our second hostel in the land of camels and castles."
    },
    {
        image:im4,
        head:"Introducing Moustache Delhi",
        p:"Welcoming you in our second hostel in the land of camels and castles."
    },
    {
        image:im5,
        head:"Introducing Hosteller Delhi",
        p:"Welcoming you in our second hostel in the land of camels and castles."
    },
]


import leftArow from "./arrowIcon.png"
import right from "./leftarrow.png"




import React, { useRef, useState } from 'react';





import Image from "next/image"
import HorizontalScroll from "../HomeSection/Destination/HorizontalScroll"
import HirizontallScroll2 from "./HirizontallScroll2"

function YourComponent() {
  const scrollLeft = () => {
    const container = document.getElementById("scroll-container");
    if (container) container.scrollLeft -= 100;
  };

  const scrollRight = () => {
    const container = document.getElementById("scroll-container");
    if (container) container.scrollLeft += 100;
  };
return (
  
<>
<div className="hidden sm:block">

 <div className="text-[40px] text-[#141414]/90 font-bold mt- max-w-screen-2xl mx-auto px-6 xl:px-9">
      Featured Properties   
       </div>

<div className="relative"><HirizontallScroll2 >
  
    <Image src={IMG} alt="" className="absolute mt-[148px] h-[283px] w-[]"/>
    
       <div className="flex gap-10 justify-center max-w-screen-2xl mx-auto px-6 xl:px-9 mt-5  " >
  <div className="relative border  rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={Im} alt="" className="w-[250px] h-[178px]" />
    <button onClick={scrollLeft} className="absolute top-0 left-0  inset-0  hover:text-gray-900">
        <Image src={arrow} alt="Left Arrow" className=""  width={50} height={50}/>
      </button>
     <div></div>
    <h2 className="my-2 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90 relative absolute-0">Introducing Hostel Jodhpur</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9] ">Welcoming you in our second hostel in the land of camels and castles</p>

    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>



  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={Im2} alt="" className="w-[250px] h-[178px]" />
    <h2 className="my-2 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Introducing Sprinklers Hostel</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>
  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={im3} alt="" className="w-[250px] h-[178px]" />
    <h2 className="my-3 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Featuring Hostel Goa (Anjuna)</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>
  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={im4} alt="" className="w-[250px] h-[178px]" />
    <h2 className="my-3 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Introducing Moustache Delhi</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>

  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={im5} alt="" className="w-[250px] h-[178px]" />
    <button onClick={scrollRight}  className="absolute top-1 mt-[155px] right-0 h-[50px] w-[50px]">
        <Image src={lefta} alt="Right Arrow" className="w-full h-full" />
      </button>
    <h2 className="my-3 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Introducing Hosteller Delhi</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>
</div></HirizontallScroll2></div>



</div>



 {/* <div className="block  sm:hidden  justify center mx-8 mt-20 h-[366px] ml-8"> */}

        <div className="block sm:hidden  justify-center mb-5  caro2:mb-24  h-[302px] th:h-[326px] caro2:h-[356px] ">
      <div className="text-[25px] smm:text-[40px] text-[#141414]/90 font-bold  mb-40 caro2:mb-48">
        Featured Properties
      </div>
      <div className=" flex relative  mt-6 justify-center items-center ml-2 mr-8  last:ml-4 last:mr-16 mar:mx-12 caro2:ml-12">
        <div className="absolute   w-full last:w-[230px] th:w-[260px] h-[260px] caro2:w-[330px]  caro2:h-[330px] caro:w-[370px] caro:h-[336px]">
          <Image src={Responsive} alt="" className="  object-cover"  />
        </div>

        <div className="absolute w-full  last:w-[230px] th:w-[270px] h-[270px] caro2:w-[330px] caro2:h-[326px] caro:w-[370px] caro:h-[336px] ml-5">
          <Image src={Responsive1} alt="" />
        </div>

        <div className="sm:w-[370px] absolute sm:h-[366px] mr-20 w-full last:w-[230px] th:w-[270px] h-[276px] caro2:w-[330px] caro2:h-[326px] caro:w-[370px] caro:h-[336px]">
          <Image src={Responsive2} alt="" className="z-0 left-0 absolute mx-16 rounded-2xl object-cover"  />
          <button className="absolute hidden last:flex ml-[220px] th:ml-[252px] caro2:ml-72 caro:ml-80 hover:bg-black/10 top-[2px] th:top-[4px] caro2:top-[7px] w-[70px] th:w-[80px] caro2:w-[100px] caro:w-[110px] items-center mt-[6px]">
         <Image src={fbutton} alt="Featured button" className="h-[28px] th:h-[32px] caro2:h-[40px]"/>
          </button>
          
        </div>
        <div className="sm:w-[370px] absolute sm:h-[366px] ml-[66px] th:ml-20 w-full last:w-[230px] th:w-[270px] h-[276px] mt-[370px] th:mt-[443px] caro2:mt-[542px] caro:mt-[617px] caro2:w-[330px] caro2:h-[326px] caro:w-[370px] caro:h-[336px]">
        <button className="absolute hidden last:flex mr-72  hover:bg-black/10 top-[7px] w-[80px] caro2:w-[100px] caro:w-[120px] items-center ">
        <Image src={bookbutton} alt="Book now buttton" className="h-[26px] th:h-[28px] caro2:h-[35px] caro:h-[40px]"/>
          </button>
          </div>
      </div>
    </div>
        {/* </div> */}


</>);
}

export default YourComponent;










 {/* <div className="relative">
    <Image src={IMG} alt="" className="absolute mt-[148px] h-[283px] w-[]"/>
    
       <div className="flex gap-10 justify-center max-w-screen-2xl mx-auto px-6 xl:px-9 mt-10 ">
  <div className="relative border  rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={Im} alt="" className="w-[250px] h-[178px]" />
    <Image src={arrow} alt="" className="absolute top-1 mt-[155px] h-[50px] w-[50px]"/>
    <h2 className="my-2 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90 relative absolute-0">Introducing Hostel Jodhpur</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9] ">Welcoming you in our second hostel in the land of camels and castles</p>

    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>



  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={Im2} alt="" className="w-[250px] h-[178px]" />
    <h2 className="my-2 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Introducing Sprinklers Hostel</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>
  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={im3} alt="" className="w-[250px] h-[178px]" />
    <h2 className="my-3 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Featuring Hostel Goa (Anjuna)</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>
  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={im4} alt="" className="w-[250px] h-[178px]" />
    <h2 className="my-3 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Introducing Moustache Delhi</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>

  <div className="relative border rounded-2xl pb-4 hover:scale-110 duration-500">
    <Image src={Fav} alt="" className="absolute top-0 right-1 py-2 w-[110px] h-[60px]" />
    <Image src={im5} alt="" className="w-[250px] h-[178px]" />
    <Image src={lefta} alt="" className="absolute top-1 mt-[155px] h-[50px] w-[50px] right-0"/>
    <h2 className="my-3 px-3 text-[17px] font-bold w-[194px] text-[#FFFFFF]/90">Introducing Hosteller Delhi</h2>
    <p className="my-2 w-[212px] px-3 text-[14px] text-[#C9C9C9]">Welcoming you in our second hostel in the land of camels and castles</p>
    <button className=" rounded-xl w-[210px] h-[40px] bg-[#F65656] text-white text-[18px] font-semibold mx-3 mt-2">Book Now</button>
  </div>
</div></div>
*/}
