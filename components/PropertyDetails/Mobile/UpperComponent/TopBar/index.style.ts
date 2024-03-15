import { Box, Paper, styled, Typography } from "@mui/material";
import "@fontsource/raleway/700.css";
export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "start",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const TOPPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#fff",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "20rem",
  padding: "1.5rem",

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
