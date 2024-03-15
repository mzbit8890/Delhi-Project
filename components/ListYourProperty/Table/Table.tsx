import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material'

import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const TableComponent = () => {
  return <Box>
        <Typography my={5} textAlign="center" variant='h3'>What makes <span style={{color: '#F65656'}}>Hostelbird</span> the best choice for hosts and owners?</Typography>
      <Box>
        <Grid mb={4} container>
            <Grid item lg={4} sx={{display: 'flex', justifyContent: 'center'}}></Grid>
            <Grid item lg={4} sx={{display: 'flex', justifyContent: 'center'}}><Typography variant='h6'>Hostel Bird</Typography></Grid>
            <Grid item lg={4} sx={{display: 'flex', justifyContent: 'center'}}><Typography variant='h6'>Competitors</Typography></Grid>
        </Grid>
        {[1,2,3,4].map((item, index) => (
            <Grid key={index} container>
            <Grid p={2} item lg={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid lightgrey'}}>
                <Box>
                <Typography mb={2} variant='h5'>Exclusive India-Based Platform</Typography>
                <Typography variant='body1'>Hostelbird is the only platform in Indiadedicated exclusively to hostels, providing a specialized solution tailored tothe unique needs of hostel owners and travelers in the Indian market. Ourlocalized approach ensures that hosts can effectively target and attract guestswithin the region, maximizing their property&apos;s visibility and bookings</Typography>
                </Box>
            </Grid>
            <Grid p={2} item lg={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid lightgrey'}}><DoneOutlinedIcon sx={{fontSize: '50px', color: 'green'}}/></Grid>
            <Grid p={2} item lg={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid lightgrey'}}><CloseOutlinedIcon sx={{fontSize: '50px', color: 'red'}}/></Grid>
        </Grid>
        ))}
      </Box>
  </Box>
}

export default TableComponent