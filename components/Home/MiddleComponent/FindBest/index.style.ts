import { styled, Box, Typography, Paper } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#3D66F833",
  width: "65rem",
  margin: "auto",
  borderRadius: "1rem",
  padding: "5rem 3rem 5rem 3rem",

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "row",
    padding: "1.5rem",
    width: "18rem",
    marginTop: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    width: "35rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    width: "40rem",
    padding: "4.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3D66F833",
    width: "65rem",
    margin: "auto",
    borderRadius: "1rem",
    padding: "5rem 3rem 5rem 3rem",
  },
}));

// [theme.breakpoints.up("sm")]: {
//   display: "flex",
//   flexDirection: "column",
//   padding: "2rem 17rem 2rem 5rem",
//   marginTop: "1.5rem",
//   marginLeft: "-5rem",
// },
export const StyledBoxLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#3D66F8",
  borderRadius: "3rem",
  padding: "3rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 3rem 1rem 3rem",
    borderRadius: "1rem",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  [theme.breakpoints.up("sm")]: {
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",

    padding: "1rem 3rem 1rem 3rem",
    overflow: "hidden",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#3D66F8",
    padding: "3rem 5rem 3rem 5rem",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    backgroundColor: "#3D66F8",
    borderRadius: "3rem",
    width: "30rem",
    padding: "4rem",
  },
}));

export const StyledBoxImages = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  width: "auto",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {
    overflow: "hidden",
    marginBottom: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "2rem",
    marginBottom: "4rem",
  },
}));

export const StyledImage: React.CSSProperties = {
  objectFit: "cover",
  height: "272px",
  width: "272px",
  margin: "1rem",
  borderRadius: "1rem",
  filter: "brightness(0.7)",
};

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: "1rem",
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  margin: "2rem",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    margin: "0.2rem",
    width: "120%",
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontWeight: 800,
    margin: "2rem",
  },
}));
export const StyledBackgroundText = styled(Typography)(({ theme }) => ({
  zIndex: 1,
  textAlign: "center",
  backgroundColor: "#fff",
  borderRadius: "1rem",

  color: "#000",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-4rem",
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "-4rem",
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "-4rem",
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "-8rem",
    marginBottom: "8rem",
    fontSize: "2.5rem",
  },
}));

export const StyledTextTwo = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontFamily: "var(--font-poppins)",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    marginTop: "0.5rem",
    fontWeight: 400,
    fontSize: "0.8rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "70%",
    marginTop: "0.5rem",
    fontWeight: 400,
    fontSize: "1rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontWeight: 400,
    textAlign: "center",
  },
}));

export const StyledTextOne = styled(Typography)(({ theme }) => ({
  width: "100%",
  color: "#3D66F8",

  fontWeight: 800,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: "2rem",
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "2rem",
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "90%",
    fontSize: "2.5rem",
    marginTop: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontWeight: 800,
    width: "86%",
    textAlign: "left",
    fontSize: "70px",
  },
}));
