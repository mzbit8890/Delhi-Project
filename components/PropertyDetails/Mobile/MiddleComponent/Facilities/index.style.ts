import { styled, Box } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  margin: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const MapBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "start",
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
