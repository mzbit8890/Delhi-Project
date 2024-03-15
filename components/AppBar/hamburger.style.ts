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
  justifyContent: "space-around",
  zIndex: 7,
  marginRight: "0.5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledLeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: -10,
  left: 0,
  zIndex: 1,

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const UserBox = styled(Box)(({ theme }) => ({
  zIndex: 99,
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-5rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginRight: "3rem",
    marginLeft: "auto",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
