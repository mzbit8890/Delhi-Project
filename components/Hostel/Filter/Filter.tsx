import { Box, Button, Typography } from "@mui/material";
import TopBarListProperties from "../TopBar/Topbar";

import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Filter = () => {
  return <>
    <Box>
      <Typography my={2} variant="h4" sx={{fontWeight: 700, fontSize: {xs: '20px', lg: '40px'}}}>Properties in Delhi</Typography>
      <Box my={{xs: 1.5, md: 3}} sx={{overflow: 'scroll'}}>
      <Box
        sx={{ display: "flex", gap: {xs:1,lg:"2rem"}, width: '1000px', height: '40px'}}
      >
        <Button variant="outlined" sx={{borderRadius: '20px', color: '#F65656', borderColor: '#F65656'}}><SwapVertOutlinedIcon sx={{marginRight: '10px'}} />Sort By</Button>
        <Button variant="outlined" sx={{borderRadius: '20px', color: '#F65656', borderColor: '#F65656'}}><MeetingRoomOutlinedIcon sx={{marginRight: '10px'}} />Room Type</Button>
        <Button variant="outlined" sx={{borderRadius: '20px', color: '#F65656', borderColor: '#F65656'}}><MonetizationOnOutlinedIcon sx={{marginRight: '10px'}} />Budget</Button>
        <Button variant="outlined" sx={{borderRadius: '20px', color: '#F65656', borderColor: '#F65656'}}><GradeOutlinedIcon sx={{marginRight: '10px'}} />Rating</Button>
        <Button variant="outlined" sx={{borderRadius: '20px', color: '#F65656', borderColor: '#F65656'}}><CalendarMonthOutlinedIcon sx={{marginRight: '10px'}} />Move-in Date</Button>
      </Box>
      </Box>
    </Box>
  </>
}

export default Filter