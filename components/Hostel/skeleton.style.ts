import { styled, Box, Paper, Skeleton } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  marginTop: "10rem",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",
    width: "22rem",
    marginLeft: "0.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: "5rem",
    width: "27rem",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    alignItems: "center",
    justifyContent: "start",
    marginTop: "2rem",
    marginLeft: "2rem",
    width: "65rem",
    borderRadius: "1rem",
    padding: "1rem",
  },
}));

export const DetailsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const ImageSkeleton = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "20rem",
    height: "15rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "25rem",
    height: "15rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "25rem",
    height: "20rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "25rem",
    height: "25rem",
  },
}));

export const IconSkeleton = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "8rem",
    height: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
     marginLeft: "0rem",
    width: "20rem",
    height: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "0rem",
    width: "20rem",
    height: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "5rem",
    width: "20rem",
    height: "2rem",
  },
}));

export const AddressSkeleton = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0rem",
    width: "15rem",
    height: "3.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "15rem",
    height: "4rem",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "0rem",
    width: "20rem",
    height: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "1rem",
    height: "10rem",
    marginLeft: "5rem",
  },
}));

export const PriceSkeleton = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "6rem",
    marginRight: "3rem",
    height: "4rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "4rem",
    height: "4rem",
    marginRight: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    marginRight: "4rem",
    width: "5rem",
    height: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "5rem",
    width: "5rem",
  },
}));

export const ButtonSkeleton = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "2rem",
    height: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "15rem",
    height: "4rem",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    marginLeft: "5rem",
    height: "5rem",
    width: "10rem",
  },
}));

export const OtherSkeleton = styled(Skeleton)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "13rem",
    height: "7rem",
  },
  [theme.breakpoints.up("sm")]: {
    width: "17rem",
    height: "4rem",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "0rem",
    width: "20rem",
    height: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: "5rem",
    marginTop: "1rem",
    width: "30rem",
    height: "4rem",
  },
}));

export const BottomBoxSkelton = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const PriceBoxSkelton = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
