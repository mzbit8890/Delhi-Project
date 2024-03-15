import { Grid, styled, Button, Box, Typography, Divider } from "@mui/material";

// export const NAME = styled(ELEMENT)(({ theme }) => ({
 
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.up("sm")]: {},
//   [theme.breakpoints.up("md")]: {},
//   [theme.breakpoints.up("lg")]: {},
// }))

export const MainGrid = styled(Grid)(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.down("sm")]: {justifyContent: "start",},
  [theme.breakpoints.up("sm")]: {padding: '0 40px'},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const LeftGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {justifyContent: "start",},
  [theme.breakpoints.up("sm")]: {padding: '0 40px'},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const RightGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {justifyContent: 'start'},
  [theme.breakpoints.up("sm")]: {justifyContent: 'center'},
  [theme.breakpoints.up("md")]: {justifyContent: 'center'},
  [theme.breakpoints.up("lg")]: {justifyContent: 'center'},
}))

export const LeftGridBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {width: '100%',padding: '0 30px' },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {width: '100%',},
  [theme.breakpoints.up("lg")]: {width: '100%',},
}))

export const Title1Typography = styled(Typography)(({ theme }) => ({
  fontWeight: 700, color: '#FE6200', 
  display: 'flex', 
  alignItems: 'center',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const Title2Typography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const SubtitleTypography = styled(Typography)(({ theme }) => ({
  width: '70%', color: 'greyish',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const WrapperBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  "& .MuiTypography-root": {
    color: theme.palette.greyish?.main,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const LoginButton = styled(Button)(({ theme }) => ({
  py: 2,
  mt: 3,
  borderRadius: "2rem",
  fontSize: '1.3rem',
  color: 'white',
  backgroundColor: theme.palette.peach?.main,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))


export const LineDivider = styled(Divider)(({ theme }) => ({
  fontSize: '20px', 
  color: 'greyish',
  margin: '15px 0',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const GoogleLoginButton = styled(Button)(({ theme }) => ({
  py: 2,
  mt: 3,
  borderRadius: "2rem",
  gap: '1rem',
  color: 'black',
  border: '1px solid black', 
  backgroundColor: theme.palette.invisible?.main,
  [theme.breakpoints.down("sm")]: {fontSize: '1rem',},
  [theme.breakpoints.up("sm")]: {fontSize: '1rem',},
  [theme.breakpoints.up("md")]: {fontSize: '1.3rem',},
  [theme.breakpoints.up("lg")]: {},
}))

export const LoginImage = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  [theme.breakpoints.down("sm")]: {
    margin: '30px 30px',
    borderRadius: '60px 60px 160px 60px',
    width: '250px', 
    height: '300px'
  },
  [theme.breakpoints.up("sm")]: {
    margin: '60px 100px 60px 100px',
    borderRadius: '60px 100px 60px 100px',
    width: '250px', 
    height: '300px'
  },
  [theme.breakpoints.up("md")]: {
    margin: 0,
    borderRadius: '60px 100px 60px 100px',
    width: '400px', 
    height: '460px'
  },
  [theme.breakpoints.up("lg")]: {
    borderRadius: '60px 200px 60px 200px',
    width: '650px', 
    height: '700px'
  },
}));

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px