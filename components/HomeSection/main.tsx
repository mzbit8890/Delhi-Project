import Navbar from "../Navbar/Navbar"
import TopSection from "./TopSection/TopSection"
import Facilities from "./Facilities/Facilities"
import Featured from "./Featured/Featured"
import Destinations from "./Destinations/Destinations"
import Numbers from "./Numbers/Numbers"
import FacilitiesTable from "./FacilitiesTable/FacilitiesTable"
import MobileDestinations from "./Destinations/MobileDestinations"
import Footer from "../Footer/Footer"
import MunazzaFacilities from "@../../../components/MunazzaComponent/MunazzaFacilities"


import useMediaQuery from '@mui/material/useMediaQuery';

import { Box } from "@mui/material"
import MunazzaFetured from "../MunazzaComponent/MunazzaFetured"
import Destination from "./Destination/Destination"
import MobileFooter from "../mobileFooter/MobileFooter"

const HomeComponent = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  return <>
    <Navbar />
    <TopSection />
    <Box mx={{xs: 1, lg: 8}}>
      {/* <Facilities /> */}
      
      <MunazzaFacilities />




      {/* <Featured /> */}
      <MunazzaFetured />
      {/* {isMobile ? (
        <MobileDestinations />
        ) : (  
        // <Destinations />
      )} */}
      <Destination />
    <Numbers /> 
    
      <FacilitiesTable /> 
    </Box>
    <div className="calen906:block hidden"><Footer /></div>
    <div className="calen906:hidden block"><MobileFooter/></div>
   
  </>
}

export default HomeComponent