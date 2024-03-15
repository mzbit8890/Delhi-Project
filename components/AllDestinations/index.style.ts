import Image from "next/image";
import { styled, Box, Grid, Typography, Paper, Button } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
    
//     [theme.breakpoints.down("sm")]: {},
//     [theme.breakpoints.up("sm")]: {},
//     [theme.breakpoints.up("md")]: {},
//     [theme.breakpoints.up("lg")]: {},
// }))

export const HeadingTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))