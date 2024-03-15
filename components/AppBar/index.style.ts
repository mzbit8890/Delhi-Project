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
} from "@mui/material";
import styled from "@mui/material/styles/styled";
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  zIndex: 1,
  fontWeight: "lighter",
  position: "relative",
  width: "100rem",
  marginBottom: "-5rem",
  [theme.breakpoints.up("md")]: {
    width: "60rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100rem",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#3D66F8",
  fontSize: "30px",
  marginLeft: "2rem",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledList = styled(List)(({ theme }) => ({
  fontWeight: 400,
  display: "flex",
  marginLeft: "2rem",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {
    marginLeft: "-2rem",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginLeft: "2rem",
  },
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "2rem",
  textAlign: "center",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#3D66F8",
    color: "#fff",
    borderRadius: "2rem",
  },

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
