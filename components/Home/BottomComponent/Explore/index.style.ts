import { styled, Box, Typography, Paper } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#EB575733",
  width: "65rem",
  margin: "auto",
  marginTop: "5rem",
  borderRadius: "1rem",
  padding: "5rem 3rem 5rem 3rem",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 1rem 1rem 1rem",
    width: "18rem",
    marginTop: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    width: "35rem",
  },
  [theme.breakpoints.up("md")]: {
    borderRadius: "1.875rem",
    padding: "2rem 7rem 8rem 7rem",
    width: "40rem",
    marginBottom: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "65rem",
    margin: "auto",
    borderRadius: "1.875rem",
    padding: "5rem 3rem 5rem 3rem",
    marginBottom: "5rem",
  },
}));

export const StyledBoxRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  width: "40rem",
  height: "25rem",
  [theme.breakpoints.down("xs")]: {
    width: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "12rem",
    overflow: "hidden",
  },
  [theme.breakpoints.up("sm")]: {
    marginRight:"-2.5rem",
    width: "25rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "7rem",
    width: "30rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "3rem",
    width: "30rem",
  },
}));

export const StyledBoxLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "3rem",
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#EB5757",
  width: "90%",

  [theme.breakpoints.down("sm")]: {
    width: "120%",
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "120%",
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.7rem",
    width: "90%",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    fontWeight: 700,
  },
}));
