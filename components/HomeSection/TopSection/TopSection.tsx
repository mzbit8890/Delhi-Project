import Image from 'next/image'

import { Box, Divider, Stack } from '@mui/material'
import { BoxImage, CoverImage, HeadingTypography, SearchBoxWrapper, SubHeading, TextWrapperBox } from './TopSection.style'

import friends from "@/assests/friends.jpeg"
import HostelFinderSearchBox from "../search/search"

// const TopSection = () => {
//   return <>
//     <BoxImage>
//       <CoverImage alt="img" src={friends}> 
//       </CoverImage>
//       <HeadingTypography variant='h1'>Find Your Tribe</HeadingTypography>
//       <SearchBoxWrapper>
//         <Stack>
//             <TextWrapperBox py={3}>
//                 <SubHeading variant='h5' mr={{xs: 0, lg: 5}} ml={{xs:0, lg:10}}>DESTINATIONS</SubHeading>
//                 <SubHeading variant='h5' mx={{xs: 0, lg: 5}}>HOSTELS</SubHeading>
//                 <SubHeading variant='h5'  mr={{xs: 0, lg: 10}} ml={{xs:0, lg:5}}>CO-LIVING LONG STAYS</SubHeading>
//             </TextWrapperBox>
//             <Divider sx={{border: '1px solid #FFFFFF80'}}/>
//            <Box>
//                 <HostelFinderSearchBox />
//             </Box>
//         </Stack>
//        </SearchBoxWrapper>
//     </BoxImage>
//   </>
// }

// export default TopSection









// import friends from "@/assests/friends.jpeg";
// import HostelFinderSearchBox from "../search/search";
// import { Box, Stack } from '@mui/material';
// import Image from "next/image";

// const TopSection = () => {
//   return (
//     <Box >
//       <Image src={friends} alt="img" className="w-full h-auto filter bg-[#000000
// ]" />

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-blend-normal bg-slate-600">
//         <h1 className="text-white text-5xl font-bold mb-6">Find Your Tribe</h1>

//         <Stack direction="column" spacing={3} className=" md:block hidden">
//           <div className="flex justify-center">
//             <p className="text-white text-lg mr-10">DESTINATIONS</p>
//             <p className="text-white text-lg">HOSTELS</p>
//             <p className="text-white text-lg ml-10">CO-LIVING LONG STAYS</p>
//           </div>
          
//           <HostelFinderSearchBox />
//         </Stack>
//       </div>
//     </Box>
//   );
// };

// export default TopSection;

















// import friends from "@/assests/friends.jpeg";
// import HostelFinderSearchBox from "../search/search";
// import { Box, Stack } from '@mui/material';
// import Image from "next/image";
// import oljm from "@../../../components/MunazzaComponent/powel.png"


import Slash from "@../../../components/MunazzaComponent/slash.png"
import map from "@../../../components/MunazzaComponent/map.png"

const TopSection = () => {
  return (

    <>
    <Box className="relative mn:block hidden">
     <CoverImage alt="img" src={friends}> 
      </CoverImage>

      <div className="absolute inset-0 flex flex-col  text-center justify-center items-center bg-opacity-80">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6   ">Find Your Tribe</h1>
<div className='mt-5 mx-9'>
  
<Stack direction="column" spacing={3} className="text-lg md:text-xl lg:text-2xl md:block hidden  w-[860px] h-[140px]  rounded-xl object-cover">
          <div className="flex justify-center item-center gap-40 ">
            {/* Display on medium and larger screens */}
            <p className="text-white text-[20px]">DESTINATIONS</p>
            <p className="text-white text-[20px]">HOSTELS</p>
            <p className="text-white text-[]">CO-LIVING LONG STAYS</p>
          </div>
          
          {/* Display on all screens */}
          <HostelFinderSearchBox />
        </Stack>
</div>
      </div>
    </Box>


      <Box className="relative mn:hidden block">
      <CoverImage alt="img" src={friends}> 
      </CoverImage>
     <div>

     <div className="absolute inset-0 flex flex-col mt-2 yu:mt-7 text-center justify-center  mx-14 h-96 md:items-center bg-opacity-80 ">
        <h1 className="text-white item-center  text-3xl md:text-5xl lg:text-7xl font-bold mb-6   ">Find Your Tribe</h1>



        
        {/* <div className='rounded-lg border border-white p-4'>
        <div className='flex justify-center items-center gap-8'>
          <h2 className='text-[14px] text-white/90'>OUR HOSTELS </h2>
          <Image src={Slash} alt="" className=' h-5'/>
          <h2 className='text-[14px] text-white/90'>CO-LIVING LONG STAYS</h2>
         </div>   
         <svg className="mt-4" width="396" height="1" viewBox="0 0 396 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-0.00390625" y1="0.5" x2="395.996" y2="0.5" stroke="white" stroke-opacity="0.3"/>
</svg>

         <div className='flex gap-2 items-center'>
         <Image src={map} alt="" className='w-[20px] h-[20px] mt-5' />
         <h2 className='text-white w-[193px] h-[11px]'>Where do you want to go?</h2>
        
       <div className="flex items-end">
       <button className='w-[111px] h-[32px] mx-6 bg-[#F65656] text-white text-[17.6px] rounded-lg'>
                                Let’s Go!
         </button>
       </div>
         </div>
         <h2 className='text-white mr-52 '>New Delhi, India</h2>
      </div> */}
      <div className='rounded-lg border border-white p-4'>
        <div className='flex justify-center items-center gap-8'>
          <h2 className='text-[14px] text-white/90'>OUR HOSTELS </h2>
          <Image src={Slash} alt="" className=' h-5'/>
          <h2 className='text-[14px] text-white/90'>CO-LIVING LONG STAYS</h2>
         </div>   
         <div className='grid items-center justify-center'>
         <svg className="mt-4" width="396" height="1" viewBox="0 0 396 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-0.00390625" y1="0.5" x2="395.996" y2="0.5" stroke="white" stroke-opacity="0.3"/>
</svg>

         <div className='flex gap-2 items-center'>
         <Image src={map} alt="" className='w-[20px] h-[20px] mt-5' />
         <h2 className='text-white  md:w-[193px] md:h-[11px]'>Where do you want to go?</h2>
        
       <div className="flex items-end">
       <button className='w-[111px] h-[32px] mx-6 ml-20 md:mr-0 bg-[#F65656] text-white text-[17.6px] rounded-lg'>
                                Let’s Go!
         </button>
       </div>
         </div>
         <h2 className='text-white mr-52 '>New Delhi, India</h2>
         </div>
      </div>
     </div>
        </div>

      </Box> 









</>

  );
};

export default TopSection;





