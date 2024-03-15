import { styled, Box, Grid, Typography } from "@mui/material";
export const NumberBox = styled(Box)(({ theme }) => ({
    fontWeight: 700,
    border: '1px solid #0C2D571C',
    borderRadius: '15px',
    width: '50%',
    position: 'relative',
    overflow: 'hidden', // Ensure the SVG is clipped within the box
    background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.035) 0%, rgba(255, 255, 255, 0.035) 100%) ',
    [theme.breakpoints.down("sm")]: {
        fontSize: '30px',
        width: '95%',
    },
    '& svg': {
        position: 'absolute',
        top: '50%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}));

export const NumberTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: { fontSize: '25px' },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const DescriptionTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 300,
    color: '#636363',
    [theme.breakpoints.down("sm")]: { fontSize: '15px' },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const WrapperBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const IconBox = styled(Box)(({ theme }) => ({
    borderRadius: '20px',
    // background: '#0C2D571A',
    border: '1px solid black',
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))

export const IconTitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: { fontSize: '25px' },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}))