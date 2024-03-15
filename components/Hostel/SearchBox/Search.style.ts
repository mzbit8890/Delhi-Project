import { styled, Box, Paper, Grid } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem",
  position: 'relative',
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
export const StyledSubGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "1rem",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginTop: "0rem",
  },
}));
export const StyledMainGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  border: "1px solid",
  borderRadius: "0.5rem",
  borderColor: "silver",
  backgroundColor: "#fff",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0rem",
    width: "100%",
    height: "240px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "15rem",
    width: "22rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "42rem",
    height: "4rem",
  },
  [theme.breakpoints.up("lg")]: {
    height: "59px",
    width: "762px",
    padding: "0rem",
    marginTop: "-0.5rem",
  },
}));