import { Box, Typography, styled } from "@mui/material";
  
export const StyledUpperPriceBox = styled(Box)(({ theme }) => ({
    padding: "30px 20px",
    border: "0.5px solid",
    borderRadius: "30px 30px 30px 30px",
    borderColor: "#D3D3D3",
    background: '#0C2D5708',
    width: "85%",
    [theme.breakpoints.down("sm")]: {width: "90%",},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.between("md", "lg")]: {},
    [theme.breakpoints.up("lg")]: {},
  }))

  export const StyledText = styled(Typography)(({ theme }) => ({
    fontWeight: "light",
    border: "0.5px solid",
    borderRadius: "15px",
    width: "210px",
    padding: "1rem 0.6rem",
    margin: "1rem 0",
    background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "0.9rem",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.1rem",
    },
  }));
export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  borderRadius: "0.2rem",
  borderBottom: "1px solid #D3D3D3",
  padding: "0.5rem",
  marginTop: "1rem",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const SubMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const BoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex', 
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

