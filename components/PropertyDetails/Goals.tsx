import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Divider,
    Grid,
    LinearProgress,
    Typography,
  } from "@mui/material";

import CastleIcon from '@mui/icons-material/Castle';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const data = [
  {icon: <CastleIcon sx={{marginRight: '25px', color: '#F65656', fontSize: '60px'}}/>, title: "Old World Charm", decription: 'Every corner of Delhi is filled with historical monuments and cultural treasures from the country’s past.'},
  {icon: <LunchDiningIcon sx={{marginRight: '25px', color: '#F65656', fontSize: '60px'}}/>, title: "Food lover's dream", decription: 'The city is famous worldwide for its lip smacking food options - from spicy street food to decadent cafes and bars.'},
  {icon: <MilitaryTechIcon sx={{marginRight: '25px', color: '#F65656', fontSize: '60px'}}/>, title: "Premium experience", decription: 'The hostel offers spacious rooms, a restaurant and common areas for people to get together for meetings or work.'}
]

const Goals = () => {
  return <>
    <Box pb={6} my={{xs: 3, lg: 10}} sx={{borderRadius: '40px' ,overflow: 'hidden', background: '#0C2D5708' }}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box py={3} mb={8} sx={{width: {xs:'350px',lg:'300px'},border: '2px solid lightgrey', borderRadius:'0 0 60px 60px', background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',}}>
                <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', fontSize: '23px',}}>
                  Why you&apos;ll love it here?
                </Typography>
            </Box>
        </Box>
        <Grid container my={{xs: 0, md:5}} mx={{xs: 0, md:5}}>
            {data.map((item, index) => (
              <Grid my={2} key={index} item md={4} sx={{display: 'flex', justifyContent: 'start'}}>
                <Box px={3} py={5} sx={{width: {xs:'90%',lg:'75%'}, border: '1px solid lightgrey', borderRadius: '15px', background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',}}>
                  <Typography variant="h5" sx={{display: 'flex', alignItems: 'center', fontWeight: 'bold'}} >{item.icon}{item.title}</Typography>
                  <Typography mt={2} variant="h6" >{item.decription}</Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
    </Box>
  </>
}

export default Goals