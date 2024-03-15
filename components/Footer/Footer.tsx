'use client'

import {
    Box,
    Button,
    Grid,
    Typography,
    Divider
  } from "@mui/material";

import Image from 'next/image'
import bird from '@/assests/bird.png'

const Footer = () => {
  return <>
  <Box  sx={{background: '#141414', color: 'white'}}>
    <Box mx={{xs:1, md:10}} py={3}>
      <Typography my={2} variant="h4" sx={{fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-pacifico)'}}><Image alt="logo" src={bird} width={50} height={50}/>Hostel Bird</Typography>
      <Divider sx={{my: 5, borderColor: 'white'}} />
      <Box mx={2} sx={{display: 'flex', justifyContent: 'center'}}>
      <Grid container spacing={2}>
        {[['Accomodations', 'Destinations', 'Hostels', 'Workations', 'Group Bookings'], ['Important Links', 'Career', 'Sitemap', 'Volunteer', 'Invest & Partner'], ['Policies', 'Guest Policy', 'Privacy Policy', 'Refund Policy', 'Terms & Conditions'], ['Contact Details', 'Support Center', 'Community', 'Contact Us', 'Others']].map((item, index) => (
            <Grid key={index} item xs={6} md={3} sx={{display: 'flex', justifyContent: 'start'}}>
              <Box>
              <Typography mb={2} variant="h6" sx={{fontWeight: 700}}>{item[0]}</Typography>
              <Typography variant="h6" sx={{color: '#818181'}}>{item[1]}</Typography>
              <Typography variant="h6" sx={{color: '#818181'}}>{item[2]}</Typography>
              <Typography variant="h6" sx={{color: '#818181'}}>{item[3]}</Typography>
              <Typography variant="h6" sx={{color: '#818181'}}>{item[4]}</Typography>
              </Box>
            </Grid>
        ))}
      </Grid>
      </Box>
      <Divider sx={{my: 5, borderColor: 'white'}} />
      <Typography variant="h6" textAlign="start">Hostel Bird Private Limited © 2024 All Rights Reserved</Typography>
    </Box>
    </Box>
  </>
}

export default Footer