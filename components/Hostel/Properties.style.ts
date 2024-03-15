import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  styled,
  TextField,
  Paper,
} from "@mui/material";
import "@fontsource/raleway";
import "@fontsource/dm-sans";

const minHeight = 23;
const maxHeight = 25;

export const ImageStyle: React.CSSProperties = {};

export const ImageStyle2: React.CSSProperties = {
  width: "2rem",
  // height: "1.5rem",
  padding: "0.2rem",
};

export const ImageStyle3: React.CSSProperties = {
  width: "7rem",
  // height: "7rem",
  borderRadius: "0.5rem",
};

export const PropertyStyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    alignItem: "center",
    justifyContent: "center",
    padding: "0.5rem",
    flexDirection: "column",
    width: "100%",
  },
  // [theme.breakpoints.up("sm")]: {
  //   alignItem: "center",
  //   justifyContent: "center",
  //   padding: "0rem 0rem 2rem 0rem",
  //   flexDirection: "column",
  // },
  // [theme.breakpoints.up("md")]: {
  //   padding: "1rem",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  [theme.breakpoints.up("lg")]: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: 'hidden',
  [theme.breakpoints.down("sm")]: {
    borderRadius: "0.5rem 0.5rem 0 0",
  },
  [theme.breakpoints.up("sm")]: {},

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const PropertyInnerStyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: "flex",
  [theme.breakpoints.down("sm")]: {
   
    flexDirection: "column",
    
  },
  // [theme.breakpoints.up("sm")]: {},
  // flexDirection: "column",
  // [theme.breakpoints.up("md")]: {
  //   flexDirection: "column",
  // },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
export const RatingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  borderRadius: "0.3rem",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    padding: "0.3rem",
    marginLeft: "0.2rem",
    marginTop: "0.5rem",
    fontSize: "0.7rem",
  },
  // [theme.breakpoints.up("sm")]: {
  //   margin: "1rem 0rem 1rem 0rem",
  //   padding: "0.2rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   padding: "0.3rem",
  // },
  [theme.breakpoints.up("lg")]: {},
}));

export const PropertyStyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  fontFamily: "Poppins,sans-serif",
  borderRadius: "0.5rem",
  background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
    padding: "0rem 0.1rem 1rem 0.1rem",
  },
  // [theme.breakpoints.up("sm")]: {
  //   flexDirection: "column",
  //   width: "25rem",
  //   height: "45.5rem",
  //   padding: "1.5rem",
  //   border: "1px solid #000000",
  // },
  // [theme.breakpoints.up("md")]: {
  //   flexDirection: "column",
  //   width: "30rem",
  //   justifyContent: "center",
  //   alignItem: "center",
  //   borderRadius: "1rem",
  //   padding: "1rem",
  //   height: "48rem",
  //   border: "none",
  // },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: "1.2rem",
    borderRadius: "1rem",
    width: "100%",
    height: "13rem",
    marginTop: "15px",
  },
}));

export const PropertyStyledPropertyName = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway, sans-serif",
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    marginLeft: "0.3rem",
    fontSize: "1.20rem",
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
  },
}));

export const PropertyStyledAddress = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway,sans-serif",
  fontWeight: 400,
  width: "95%",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.78rem",
    width: "100%",
  },
  // [theme.breakpoints.up("sm")]: {
  //   fontSize: "1.15rem",
  //   width: "95%",
  //   marginBottom: "1rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   fontSize: "1.3rem",
  //   width: "100%",
  //   overflow: "scroll",
  //   marginBottom: "0.5rem",
  // },
  [theme.breakpoints.up("lg")]: {
    width: "95%",
    fontSize: "1.05rem",
  },
}));
export const PropertyStyledDistance = styled(Typography)(({ theme }) => ({
  fontFamily: "Dm Sans",
  fontWeight: 400,

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.66rem",
  },
  // [theme.breakpoints.up("sm")]: {
  //   fontSize: "1rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   fontSize: "1rem",
  // },
  [theme.breakpoints.up("lg")]: {
    fontSize: "0.9rem",
  },
}));
export const CityName = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway",
  fontWeight: 800,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
  // [theme.breakpoints.up("sm")]: {
  //   fontSize: "2rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   fontSize: "2.2rem",
  // },
  [theme.breakpoints.up("lg")]: {},
}));
export const CityNameBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "2rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "2rem",
  },
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: "5rem",
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  // },
  // [theme.breakpoints.up("md")]: {
  //   marginLeft: "5rem",
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  // },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "5rem",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
}));
export const PropertyStyledDistanceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "0.5rem",
  
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-2.5rem",
  },
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: "-2rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   marginLeft: "-3rem",
  // },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "2rem",
  },
}));

export const PropertyStyledPrices = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
  // [theme.breakpoints.up("sm")]: {
  //   fontSize: "1.5rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   fontSize: "2rem",
  // },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
}));

export const TopBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.up("md")]: {
  //   flexDirection: "row",
  // },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "column",
  },
}));

export const PropertyDetailsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  // [theme.breakpoints.up("sm")]: {},
  // [theme.breakpoints.up("md")]: {
  //   padding: "1rem",
  //   flexDirection: "row",
  // },
  [theme.breakpoints.up("lg")]: {
    padding: "0.5rem",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "30rem",
    // height: "25rem",
  },
}));
export const PriceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    marginTop: "0.5rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginLeft: "2rem",
  },
}));



export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",
  },
  // [theme.breakpoints.up("sm")]: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // [theme.breakpoints.up("md")]: {
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  // },
  [theme.breakpoints.up("lg")]: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "15px"

  },
}));
export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
  },
  [theme.breakpoints.up("sm")]: {
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
  },
}));
export const MiddleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: "1rem",
    padding: '0 15px'
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const IconText = styled(Typography)(({ theme }) => ({
  fontFamily: "DM Sans",
  color: "#3D66F8",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.62rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const BottomBox = styled(Box)(({ theme }) => ({
  margin: '10px 0px 0 5px',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    padding: '0 15px'
  },
  [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.up("md")]: {
  //   flexDirection: "column",
  // },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0rem 1rem 0.5rem 0",
  },
}));



