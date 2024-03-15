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

export const StyledContainerBoxForMain = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2rem",
  width: "60rem",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  marginBottom: "5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "50rem",
  height: "5rem",
  marginBottom: "1rem",
  border: "1px solid",
  borderColor: "lightgrey",
  borderRadius: "0.7rem",
  fontSize: "1.5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const StyledNameText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const StyledDesText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  textAlign: "center",
  fontWeight: "medium",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
