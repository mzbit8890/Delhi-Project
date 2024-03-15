import { Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
export const MainBox = styled(Box)(({ theme }) => ({
  overflow: "clip",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-5rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {
    marginTop: "-10rem",
  },
  [theme.breakpoints.up("lg")]: {},
}));
