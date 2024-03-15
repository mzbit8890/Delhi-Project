import React from "react";
import {
  Box,
  Typography,
  Stack,
  CircularProgress,
  Divider,
} from "@mui/material";
import { MainBox, Title1Typography } from "./index.style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Raleway } from "next/font/google";
import Image from "next/image";
import Hbicon from '@/assests/HbIcon.png'
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const TopBox: React.FC = () => {
  return (
    <MainBox mb={3} className={`${raleway.variable}`}>
      <Title1Typography my={5} variant="h4"><Image alt="logo" src={Hbicon} width={50} height={50}/>Hostel Bird</Title1Typography>
      <Stack direction="row" spacing={2} alignItems="center" sx={{display: {xs: 'none', lg: 'flex'}}}>
      <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              border: "5px solid #F65656",
            }}
          >
            <Typography
              sx={{ color: "#F65656", fontSize: '20px'}}
            >
              1
            </Typography>
          </Box>
        <Box flexGrow={1}>
          <Divider
            sx={{ backgroundColor: "#000", border: "1px solid #F65656" }}
            flexItem
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              border: "5px solid #F65656",
            }}
          >
            <Typography
              sx={{ color: "#F65656", fontSize: '20px'}}
            >
              2
            </Typography>
          </Box>
          {/* <Typography sx={{ ml: "0.5rem", fontFamily: "var(--font-raleway)" }}>
            Guest Details
          </Typography> */}
        </Box>
        <Box flexGrow={1}>
          <Divider
            sx={{ backgroundColor: "#000", border: "1px solid #F65656" }}
            flexItem
          />
        </Box>
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              border: "5px solid #F65656",
            }}
          >
            <Typography
              sx={{ color: "#F65656", fontSize: '20px'}}
            >
              3
            </Typography>
          </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: "2rem",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <ArrowBackIcon
          sx={{ cursor: "pointer", color: '#F65656' }}
          onClick={() => window.history.back()}
        />
        <Typography
          sx={{
            ml: "1rem",
            fontWeight: 700,
            fontSize: "29.4px",
            fontFamily: "var(--font-raleway)",
          }}
        >
          Confirm your Booking
        </Typography>
      </Box>
    </MainBox>
  );
};

export default TopBox;
