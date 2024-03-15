import { Box, Grid, Paper, Typography } from '@mui/material'
import { ListItemBox, NumberTypography, PaperText, TextTypography } from './Facilities.style'
import branch from "@../../../app/branches.png"
import { HeadingTypography } from '../index.style'


import useMediaQuery from '@mui/material/useMediaQuery';

import webb from "@/assests/webb.png"
import Image from 'next/image'

const Facilities = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return <>
    <Box my={{xs: 4, lg: 10}}>
        <Grid container spacing={5}>
            <Grid item lg={6.5}>
                <HeadingTypography variant='h3' mb={3}>Why Stay With Us</HeadingTypography>
                {/* <Grid container>
                    <Grid item lg={6}>
                      {[{num:1, des:'Bills Included'},{num:2, des:'Move-in-ready'},{num:3, des:'Day/Monthly stays'},{num:4, des:'Chat with Travellers'}].map((item) => (
                        <ListItemBox py={3}>
                          <NumberTypography variant='h4' px={2.5} py={1}>{item.num}</NumberTypography>
                          <PaperText elevation={1}>
                            <TextTypography variant='h5' px={3} py={3}>{item.des}</TextTypography>
                          </PaperText>
                        </ListItemBox>
                      ))}
                    </Grid>
                    <Grid item lg={6}>
                      {[{num:5, des:'Built-in community'},{num:6, des:'Gym on the go'},{num:7, des:'Find party nearby'},{num:8, des:'Events and action'}].map((item) => (
                        <ListItemBox py={3}>
                          <NumberTypography variant='h4' px={2.5} py={1}>{item.num}</NumberTypography>
                          <PaperText elevation={1}>
                            <TextTypography variant='h5' px={3} py={3}>{item.des}</TextTypography>
                          </PaperText>
                        </ListItemBox>
                      ))}
                    </Grid>
                </Grid> */}
                <Box>
                 <Image
                   alt='img'
                   src={branch}
                   width={700}
                   height={700}
                //  style={{width: '698.5px', height: isMobile ? '321.2px' : '430px', objectFit: 'cover'}}
                className='h-[400] '
                
                />
                </Box>
            </Grid>
            <Grid item lg={5.5}>
                <Box
                   component='img'
                   src='https://source.unsplash.com/random?travel'
                   sx={{width: '100%', height: '570px', objectFit: 'cover', borderRadius: '25px', display: {xs: 'none', lg: 'block'}}}
                />
            </Grid>
        </Grid>
    </Box>
  </>
}

export default Facilities