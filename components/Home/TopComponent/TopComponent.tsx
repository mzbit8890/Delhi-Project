import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  ImageStyleMobile,
  ImageStyleTab,
  ImageStyleLarge,
  StyledBox,
  StyledImageBox,
  StyledTitle,
} from "./index.style";
import img1 from "@/assests/PeopleImg.png";
import Image from "next/image";
import HostelFinderSearchBox from "./search/search";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function TopComponent() {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:959px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width:960px) and (max-width:1199px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  return (
    <StyledBox>
      <StyledImageBox>
        <StyledTitle
          className={`${poppins.variable}`}
          sx={{ fontFamily: "var(--font-poppins)" }}
        >
          Find Your Vibe Make Your Tribe
        </StyledTitle>
        <Image
          src={img1}
          alt="peopleImage.png"
          priority
          style={
            isMobile
              ? ImageStyleMobile
              : isMediumScreen
              ? ImageStyleTab
              : ImageStyleLarge
          }
        />
        <HostelFinderSearchBox />
      </StyledImageBox>
    </StyledBox>
  );
}
