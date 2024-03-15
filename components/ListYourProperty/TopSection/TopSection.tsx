import { Box, Grid, Paper, Typography } from "@mui/material"
import house from "@/assests/house.png"
import smallhouse from "@/assests/smallhouse.png"
import home from "@/assests/home.png"
import Image from "next/image"

const TopSection = () => {
  return <>
    <Grid container>
        <Grid item xs={12} lg={6} spacing={2}>
            <Typography variant="h3" sx={{fontWeight: 700}}>Unlock the Benefits of Listing Your Property with Us</Typography>
            <Typography my={2} variant="body1">Are you a hostel owner looking to boost your bookings and connect with travelers from around the world? Look no further! Hostelbird offers you a seamless platform to showcase your property and unlock a world of opportunities. Here are the benefits of listing your property with Hostelbird:</Typography>
            <Box py={5} sx={{position: 'relative', height:'400px'}}>
              {/* <Image alt="img" src={house} width={350} height={350} style={{position: 'absolute', left: '12rem'}}/>
              <Image alt="img" src={smallhouse} width={100} height={100} style={{position: 'absolute', left: '2rem', top: '1rem'}}/>
              <Image alt="img" src={smallhouse} width={100} height={100} style={{position: 'absolute', left: '2rem', top: '22rem'}}/>
              <Image alt="img" src={smallhouse} width={100} height={100} style={{position: 'absolute', left: '40rem', top: '22rem'}}/> */}
              <Image alt="img" src={home} width={650} height={450} />
            </Box>
        </Grid>
                
        <Grid item xs={12}  lg={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'}}>
            <Paper elevation={2} sx={{display: 'flex', gap: 2, borderRadius: '20px', width: '500px', marginTop: 5, padding: 3, border: '1px solid lightgrey'}}>
                <Typography variant="h6" sx={{background: 'linear-gradient(180deg, rgba(246, 86, 86, 0.7) 0%, rgba(255, 255, 255, 0.05) 100%)', height: '30px', padding: '1px 10px', border: '1px solid black', borderRadius: '50px 0 50px 50px'}}>1</Typography>
                <Box>
                    <Typography mb={1} variant="h5">Upto 30% Increase in Bookings: </Typography>
                    <Typography variant="body1">Say goodbye to empty beds! Hostelbird&apos;suser-friendly platform and extensive network of travelers make it easy forguests to discover and book your property. Experience a surge in bookings andmaximize your occupancy rates with Hostelbird.</Typography>
                </Box>
            </Paper>
            <Paper elevation={2} sx={{display: 'flex', gap: 2, borderRadius: '20px', width: '800px', marginTop: 5, padding: 3, border: '1px solid lightgrey'}}>
                <Typography variant="h6" sx={{background: 'linear-gradient(180deg, rgba(246, 86, 86, 0.7) 0%, rgba(255, 255, 255, 0.05) 100%)', height: '30px', padding: '1px 10px', border: '1px solid black', borderRadius: '50px 0 50px 50px'}}>2</Typography>
                <Box>
                    <Typography mb={1} variant="h5">Extended Stay Options: </Typography>
                    <Typography variant="body1">Expand yourhostel&apos;s offerings with our long-term co-living packages. Cater to digitalnomads, remote workers, and students seeking extended accommodations byproviding flexible lease terms and access to a vibrant co-living community. Byoffering this option, you can attract a new demographic of guests and increaseoccupancy rates during off-peak seasons, boosting revenue and maximizing yourhostel&apos;s potential.</Typography>
                </Box>
            </Paper>
            <Paper elevation={2} sx={{display: 'flex', gap: 2, borderRadius: '20px', width: '500px', marginTop: 5, padding: 3, border: '1px solid lightgrey'}}>
                <Typography variant="h6" sx={{background: 'linear-gradient(180deg, rgba(246, 86, 86, 0.7) 0%, rgba(255, 255, 255, 0.05) 100%)', height: '30px', padding: '1px 10px', border: '1px solid black', borderRadius: '50px 0 50px 50px'}}>3</Typography>
                <Box>
                    <Typography mb={1} variant="h5">Less Commission Charges: </Typography>
                    <Typography variant="body2">With Hostelbird,enjoy the benefit of low commission charges, ensuring that you retain a higherportion of your booking revenue. Our competitive commission rates allow you tomaximize your earnings while still accessing our extensive network of travelers</Typography>
                </Box>
            </Paper>
        </Grid>
    </Grid>
  </>
}

export default TopSection