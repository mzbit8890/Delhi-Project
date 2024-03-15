import { styled, Box, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    height: "10rem",
    marginLeft: "3rem",
    padding: "3rem 2rem 3rem 1rem",
    width: "15rem",
    marginTop: "5rem",
    marginBottom: "1rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {
    padding: "1rem",
    borderRadius: "1rem",
    marginLeft: "2rem",
    marginTop: "1rem",
    marginBottom: "-15rem",
  },
  [theme.breakpoints.up("lg")]: {},
}));
