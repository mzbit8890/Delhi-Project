import { Box, Paper, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
  marginTop: "3rem",
  width: "60rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const Title1Typography = styled(Typography)(({ theme }) => ({
  fontWeight: 700, color: '#FE6200', 
  display: 'flex', 
  alignItems: 'center',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))
