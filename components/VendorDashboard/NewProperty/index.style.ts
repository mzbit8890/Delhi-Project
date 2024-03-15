import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  styled,
  TextField,
} from "@mui/material";

export const ImageStyle: React.CSSProperties = {};

export const StyledConatiner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5rem",
  marginBottom: "5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "60rem",
  marginBottom: "2rem",

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  display: "flex",
  width: "15rem",
  margin: 20,
  fontFamily: "poppins,sans-serif",
  fontWeight: "bold",
}));
