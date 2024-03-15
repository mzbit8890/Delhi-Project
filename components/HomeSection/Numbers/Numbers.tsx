
import { Box, Divider, Grid, Typography } from '@mui/material'
import { DescriptionTypography, IconBox, IconTitleTypography, NumberBox, NumberTypography, WrapperBox } from './Numbers.style';
import { HeadingTypography } from '../index.style';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const data1 = [
  { number: 800, text: 'Communities' }, { number: 20000, text: 'Monthly visitors' },
  { number: 128, text: 'Reviews' }, { number: 25000, text: 'Members' },
  { number: 150, text: 'Destinations' }, { number: 30, text: 'Countries' },
  { number: 16000, text: 'Rooms' }, { number: 1200, text: 'Monthly Bookings' }
]
const data2 = [
  { icon: <PaidOutlinedIcon fontSize='large' sx={{ fontSize: '3rem' }} />, title: 'No booking fees', subtitle: 'Never pay a booking fee. More money for living instead.' },
  { icon: <LanguageIcon fontSize='large' sx={{ fontSize: '3rem' }} />, title: '100% online process', subtitle: 'Book rooms, chat with hosts, and pay rent online.' },
  // {icon: <CancelOutlinedIcon fontSize='large' sx={{fontSize: '3rem'}}/>, title: 'Easy cancellation', subtitle: 'Cancel your stay at any time before moving in.'},
  { icon: <LockOutlinedIcon fontSize='large' sx={{ fontSize: '3rem' }} />, title: 'Payment protection', subtitle: 'We securely collect your rent after you move in.' }
]

const Numbers = () => {
  return <>
    <Box my={{ xs: 5, lg: 10 }}>
      <HeadingTypography variant='h3' textAlign="center" className='text-[#141414]/90'>Your next coliving home</HeadingTypography>
      <Grid mt={{ xs: 0, lg: 5 }} mb={6} container rowSpacing={8}>
        {data1.map((item, index) => (
          <Grid key={item.number} mb={0} item xs={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <NumberBox py={2}>
              <svg width="84" height="64" viewBox="0 0 84 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.6763 16.0996C-0.571874 12.2056 1.80101 7.26958 6.2462 6.59329L45.1352 0.676749C46.8842 0.410653 48.6652 0.882053 50.0536 1.97855L80.612 26.1126C84.1537 28.9096 83.7554 34.398 79.847 36.6545L35.6499 62.1717C32.5956 63.9351 28.69 62.8886 26.9265 59.8343L1.6763 16.0996Z" fill="#F65656" fill-opacity="0.1" />
              </svg>
              <NumberTypography variant='h4' textAlign="center">{item.number}</NumberTypography>
              <DescriptionTypography variant='h6' textAlign="center">{item.text}</DescriptionTypography>
            </NumberBox>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid px={2} mt={1} container spacing={7}>
        {data2.map((item) => (
          <Grid key={item.title} item xs={12} lg={4}>
            <WrapperBox >
              <IconBox px={1.5} py={1.5} mr={3}>{item.icon}</IconBox>
              <Box>
                <IconTitleTypography variant='h4'>{item.title}</IconTitleTypography>
                <Typography sx={{ color: '#636363' }}>{item.subtitle}</Typography>
              </Box>
            </WrapperBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
}

export default Numbers