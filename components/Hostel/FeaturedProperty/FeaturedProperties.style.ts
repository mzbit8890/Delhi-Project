import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  styled,
  TextField,
  Paper,
} from "@mui/material";
import "@fontsource/raleway";
import "@fontsource/dm-sans";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "4rem",
  borderRadius: "1rem",
  padding: "1rem",
  marginTop: "1rem",
  width: "59rem",
  zIndex: 0,

  [theme.breakpoints.down("sm")]: {
    marginLeft: "1.5rem",
    display: "flex",
    flexDirection: "column",
    width: "18rem",
    padding: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: "10rem",
    alignItem: "center",
    justifyContent: "center",
    width: "28rem",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "1rem",
    alignItem: "flex-start",
    justifyContent: "flex-start",
    width: "50rem",
    backgroundColor: "#fff",
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "4rem",
    width: "59rem",
    height: "14rem",
  },
}));
export const ImageStyle: React.CSSProperties = {
  width: "25rem",
  height: "20rem",
  borderRadius: "1rem",
};

export const ImageStyle2: React.CSSProperties = {
  width: "2rem",
  height: "1.5rem",
  padding: "0.2rem",
};

export const ImageStyle3: React.CSSProperties = {
  width: "7rem",
  height: "7rem",
  borderRadius: "0.5rem",
};
export const PropertyInnerStyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: "1rem",

  [theme.breakpoints.down("sm")]: {
    width: "16rem",
    padding: "1rem",
    marginBottom: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "20rem",
    margin: "0rem 10rem 1rem 1rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "45rem",
    padding: "1rem",
    margin: "0rem 3rem 1rem 0rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "30rem",
  },
}));

// export const PropertyBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.up("sm")]: {},
//   [theme.breakpoints.up("md")]: {},
//   [theme.breakpoints.up("lg")]: {},
// }));
