import Image from "next/image";
import { styled, Box, Grid, Typography } from "@mui/material";

export const SubHeadingTypography = styled(Typography)(({ theme }) => ({
    color: '#00000073',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const ColumnTitles = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {fontSize: '10px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const RowTitles = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {fontSize: '10px'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

