import Image from "next/image";
import { styled, Box, Grid, Typography } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const BoxImage = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '90vh',
    [theme.breakpoints.down("sm")]: {  height: '70vh'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const CoverImage = styled(Image)(({ theme }) => ({
    width: '100%',
    height: '100%', 
    filter: 'brightness(40%)',
    objectFit: 'cover',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))


export const HeadingTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: 'white',
    position: 'absolute',
    zIndex: 15,
    top: '30%',
    left: '32%',
    [theme.breakpoints.down("sm")]: {fontSize: '37px',top: '20%', left: '20%',},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))


export const SearchBoxWrapper = styled(Box)(({ theme }) => ({
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
    backdropFilter: 'blur(10px)', 
    color: 'white',
    border: '1px solid #FFFFFF80',
    borderRadius: '10px',
    position: 'absolute',
    top: '60%',
    left: '20%',
    width: '60%',
    [theme.breakpoints.down("sm")]: { width: '90%', top: '30%',left: '5%'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const SubHeading = styled(Typography)(({ theme }) => ({
    
    [theme.breakpoints.down("sm")]: {fontSize: '14px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const TextWrapperBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))