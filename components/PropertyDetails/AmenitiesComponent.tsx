import Image from "next/image";
import React from "react"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AirIcon from '@mui/icons-material/Air';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';

import Chair from '@/assests/../assests/PropertyDetails/Chair.png'

const Item: React.FC<{icon: any, title:string}> = ({icon, title}) => {
  return <>
    <Grid item lg={2}>
      <Box m={2} p={2} sx={{border: '1px solid lightgrey', borderRadius: '10px', textAlign: 'center', background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'}}>
          {icon}
        <Typography variant="body2">
          {title}
        </Typography>
      </Box>
    </Grid>
  </>
}

const Amenities = () => {
  return <>
     <Box my={{xs: 3, lg: 10}} sx={{borderRadius: '40px' ,overflow: 'hidden', backgroundColor: '#F5F7F8'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Box py={3} mb={8} sx={{ width: '350px', border: '2px solid lightgrey', borderRadius: '0 0 60px 60px', background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)'}}>
            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', fontSize: '25px',}}>
              Amenities
            </Typography>
        </Box>
        </Box>
        <Grid container>
          <Grid p={5} item lg={8}>
             <Stack>
                <Grid container>

                  <Item icon={<AirIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Air Conditioner"/> 
                  <Item icon={<ChairOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Common Area"/>               
                  <Item icon={<TableRestaurantOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Front Desk"/>               
                  <Item icon={<CleaningServicesOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="House Keep"/>               
                  <Item icon={<WifiOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Wi-Fi"/>               

                </Grid>
                <Grid container>

                  <Item icon={<TableRestaurantOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Front Desk"/>               
                  <Item icon={<CleaningServicesOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="House Keep"/>               
                  <Item icon={<WifiOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Wi-Fi"/>               
                  <Item icon={<ChairOutlinedIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Common Area"/>               
                  <Item icon={<AirIcon sx={{fontSize: '75px', color: '#F65656'}}/>} title="Air Conditioner"/> 

                </Grid>
             </Stack>
          </Grid>
          <Grid item lg={4}>
            <Image alt="chair" src={Chair}/>
          </Grid>
        </Grid>
    </Box>
  </>
}

export default Amenities