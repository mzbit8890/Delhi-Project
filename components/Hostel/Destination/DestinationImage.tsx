import { Box, Typography } from '@mui/material'
import Delhi from '@/assests/Delhi.png'
import Image from 'next/image'

const DestinationImage = () => {
  

  return <>
  <Box mb={3} sx={{display: 'flex', position: 'relative'}}>
    <Image 
      alt="Destination"
      src={Delhi}
      style={{
        filter: 'brightness(50%)',
        width: "100%",
        height: "500px",
        objectFit: "cover",
        objectPosition: "center",
        position: "relative",
      }}
    />
    <Typography variant='h1' sx={{fontSize: '7vw' ,fontWeight: 700, color: 'white', position: 'absolute', top: "35%", left: '40%'}}>DELHI</Typography>
    </Box>
  </>
}

export default DestinationImage