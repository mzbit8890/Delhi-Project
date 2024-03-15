import { Box, Button, Typography } from "@mui/material";
import { MainBox, MainPaper } from "./index.style";
import { Raleway } from "next/font/google";
import { useDispatch } from "react-redux";
import InfoIcon from "@mui/icons-material/Info";
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { useSelector } from "react-redux";
export default function BottomBox() {
  const dispatch = useDispatch();
  const roomPrices = useSelector((state: any) => state.property?.roomPrice);

  // const totalRoomPrice = roomPrices.reduce(
  //   (acc: number, price: number) => acc + price,
  //   0
  // );
  return (
    <MainBox
      sx={{
        position: roomPrices > 0 ? "sticky" : "",
        zIndex: 99,
      }}
    >
      <MainPaper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            className={`${raleway.variable}`}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontSize: "18px",
              textAlign: "right",
              mr: "0.5rem",
              fontWeight: 700,
            }}
          >
            {roomPrices ? ` ₹ ${roomPrices}.00` : "Please Select Room"}
          </Typography>
          <Button
            className={`${raleway.variable}`}
            sx={{
              backgroundColor: "#3D66F8",
              borderRadius: "1rem",
              fontFamily: "var(--font-raleway)",
              color: "#fff",
              padding: "0.5rem 2rem 0.5rem 2rem",
            }}
          >
            Continue
          </Button>
        </Box>

        {roomPrices ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              bgcolor: "#FAFAFA",
              mb: "-1rem",
              p: "0.5rem",
              width: "25rem",
            }}
          >
            <InfoIcon sx={{ color: "#8384A1" }} />
            <Typography
              className={`${raleway.variable}`}
              sx={{
                fontFamily: "var(--font-raleway)",
                color: "#8384A1",
                fontSize: "12px",
                fontWeight: 800,
                ml: "0.5rem",
              }}
            >
              {Math.floor((roomPrices / 100) * 10)}Payable Now exclusive of
              taxes
            </Typography>
          </Box>
        ) : (
          ""
        )}
      </MainPaper>
    </MainBox>
  );
}
