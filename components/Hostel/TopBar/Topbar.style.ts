import { styled, Box } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    height: "70px",
    justifyContent: "start",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
