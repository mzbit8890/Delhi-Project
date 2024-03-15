import Image from "next/image";
import { styled, Box, Grid, Typography, Paper, Button } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const SlideBox = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(240,240,247,1) 0%, rgba(255,255,255,1) 100%)',
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    transition: 'all 500ms ease-in-out',
    "&:hover": {transform: 'scale(1.1)'},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const LaunchButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'white',
    backgroundColor: '#F65656',
    borderRadius: '10px',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const CardImage = styled(Image)(({ theme }) => ({
    width: '100%', 
    height: '220px',
    objectFit: 'cover',
    [theme.breakpoints.down("sm")]: {height: '180px',},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const TitileTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'var(--font-hind-bold)',
    [theme.breakpoints.down("sm")]: {fontSize: '18px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {fontSize: '23px'},
}))
export const SubTitileTypography = styled(Typography)(({ theme }) => ({
    height: '100px',
    overflow: 'hidden',
    color: '#818181',
    [theme.breakpoints.down("sm")]: {fontSize: '12px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const BookButton = styled(Button)(({ theme }) => ({
    width: '100%', 
    borderRadius: '10px', 
    backgroundColor: '#F65656',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))