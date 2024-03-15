import Image from "next/image";
import { styled, Box, Grid, Typography, Paper, Button } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const TextBox = styled(Box)(({ theme }) => ({
    background: '#F6565626',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const CenterBox = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

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
    fontSize: '19px',
    fontWeight: 700,
    color: '#F65656',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const CenterGrid = styled(Grid)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center',
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
    [theme.breakpoints.down("sm")]: {width: '200px', height: '200px'},
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

export const DestinationImage = styled(Image)(({ theme }) => ({
    width: '100%', 
    height: '500px',
    objectFit: 'cover',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const ExploreButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
    border: '3px solid white',
    borderRadius: '25px',
    color: 'black',
    width: '90%',
    backgroundColor: 'white',
    [theme.breakpoints.down("sm")]: {left: '0.5rem', height: '30px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))