import { styled, Box, Grid } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    // width: "20rem",
  },
  [theme.breakpoints.up("sm")]: {
    // width: "22rem",
  },
  [theme.breakpoints.up("md")]: {
    // width: "30rem",
  },
  [theme.breakpoints.up("lg")]: {
  },
}));
