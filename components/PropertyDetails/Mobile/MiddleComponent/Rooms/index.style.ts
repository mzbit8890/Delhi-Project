import { styled, Box, Paper } from "@mui/material";

export const RoomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const RoomImageBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const PriceBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  margin: "1rem 1rem 1rem 0.5rem",
  backgroundColor: "#fff",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "2.5rem",
  marginTop: "2rem",
  backgroundColor: "#3D66F8",
  borderRadius: "0.7rem",
  width: "5.5rem",
  padding: "0.2rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
