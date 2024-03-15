import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

const BottomSection = () => {
  return <>
      <Typography mx={10} mb={10} variant='h5' textAlign="center">With Hostelbird&apos;s exclusive focus on India-basedhostels and a range of unique features designed to enhance cultural engagement,community building, and guest experiences, we are the preferred choice forhostel owners and travelers seeking an authentic and enriching stay experiencein India.</Typography>
      <Box py={3} sx={{background: '#F656561F', display: 'flex', justifyContent: 'center', gap: 5, alignItems: 'center'}}>
        <Typography variant='h3'>Ready To Start</Typography>
        <Link href="/listyourproperty/register-form">
          <Button sx={{padding: '15px 55px', borderRadius: '50px', fontSize: '25px', backgroundColor: '#F65656'}} variant="contained">Sign Up</Button>
        </Link>
      </Box>
  </>
}

export default BottomSection