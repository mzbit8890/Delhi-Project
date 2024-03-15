import Footer from "../Footer/Footer";
import DestinationImage from "./Destination/DestinationImage";
import Filter from "./Filter/Filter";
import Goals from "./Goals/Goals";
import TopBarListProperties from "./TopBar/Topbar";
import Info from "./Info/Info";

import { Box, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";

import FeaturedProperties from "./FeaturedProperty/FeaturedProperties";
import dynamic from "next/dynamic";

const PropertyPage = dynamic(() => import("./Properties"), {
  ssr: false,
});

export default function PropertyMainComponenet() {
  return (
    <>
      <Navbar />
      <div style={{ overflow: "hidden", marginTop: "5.8rem", padding: 0 }}>
        <DestinationImage />
        <TopBarListProperties />
        <Info />
        <Box mx={{ xs: 2, lg: 6 }}>
          <Filter />
        </Box>
        <Grid mx={{ xs: 0, lg: 2 }} container>
          <Grid item xs={12} lg={8}>
            <PropertyPage />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Goals />
          </Grid>
        </Grid>

        <Footer />
      </div>
    </>
  );
}
