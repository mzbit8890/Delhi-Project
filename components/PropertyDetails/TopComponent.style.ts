import { createTheme } from "@mui/material/styles";
import Image from "next/image";

import {
  styled,
  Box,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Button,
  Grid
} from "@mui/material";

// export const ExampleBox = styled(Box)(({ theme }) => ({

//  [theme.breakpoints.down("sm")]: {},
//  [theme.breakpoints.up("sm")]: {},
//  [theme.breakpoints.up("md")]: {},
//  [theme.breakpoints.up("lg")]: {},
// }))

export const LoadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
 [theme.breakpoints.down("sm")]: {},
 [theme.breakpoints.up("sm")]: {},
 [theme.breakpoints.up("md")]: {},
 [theme.breakpoints.up("lg")]: {},
}))

export const BackButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10rem",
 [theme.breakpoints.down("sm")]: {},
 [theme.breakpoints.up("sm")]: {},
 [theme.breakpoints.up("md")]: {},
 [theme.breakpoints.up("lg")]: {},
}))

export const BackButton = styled(Button)(({ theme }) => ({
  background: "purple", 
  color: "#fff", 
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const ImageGrid = styled(Grid)(({ theme }) => ({
  marginTop: "6rem", 
  position: 'relative',
  [theme.breakpoints.down("sm")]: {display: 'none'},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const MainImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "37rem",
  objectFit: "cover",
  borderRadius: "25px 0 0 0",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const HotelTitleBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
  height: '31.5%', 
  border: '3px solid lightgrey', 
  borderRadius: '0 0 0 20px', 
  display: 'flex', 
  justifyContent: 'center' ,
  alignItems: 'center', 
  flexDirection: 'column',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))
export const HotelTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {fontSize: '30px'},
  [theme.breakpoints.up("sm")]: {fontSize: '80px'},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))
export const HotelTitleDetail = styled(Typography)(({ theme }) => ({
  fontSize: '20px', fontWeight: 100, display: 'flex', justifyContent: 'center' ,alignItems: 'center',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const OtherImages = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "18rem",
  objectFit: "cover",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const ViewAllButton = styled(Button)(({ theme }) => ({
   position: "absolute",
   right: "25px",
   bottom: "30px",
   fontSize:'20px',
   backgroundColor: '#F65656',
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  width: "40%",
  fontFamily: "Helvetica,Arial,sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledPropertyName = styled(Typography)(({ theme }) => ({
  fontSize: "2.125rem",
  fontWeight: "bold",
  color: "#1A1110",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledPropertyAddress = styled(Typography)(({ theme }) => ({
  fontWeight: "medium",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledReviewText = styled(Typography)(({ theme }) => ({
  border: "3px solid",
  width: "3rem",
  height: "2rem",
  textAlign: "center",
  backgroundColor: "#FF5733",
  borderColor: "#FF5733 ",
  borderRadius: "0.2rem",
  color: "white",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledTextt = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  fontWeight: "medium",
  fontSize: "0.9rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledMiddleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "1.5rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledReviewBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledPropertyDescriptionBox = styled(Box)(({ theme }) => ({
  marginLeft: "3rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledMainBoxForDialog = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledPoliciesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledThingstoNoteBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const CancellationPolicyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "1rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  marginTop: "1rem",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledSubHeader = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  marginTop: "1rem",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledBody = styled(Typography)(({ theme }) => ({
  marginTop: "0.5rem",
  fontWeight: "lighter",
  textOverflow: "clip",
  fontSize: "0.8rem",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StylishBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  margin: "auto",
  marginTop: "1rem",
  marginBottom: "3rem",
  background:
    "linear-gradient(261deg, rgb(246, 169, 14) -0.59%, rgb(255, 113, 75) 18.09%, rgb(204, 0, 116) 98.1%), linear-gradient(254deg, rgb(255, 113, 75) -0.53%, rgb(204, 0, 116) 64.2%)",
  borderRadius: "0.5rem",
  width: "50rem",
  height: "3rem",
  boxShadow: `0 0 10px rgba(65, 105, 225, 0.6), 0 0 20px rgba(173, 216, 230, 0.8), 0 0 30px rgba(65, 105, 225, 0.6)`,
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "0.5rem",
    boxShadow: `0 0 10px rgba(65, 105, 225, 0.6), 0 0 20px rgba(173, 216, 230, 0.8), 0 0 30px rgba(65, 105, 225, 0.6)`,
    zIndex: -1,
  },
  [theme.breakpoints.down("sm")]: {display: 'none'},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
