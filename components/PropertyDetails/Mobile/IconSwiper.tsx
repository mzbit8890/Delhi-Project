import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AirIcon from '@mui/icons-material/Air';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import CabinOutlinedIcon from '@mui/icons-material/CabinOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

export default function IconSwiper() {
  return (
    <>
    <Box>
      <Swiper
        style={{height: '100px', margin: '20px 0'}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{background: '#0C2D5708'}}>
            <Box sx={{display: 'flex', gap: '25px'}}>
              <AirIcon fontSize='large' sx={{color: '#F65656'}}/>
              <ChairOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
              <TableRestaurantOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
              <CleaningServicesOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
              <WifiOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>

            </Box>
        </SwiperSlide>
        <SwiperSlide style={{background: '#0C2D5708'}}>
            <Box sx={{display: 'flex', gap: '25px'}}>
              <HomeRepairServiceOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
              <CabinOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
              <HotelOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
              <BathtubOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
              <DryCleaningOutlinedIcon fontSize='large' sx={{color: '#F65656'}}/>
            </Box>
        </SwiperSlide>
      </Swiper>
      </Box>
    </>
  );
}
