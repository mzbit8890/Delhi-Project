import { styled, Box, Typography, Paper } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  //width: "65rem",
  //margin: "auto",

  marginTop: "5rem",
  [theme.breakpoints.up("xs")]: {
    padding: "1rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {
    padding: "10rem",
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: "bolder",
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledText2 = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginLeft: "2rem",
  },
}));

export const StyledText3 = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginLeft: "2rem",
  },
}));
export const StyledText4 = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontWeight: 300,
  fontSize: "0.8rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginLeft: "2rem",
  },
}));
