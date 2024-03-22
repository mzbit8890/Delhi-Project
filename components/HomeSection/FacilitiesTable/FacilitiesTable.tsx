import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { HeadingTypography } from '../index.style'

import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ColumnTitles, RowTitles, SubHeadingTypography } from './FacilitiesTable.style';
import tick from "./tick.png"
import cross from "./cross.png"
import Image from 'next/image';


  
function createData(
  name: string,
  icon1: any,
  icon2: any,
  icon3: any,
) {
  return { name, icon2, icon3 };
}

const rows = [
  createData('Community & networking', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('Fully furnished', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('Streaming services', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('Work space', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('WiFi', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('Cleaning', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('Laundry services *', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('Pool *', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
  createData('Gym *', <DoneOutlinedIcon color='success' />, <CloseOutlinedIcon color='error' />, <CloseOutlinedIcon color='error' />),
];


const FacilitiesTable = () => {
  return <>
    <Box my={15}>
      
      <HeadingTypography variant='h3'style={{fontWeight:"bold"}} className='text-[#141414]/90 jui:mt-0 font-bold'>What is included</HeadingTypography>
      <SubHeadingTypography mb={3} variant='body1'>Save up to 40% compared to living in a studio</SubHeadingTypography>

      <TableContainer component={Paper}>
        <Table className="border-0" sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow className='cfutft:text-[16px] text-[10px] !important'>
              <TableCell></TableCell>
              <TableCell aria-hidden align="center"><ColumnTitles variant='h6' className='cfutft:text-[16px] text-[10px] !important'>Hostel Bird</ColumnTitles></TableCell>
              <TableCell align="center"><ColumnTitles variant='h6'className='cfutft:text-[16px] text-[10px]' >Studio</ColumnTitles></TableCell>
              <TableCell align="center"><ColumnTitles variant='h6' className='cfutft:text-[16px] text-[10px]'>Flat share</ColumnTitles></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ ' &:last-child ': { border: 0 } , }}
                
              >

                <TableCell component="th" scope="row"><RowTitles variant='body1' className='cfutft:text-[10px] text-[5px]'>{row.name}</RowTitles></TableCell>


                <TableCell align="center" className='rounded-lg border '><Typography variant='body1' className=''><div className='flex justify-center'><Image src={tick} alt="" className='w-[14px] h-[14px] sm:h-[16px] sm:w-[16px]' /></div></Typography></TableCell>




                <TableCell align="center"><Typography variant='body1'><div className='flex justify-center'><Image src={cross} alt="" className='w-[14px] h-[14px] sm:h-[16px] sm:w-[16px]' /></div></Typography></TableCell>
                <TableCell align="center"><Typography variant='body1'><div className='flex justify-center'><Image src={cross} alt="" className='w-[14px] h-[14px] sm:h-[16px] sm:w-[16px]' /></div></Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SubHeadingTypography mt={5} variant='body2'>* Amenities may vary depending on the coliving space</SubHeadingTypography>
    </Box>
  </>
}

export default FacilitiesTable






