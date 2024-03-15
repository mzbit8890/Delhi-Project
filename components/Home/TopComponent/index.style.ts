import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  styled,
  TextField,
} from "@mui/material";
import BackgroundImage from "@/assests/HomeBackground.jpg";
export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BackgroundImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  color: "white",
  position: "relative",
  zIndex: 0,

  [theme.breakpoints.down("sm")]: {
    marginTop: "-2rem",
    height: "45rem",
  },
  [theme.breakpoints.up("sm")]: {
    overflow: "hidden",
    marginTop: "0rem",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    overflow: "visible",
    marginTop: "-5rem",
  },
}));

export const ImageStyleLarge: React.CSSProperties = {
  overflow: "hidden",
  marginTop: "-28rem",
  objectFit: "contain",
  transform: "scale(1)",
};
export const ImageStyleMobile: React.CSSProperties = {
  overflow: "hidden",
  marginTop: "-23rem",
  objectFit: "contain",
  transform: "scale(0.60)",
  marginBottom: "-12rem",
};
export const ImageStyleTab: React.CSSProperties = {
  overflow: "hidden",
  marginTop: "-28rem",
  objectFit: "contain",
  transform: "scale(0.9)",
};

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: "#3D66F8",
  textAlign: "center",
  fontWeight: "bolder",
  zIndex: 1,
  [theme.breakpoints.up("xs")]: {
    overflow: "hidden",
    width: "75%",
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    overflow: "hidden",
    width: "95%",
    marginBottom: "-2rem",
    marginTop: "-2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.5rem",
    width: "85%",
    marginTop: "4rem",
    marginBottom: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "65%",
    fontSize: "4.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "55%",
    fontSize: "81px",
    marginTop: "7rem",
    marginBottom: "1rem",
  },
}));

export const StyledImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 1,
  paddingBottom: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    marginTop: "10rem",
    marginBottom: "25rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginBottom: "-3rem",
  },
}));
