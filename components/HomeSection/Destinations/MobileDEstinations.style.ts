import Image from "next/image";
import { styled, Box, Grid, Typography, Paper, Button } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const SlideBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    transition: 'all 500ms ease-in-out',
    "&:hover": {transform: 'scale(1.1)'},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const CardBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '350px',
    height: '350px',
    borderRadius: '15px',
    overflow: 'hidden',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const ImageBox = styled(Box)(({ theme }) => ({
    filter: 'brightness(100%)',
    transition: 'all 0.5s ease-in-out',
    "&:hover": {filter: 'brightness(30%)'},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const CardTypography = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: '7rem',
    left: '1rem',
    color: 'white',
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: { fontSize: '23px', top: '7rem', left: '2.5rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const ExploreButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    border: '3px solid white',
    borderRadius: '25px',
    color: 'white',
    [theme.breakpoints.down("sm")]: {bottom: '1rem', right: '0rem', left: '3rem', width: '100px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))