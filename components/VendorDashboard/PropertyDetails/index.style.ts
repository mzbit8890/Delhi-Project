import { Typography, styled } from "@mui/material";

export const StyledText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-poppins)",
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const styledSpan: React.CSSProperties = {
  fontFamily: "var(--font-poppins)",
  fontWeight: 300,
};
