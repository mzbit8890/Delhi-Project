import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { HeadingTypography } from '../index.style'

import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ColumnTitles, RowTitles, SubHeadingTypography } from './FacilitiesTable.style';

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
      <HeadingTypography variant='h3' className='text-[#141414]/90'>What is included</HeadingTypography>
      <SubHeadingTypography mb={3} variant='body1'>Save up to 40% compared to living in a studio</SubHeadingTypography>

      <TableContainer component={Paper}>
        <Table className="border-0" sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell aria-hidden align="center"><ColumnTitles variant='h6'>Hostel Bird</ColumnTitles></TableCell>
              <TableCell align="center"><ColumnTitles variant='h6'>Studio</ColumnTitles></TableCell>
              <TableCell align="center"><ColumnTitles variant='h6'>Flat share</ColumnTitles></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ ' &:last-child ': { border: 0 } }}
              >

                <TableCell component="th" scope="row"><RowTitles variant='body1'>{row.name}</RowTitles></TableCell>


                <TableCell align="center" className='rounded-lg border '><Typography variant='body1' className=''><div className='flex justify-center'><img src="https://s3-alpha-sig.figma.com/img/5b27/4863/a7c30f04efc68f450426816ad6d19240?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LFwLnxY9CNVkGmleUJ9dPcsvgywmQ6SUucTHfQUZ5ICdpd3yZ~p5RV02kvoAGQiM6kQBxmqp3CtkQBfF9uEQeLj~DBWR9x2aJT~dpbZcn~H5vCebefiVVaMcwyVWAC1SxqXeYJ~ppXxbi4ci7ksz1xGaZcheff0jrOmDnYhHZZIoZRb-~xiVqny9d4tjdcTBkHbhl7J5JweDNRkyTXCrVsKqzlOt1~S0ecXBrAPfNF-KEl-SGr9pPp2QTtNh7msQAC4JMt2wRWETqAalfd3GkypoL92h62zi71t159XoFzS3vdxQMlGBZeyYTi8IicxvD6c4qiKWmU3vXiyzdNJdiA__" alt="" className=' h-[20px] w-[20px]' /></div></Typography></TableCell>




                <TableCell align="center"><Typography variant='body1'><div className='flex justify-center'><img src="https://s3-alpha-sig.figma.com/img/b925/2703/3805a6bb0fb1944d264421ac689d1760?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XZoN66gtpbBCsfDA9P5WlooUS18TVKOsX8w9gqO7yaW92bQN8Eow5qXRzI0FgdjK9et7xxtbSJfzS40veCEVtvrKstpUsZrTjvsCKCQr8aqFb0iq2yvw~8jxRr2SKQHKH3WHDzojJjEM0W-ZgUJFom6s4dmORaJPCyKbp~s2LI~LvliR2OYPNbXatbUigGY2KP9HLlhzDe4Jx3w~MbAwovLWiE2vlvSd-t~z8aZ-36TFb8cNlgpJfSayLMszhaPsOaJ6Q5HZ2h7R0zSWFeFajR3OqdCHTd5vhUvIJ58C7YTrN2DigATN7jTwt87AfZEGg5XVFFexOwLdl9T2iPT7-Q__" alt="" className=' h-[16px] w-[16px]' /></div></Typography></TableCell>
                <TableCell align="center"><Typography variant='body1'><div className='flex justify-center'><img src="https://s3-alpha-sig.figma.com/img/b925/2703/3805a6bb0fb1944d264421ac689d1760?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XZoN66gtpbBCsfDA9P5WlooUS18TVKOsX8w9gqO7yaW92bQN8Eow5qXRzI0FgdjK9et7xxtbSJfzS40veCEVtvrKstpUsZrTjvsCKCQr8aqFb0iq2yvw~8jxRr2SKQHKH3WHDzojJjEM0W-ZgUJFom6s4dmORaJPCyKbp~s2LI~LvliR2OYPNbXatbUigGY2KP9HLlhzDe4Jx3w~MbAwovLWiE2vlvSd-t~z8aZ-36TFb8cNlgpJfSayLMszhaPsOaJ6Q5HZ2h7R0zSWFeFajR3OqdCHTd5vhUvIJ58C7YTrN2DigATN7jTwt87AfZEGg5XVFFexOwLdl9T2iPT7-Q__" alt="" className=' h-[16px] w-[16px]' /></div></Typography></TableCell>
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