import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  borderRadius: "0.2rem",
  borderBottom: "1px solid #D3D3D3",
  padding: "0.5rem",
  marginTop: "1rem",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const SubMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
