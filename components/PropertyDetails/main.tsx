import { Box, useMediaQuery, useTheme } from "@mui/material";

import RoomComponent from "./Rooms/RoomComponent";

import FacilitiesComponent from "./Facilities";

import AmenitiesComponent from "./AmenitiesComponent";
import Goals from "./Goals";
import Policies from "./Policies";
import Footer from "@/components/Footer/Footer";
import ImageSwiper from "./Mobile/ImageSwiper";
import IconSwiper from "./Mobile/IconSwiper";
import NavigationComponent from "./Navigation";
import Navbar from "../Navbar/Navbar";

import dynamic from "next/dynamic";

const TopComponentPropertyDetails = dynamic(() => import("./TopComponent"), {
  ssr: false,
});

const MainComponentMobile = dynamic(() => import("./Mobile/main"), {
  ssr: false,
});

const HamburgerMenu = dynamic(() => import("../AppBar/Hamburger"), {
  ssr: false,
});

export default function MainPropertyDetailsComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isBig = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "6.5rem" }}>
        {isBig || isTab ? (
          <>
            <Box mx={5}>
              <TopComponentPropertyDetails />
            </Box>
            <div id="Ameities">
              <AmenitiesComponent />
            </div>
          </>
        ) : (
          <>
            <ImageSwiper />
            <IconSwiper />
          </>
        )}
      </div>
      <div id="">
        <RoomComponent />
        {!isBig ? <NavigationComponent /> : ""}
      </div>
      <div id="">
        <Goals />
      </div>
      <div id="">
        <Policies />
      </div>
      <div id="facilities-section">
        {/* <FacilitiesComponent /> */}
        <Footer />
      </div>
    </>
  );
}
