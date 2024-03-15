import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import animationData from "./Animation - 1706968601525.json";
import Lottie from "react-lottie";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import html2canvas from "html2canvas";
import { AnimatedBorderButton } from "./index.style";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const captureScreenshot = () => {
  setTimeout(() => {
    html2canvas(document.body).then(function (canvas) {
      const screenshotDataUrl = canvas.toDataURL();
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = screenshotDataUrl;
      link.click();
    });
  }, 200);
};

export const BookingSuccess = () => {
  const [captureSS, setCaptureSS] = useState(false);
  useEffect(() => {
    if (captureSS) {
      captureScreenshot();
    }
  }, [captureSS]);
  const bookingDetails = useSelector(
    (state: any) => state.bookingStatus.details
  );
  const checkin = useSelector((state: any) => state.bookingDates.checkIn);
  const checkout = useSelector((state: any) => state.bookingDates.checkOut);
  console.log(bookingDetails);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogBox = async () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const router = useRouter();
  const RefLogin = () => {
    router.push("/user/sign-in");
  };
  const RefHome = () => {
    router.push("/");
  };

  return (
    <Box
      className={`${poppins.variable}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        marginTop: "5rem",
      }}
    >
      <Lottie
        options={defaultOptions}
        height={25 * 16}
        width={20 * 16}
        style={{
          marginBottom: "10px",
          borderRadius: "1rem",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography
          sx={{ fontFamily: "var(--font-poppins)" }}
          variant="body2"
          color="textSecondary"
        >
          Hurray! Booking Completed.
        </Typography>
        <AnimatedBorderButton
          variant="text"
          onClick={() => {
            handleDialogBox();
            setCaptureSS(true);
          }}
        >
          View Details
        </AnimatedBorderButton>
      </Box>
      <Dialog open={isDialogOpen}>
        <DialogTitle sx={{ fontFamily: "var(--font-poppins)" }}>
          Booking Details
        </DialogTitle>
        <DialogContent>
          {!!bookingDetails && (
            <Box className={`${poppins.variable}`}>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Order ID:{" "}
                <span style={{ fontWeight: 800 }}>
                  {bookingDetails?.orderId}{" "}
                </span>
              </Typography>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Username:{" "}
                <span style={{ fontWeight: 800, marginLeft: "1rem" }}>
                  {bookingDetails?.username}{" "}
                </span>
              </Typography>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Booked Rooms:
                <span style={{ fontWeight: 800, marginLeft: "1rem" }}>
                  {bookingDetails?.BookedRooms[0]?.RoomName}
                </span>
              </Typography>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Property Name :
                <span style={{ fontWeight: 800, marginLeft: "1rem" }}>
                  {bookingDetails?.BookedRooms[0]?.PropertyName}
                </span>
              </Typography>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Check In :
                <span style={{ fontWeight: 800, marginLeft: "1rem" }}>
                  {checkin}
                </span>
              </Typography>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                Check Out :
                <span style={{ fontWeight: 800, marginLeft: "1rem" }}>
                  {checkout}
                </span>
              </Typography>
            </Box>
          )}
          <Typography
            sx={{
              mt: "2rem",
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: "0.7rem",
            }}
          >
            Note: A screen shot of these details are stored on your device.
            Please use that for futher references.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ fontFamily: "var(--font-poppins)" }}
            onClick={handleDialogBox}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ display: "flex", flexDirection: "row", mt: "2rem" }}>
        <Button
          sx={{
            fontFamily: "var(--font-poppins)",
            borderRadius: "0.5rem",
            mr: "1rem",
            backgroundColor: "#fff",
            p: "0.5rem",
            border: "1px solid #3D66F8",
          }}
          onClick={RefHome}
        >
          Back to Home
        </Button>
        <Button
          color="primary"
          sx={{
            fontFamily: "var(--font-poppins)",
            borderRadius: "0.5rem",
            p: "0.5rem",
            backgroundColor: "#3D66F8",
            color: "#fff",
          }}
          onClick={RefLogin}
        >
          Go To Dashboard
        </Button>
      </Box>
    </Box>
  );
};
