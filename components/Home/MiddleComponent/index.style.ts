import { Box, Grid, Typography, styled } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  //padding: "2rem",

  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem",
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    //marginLeft: "2rem",
  },
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: "3.125rem",
  fontWeight: "bolder",
  marginBottom: "1rem",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  textAlign: "right",
  color: "rgba(255, 255, 255, 0.7)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    marginRight: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    marginTop: "1rem",
    marginRight: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "-0.5rem",
    marginRight: "1rem",
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
}));
export const StyledSubText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  textAlign: "center",

  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
}));

export const StyledBoxText = styled(Box)(({ theme }) => ({
  zIndex: 1,
  overflow: "hidden",
  paddingBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-6rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "-6rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "-6rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "-6rem",
  },
}));
