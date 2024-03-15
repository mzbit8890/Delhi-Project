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
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
