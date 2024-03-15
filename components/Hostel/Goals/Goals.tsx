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
    <Box sx={{display: {xs: 'none', md: 'block'}}}>
        <Grid direction="column" container>
            {data.map((item, index) => (
              <Grid my={2} key={index} item md={4} sx={{display: 'flex', justifyContent: 'start'}}>
                <Box px={3} py={5} sx={{width: {xs:'90%',lg:'75%'}, border: '1px solid lightgrey', borderRadius: '15px',}}>
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