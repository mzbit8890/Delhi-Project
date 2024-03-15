import { styled, Box, Typography } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#F9E599",
  width: "65rem",
  margin: "auto",
  borderRadius: "1.875rem",
  padding: "5rem 3rem 5rem 3rem",
  marginBottom: "5rem",

  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column",
    padding: "4rem",
    width: "11rem",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem 1.5rem 2rem 1.5rem",
    width: "18rem",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    width: "35rem",
  },

  [theme.breakpoints.up("md")]: {
    display: "display",
    flexDirection: "row",
    borderRadius: "1.875rem",
    padding: "6rem",
    width: "40rem",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F9E599",
    width: "65rem",
    margin: "auto",
    borderRadius: "1.875rem",
    padding: "5rem 3rem 5rem 3rem",
    marginBottom: "5rem",
  },
}));

export const StyledBoxLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {
    marginLeft: "0rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "0rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0rem",
  },
}));

export const StyledBoxRight = styled(Box)(({ theme }) => ({
  backgroundColor: "#EFA71C",
  padding: "2rem 10rem 2rem 10rem",
  borderRadius: "1rem",
  width: "auto",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EFA71C",
    padding: "5rem 5rem 5rem 5rem",
    maxHeight: "5rem",
    maxWidth: "10rem",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EFA71C",
    padding: "2rem 2rem 2rem 2rem",
    maxHeight: "5rem",
    maxWidth: "10rem",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EFA71C",
    padding: "8rem",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EFA71C",
    padding: "10rem",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  width: "120%",
  color: "#EFA71C",
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "70%",
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    width: "90%",
    color: "#EFA71C",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "70%",
    color: "#EFA71C",
      fontSize: "2.8rem",
    fontWeight: 700,
  },
}));

export const StyledSubText = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  mt: "1rem",
  fontFamily: "var(--font-poppins)",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    fontSize: "0.7rem",
    paddingTop: "0.3rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "1rem",
    fontWeight: 300,
    width: "80%",
    fontSize: "0.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    width: "90%",
    fontWeight: 300,
    marginBottom: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "85%",
    fontWeight: 200,
    fontSize: "1.85rem",
  },
}));
