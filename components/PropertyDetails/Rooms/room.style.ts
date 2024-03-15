import { styled, Box, Typography } from "@mui/material";

export const StyledMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "2rem",
  [theme.breakpoints.down("sm")]: {flexDirection: "column", padding: "5px"},
  [theme.breakpoints.up("sm")]: {flexDirection: "column"},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {flexDirection: "row",},
  
}));
export const StyledRoomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "0rem",
  width: "70%",
  [theme.breakpoints.down("sm")]: {width: "100%"},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
  
}));
export const StyledDisplayRoomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  border: '1px solid lightgrey',
  borderRadius: "50px 50px 50px 50px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {borderRadius: "20px 20px 20px 20px",},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const RoomHeadingBox = styled(Box)(({ theme }) => ({
  width: '350px', 
  border: '2px solid lightgrey', 
  borderRadius: '0 0 60px 60px', 
  // background: 'linear-gradient(to bottom, #eeedeb, #f3f1f0, #f7f6f6, #fbfafb, #ffffff);',
  background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
  [theme.breakpoints.down("sm")]: {width: '200px', borderRadius: '0 0 50px 50px',},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const RoomHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700, textAlign: 'center', fontSize: '25px',
  [theme.breakpoints.down("sm")]: {fontSize: '20px'},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const OuterLayerBox = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  marginTop: "1rem",
  borderTop: "0.5px solid lightgrey",
  borderBottom: "1px solid lightgrey",
  background: 'linear-gradient(180deg, rgba(12, 45, 87, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
  [theme.breakpoints.down("sm")]: {height: "auto"},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
  
}));
export const StyledOuterRoomInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
  
}));
export const StyledHeadingRoomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "50px 50px 0px 0px",
  borderColor: "#D3D3D3",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
export const StyledRoomInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "1rem",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  [theme.breakpoints.up("lg")]: {},
}));
export const StyledPriceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  height: "20%",
  top: "0",
  marginLeft: 30,
  [theme.breakpoints.down("sm")]: {marginLeft: 0, marginTop: 50},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {
    width: "20rem",
  },
  [theme.breakpoints.up("lg")]: {},
}));

export const SubPriceBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 20,
  bottom: 20,
  [theme.breakpoints.down("sm")]: {left: 10, bottom: 10,},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
}))


export const StyledUpperPriceBox = styled(Box)(({ theme }) => ({
  padding: "30px 20px",
  border: "0.5px solid",
  borderRadius: "30px 30px 30px 30px",
  borderColor: "#D3D3D3",
  backgroundColor: "#F5F7F8",
  width: "85%",
  [theme.breakpoints.down("sm")]: {width: "90%",},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
}))

export const StyledBottomPriceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  border: "0.5px solid",
  borderColor: "#D3D3D3",
  backgroundColor: "#fff",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.between("md", "lg")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: "light",
  border: "0.5px solid",
  borderRadius: "10px",
  width: "200px",
  padding: "0.5rem",
  margin: "1rem 0",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "0.9rem",
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1rem",
  },
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