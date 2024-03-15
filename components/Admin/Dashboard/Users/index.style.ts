import { Box, Typography, styled } from "@mui/material";

export const StyledText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
  textAlign: "center",
  fontWeight: "lighter",
  fontSize: "1.25rem",
}));
