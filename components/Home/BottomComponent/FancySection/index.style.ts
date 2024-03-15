import { styled, Box, Typography, Paper } from "@mui/material";
import BackgroundImage from "@/assests/IMAGE.png";
export const StyledLeftBox = styled(Box)(({ theme }) => ({
  width: "50%",
  backgroundColor: "#FF5146",
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  alignItems: "left",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    margin: "auto",
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: "5rem",
    marginLeft: "-0.025rem",
    width: "100rem",
    height: "20rem",
    padding: "2rem",
  },
}));

export const StyledBoxUpperRight = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: "#3D66F8",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  height: "40vh",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-0.025rem",
    width: "100rem",
    padding: "2rem",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "-0.025rem",
    width: "100rem",
    padding: "2rem",
  },
}));
export const StyledBoxBottomRight = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: "#ffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  height: "40vh",
  [theme.breakpoints.down("sm")]: {
    width: "100rem",
    padding: "2rem",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "-0.025rem",
    width: "100rem",
    padding: "2rem",
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  margin: "1rem 3rem 0 3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));
export const StyledSubText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  margin: "0 3rem",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
}));

export const StyledBottonText = styled(Typography)(({ theme }) => ({
  diplay: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bolder",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    margin: "3rem",
    width: "30%",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
    marginTop: "5rem",
    width: "40%",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
    marginTop: "8rem",
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
    marginTop: "10rem",
  },
}));

export const StyledBoxBottomImage = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  backgroundImage: `url(${BackgroundImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",

  [theme.breakpoints.down("sm")]: {
    height: "10rem",
  },
  [theme.breakpoints.up("sm")]: {
    height: "18rem",
  },
  [theme.breakpoints.up("md")]: {
    height: "25rem",
  },
  [theme.breakpoints.up("lg")]: { height: "30rem" },
}));
