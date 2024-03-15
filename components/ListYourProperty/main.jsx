'use client'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import TableComponent from './Table/Table'
import TopSection from './TopSection/TopSection'
import { Box } from '@mui/material'
import BottomSection from './BottomSection/BottomSection'

const ListYourPropertyComponent = () => {
  return <>
    <Navbar/>
    <Box mx={8} mt={15}>
      <TopSection />
    </Box>
    <Box my={10} mx={8}>
      <TableComponent />
    </Box>
    <BottomSection />
    <Footer />
  </>
}

export default ListYourPropertyComponent