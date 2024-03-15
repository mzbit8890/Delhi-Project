import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
  import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const Goals = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  function handleClickOpen(value: string) {
    value === 'one' ? setOpen1(prev => !prev) : setOpen2(prev => !prev);
  }
  return <>
    <Box my={{xs: 3, lg: 10}} sx={{borderRadius: '40px' ,overflow: 'hidden', background: '#0C2D5708' }}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Box py={3} mb={8} sx={{width: {xs:'300px',lg:'300px'}, border: '2px solid lightgrey', borderRadius: '0 0 60px 60px', background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',}}>
            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', fontSize: '25px',}}>
              Our Policies
            </Typography>
        </Box>
        </Box>
        <Stack pb={10}>
            <Box mx={{xs:0, lg:5}} sx={{border: '1px solid lightgrey', borderRadius: '30px', overflow: 'hidden', height: open1 ? '500px' : {xs:'80px', lg: '100px'}}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between',  alignItems: 'center', background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',}}>
                    <Typography p={3}  variant="h4" sx={{fontSize: {xs:'25px', md:'40px'}}}>General Policy</Typography>
                    <ArrowDropDownCircleOutlinedIcon sx={{color: '#F65656', fontSize: '50px', mr: 5}} onClick={handleClickOpen.bind(this,'one')}/>
                </Box>
            </Box>
            <Box mt={2} mx={{xs:0, lg:5}} mb={{xs:0, md:5}} sx={{border: '1px solid lightgrey', borderRadius: '30px', overflow: 'hidden', height: open2 ? '500px' : {xs:'80px', lg: '100px'}}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',}}>
                    <Typography p={3} variant="h4" sx={{fontSize: {xs:'25px', md:'40px'}}}>Cancellation Policy</Typography>
                    <ArrowDropDownCircleOutlinedIcon sx={{color: '#F65656',  fontSize: '50px', mr: 5}} onClick={handleClickOpen.bind(this,'two')}/>
                </Box>
            </Box>
        </Stack>
    </Box>
  </>
}

export default Goals