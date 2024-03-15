import Image from "next/image";
import { styled, Box, Grid, Typography, Paper, Button } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const HeadingBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const HeadingBoxButton = styled(Button)(({ theme }) => ({
    fontFamily: 'var(--font-hind-bold)',
    fontSize: '19px',
    color: '#F65656',
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
    [theme.breakpoints.down("sm")]: {},
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
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))