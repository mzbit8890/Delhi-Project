import { styled, Box, Typography, Paper } from "@mui/material";

export const RatingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  borderRadius: "0.3rem",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  margin: "1rem 0rem 1rem 0rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  margin: "1rem 0rem 1rem 1rem",
  overflow: "clip",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const PropertyNameText = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "18px",
  fontWeight: 700,
  fontFamily: "Raleway",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const DetailsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "start",
  margin: "1rem",
  overflow: "clip",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const DesprictionText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  marginTop: "1rem",
  margin: "2rem 0.5re 1rem 0.5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    margin: "1rem 0rem 1rem 0rem",
  },
  [theme.breakpoints.up("sm")]: {
    margin: "0.5rem 0rem 0.5rem 0.1rem",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginTop: "1rem",
  },
}));

export const IconText = styled(Typography)(({ theme }) => ({
  fontFamily: "DM Sans",
  color: "#3D66F8",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.62rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
