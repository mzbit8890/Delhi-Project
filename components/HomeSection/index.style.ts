import Image from "next/image";
import { styled, Box, Grid, Typography, Paper, Button } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const HeadingTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'var(--font-hind-bold)',
    fontSize: '55px',
    [theme.breakpoints.down("sm")]: {fontSize: '25px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))