import { Box, Typography, styled } from "@mui/material";

export const ImageStyle: React.CSSProperties = {
  width: "35rem",
  height: "35rem",
  borderRadius: "1.5rem",
};

export const StyledText = styled(Typography)(({ theme }) => ({
  marginTop: "0.2rem",

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
