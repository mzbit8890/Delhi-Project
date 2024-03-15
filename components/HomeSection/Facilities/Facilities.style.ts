import Image from "next/image";
import { styled, Box, Grid, Typography, Paper } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const ListItemBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const NumberTypography = styled(Typography)(({ theme }) => ({
    backgroundColor: '#454545',
    borderRadius: '50%',
    color: 'white',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const PaperText = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)',
    borderRadius: '20px',
    width: '280px',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const TextTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))