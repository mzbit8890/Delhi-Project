import { Box, Typography, styled } from "@mui/material";

export const StyledText = styled(Typography)(({ theme }) => ({
  width: "20rem",
  fontWeight: "lighter",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
