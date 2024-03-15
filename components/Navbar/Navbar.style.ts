import { styled, Box, Grid, Typography, Button } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const MainBox = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const LogoTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'var(--font-pacifico)',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {fontSize: '20px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const LinksMainGrid = styled(Grid)(({ theme }) => ({

    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const LinkButton = styled(Button)(({ theme }) => ({
    fontSize: '18px',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))