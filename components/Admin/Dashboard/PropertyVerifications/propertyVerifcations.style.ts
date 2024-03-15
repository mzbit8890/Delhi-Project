import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  TextField,
  Paper,
  List,
  ListItemButton,
  Container,
  styled,
} from "@mui/material";

export const StyledContainerPV = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledPaperPV = styled(Paper)(({ theme }) => ({
  display: "flex",
  marginTop: "5rem",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledBoxForGeneral = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "2rem",
  flexDirection: "column",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledTextForGeneral = styled(Typography)(({ theme }) => ({
  fontWeight: "lighter",
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledBoxForPropertyInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "2rem",
  flexDirection: "column",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledTextForProperty = styled(Typography)(({ theme }) => ({
  marginTop: "2rem",
  fontWeight: "lighter",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledBoxForDocumnetImage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "2rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
