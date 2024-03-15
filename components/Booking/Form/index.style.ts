import { CheckBox } from "@mui/icons-material";
import { Box, Paper, TextField, Typography, styled } from "@mui/material";

export const StyledMainPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  borderRadius: "1rem",
  border: '1px solid lightgrey',
  [theme.breakpoints.down("sm")]: { padding: "1rem",},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'space-between',
  marginTop: "2.5rem",
  marginBottom: '30px',
  [theme.breakpoints.down("sm")]: {flexDirection: "column", alignItems: "start",},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: "var(--font-raleway)",
  [theme.breakpoints.down("sm")]: {marginBottom: '15px'},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const TextFieldComponent = styled(TextField)(({ theme }) => ({
  borderRadius: '25px',
  marginLeft: "3rem",
  backgroundColor: "#fff",
  width: "85%",
  [theme.breakpoints.down("sm")]: {marginLeft: "0rem", width: "100%"},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const CheckboxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const LabelTypography = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  color: '#818181',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));