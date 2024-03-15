import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";

import {
  StyledList,
  StyledListItemButton,
  StyledListItem,
  StyledPropertyName,
  StyledPropertyAddress,
  StyledMiddleBox,
  StyledReviewBox,
  StyledPropertyDescriptionBox,
  StyledReviewText,
  StyledTextt,
  StyledMainBoxForDialog,
  CancellationPolicyBox,
  StyledPoliciesBox,
  StyledThingstoNoteBox,
  StyledBody,
  StyledHeader,
  StyledSubHeader,
  StylishBox,
  ViewAllButton,
  LoadingBox,
  BackButton,
  BackButtonBox,
  ImageGrid,
  MainImage,
  OtherImages,
  HotelTitleBox,
  HotelTitle,
  HotelTitleDetail,
} from "./TopComponent.style";

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PolicyIcon from "@mui/icons-material/Policy";

import dynamic from "next/dynamic";
const FacilitiesComponent = dynamic(() => import("./Facilities"), {
  ssr: false,
});

const MiddleComponenet = dynamic(() => import("./Rooms/RoomComponent"), {
  ssr: false,
});
import ChecklistIcon from "@mui/icons-material/Checklist";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImageIcon from "@mui/icons-material/Image";
import { BirdLoader } from "../LottieAnimations/TravelLoader/TravelLoader";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function TopComponentPropertyDetails() {
  const PropertyRating = useSelector(
    (state: any) => state.property?.PropertyRating
  );
  const router = useRouter();
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  const cityName = pathNameArray[2];
  const PropertyName = pathNameArray[3];

  interface PropertyData {
    PropertyName: string;
    city: string;
    PropertyDescription: string;
    PropertyType: string;
    CancellationPolicy: string;
    ThingstoNote: string;
    minimumNights: number;
    maximumNights: number;
    weekendMinimumNights: number;
    checkIn: number;
    checkout: number;
    PropertyFacalities: string[];
    PropertyServices: string[];
    PropertyEntertainment: string[];
    FoodAndDrinks: string[];
    PropertyImages: string[];
    OtherDetailsForResponse: { Address: string }[] | null;
  }
  const [showMore, setShowMore] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  const [propertyData, setPropertyData] = useState<PropertyData>({
    PropertyName: "",
    city: "",
    PropertyDescription: "",
    PropertyType: "",
    CancellationPolicy: "",
    ThingstoNote: "",
    minimumNights: 0,
    maximumNights: 0,
    weekendMinimumNights: 0,
    checkIn: 0,
    checkout: 0,
    PropertyFacalities: [],
    PropertyServices: [],
    PropertyEntertainment: [],
    FoodAndDrinks: [],
    PropertyImages: [],
    OtherDetailsForResponse: null,
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleScrollToFacilities = () => {
    const facilitiesSection = document.getElementById("facilities-section");
    if (facilitiesSection) {
      facilitiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const HandleScrollToprice = () => {
    const priceSection = document.getElementById("Price");
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cityName && PropertyName) {
          const response = await fetch(
            `https://api.hostelbird.com/propertyDetails/getPropertyDetails/${cityName}/${PropertyName}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setPropertyData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };

    fetchData();
  }, [cityName, PropertyName]);

  if (loading) {
    return (
      <>
        <LoadingBox>
          <BirdLoader />
        </LoadingBox>
      </>
    );
  }

  if (!propertyData?.PropertyName && !loading) {
    return (
      <BackButtonBox>
        <Typography sx={{ color: "#F87E3D" }} variant="h2">
          No Property Details Available
        </Typography>
        <BackButton href="/" variant="contained">
          Back To Home
        </BackButton>
      </BackButtonBox>
    );
  }

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };
  const imagesToDisplay = propertyData?.PropertyImages?.slice(0, 4);

  return (
    <>
      <ImageGrid container spacing={2}>
        {imagesToDisplay.length > 0 && (
          <Grid item xs={8} key={0}>
            <MainImage
              src={imagesToDisplay[0]}
              width={200}
              height={200}
              alt={`Image 0`}
              loading="lazy"
              onClick={() => handleImageClick(imagesToDisplay[0])}
            />
            <HotelTitleBox mt={1.5}>
              <HotelTitle pt={3} variant="h3">
                {propertyData?.PropertyName}
              </HotelTitle>
              <HotelTitleDetail pt={2} mb={5} variant="body1">
                <RoomOutlinedIcon sx={{ color: "#F65656" }} />{" "}
                {propertyData?.OtherDetailsForResponse?.[0]?.Address}
              </HotelTitleDetail>
            </HotelTitleBox>
          </Grid>
        )}

        <Grid container item direction="column" xs={4} spacing={1.5}>
          {imagesToDisplay.slice(1).map((image, index) => (
            <Grid item xs={4} key={index + 1}>
              <OtherImages
                src={image}
                width={200}
                height={200}
                sx={{
                  borderRadius:
                    index == 0
                      ? "0 25px 0 0"
                      : index == 1
                      ? "0 0 0 0"
                      : "0 0 25px 0",
                }}
                alt={`Image ${index + 1}`}
                loading="lazy"
                onClick={() => handleImageClick(image)}
              />
            </Grid>
          ))}
        </Grid>
        {propertyData && (
          <Dialog
            open={lightboxOpen}
            onClose={handleCloseLightbox}
            maxWidth="lg"
            fullWidth
            sx={{ backgroundColor: "black" }}
          >
            <DialogTitle>Property Images</DialogTitle>
            <DialogContent>
              <Box>
                <Carousel>
                  {propertyData.PropertyImages?.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "60vw",
                        height: "60vh",
                      }}
                    >
                      <Image
                        src={image}
                        loading="lazy"
                        width={200}
                        height={200}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        alt={`Image ${index}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </Box>
            </DialogContent>
          </Dialog>
        )}
        <ViewAllButton
          variant="contained"
          onClick={() => setLightboxOpen(true)}
        >
          <ImageIcon sx={{ mr: 1 }} />
          View All
        </ViewAllButton>
      </ImageGrid>

      {PropertyRating > 9 ? (
        <StylishBox>
          <Typography
            className={`${poppins.variable}`}
            sx={{
              fontFamily: "var(--font-poppins)",
              color: "#fff",
              fontSize: "1.5rem",
              ml: "1rem",
            }}
          >
            City&apos;s Finest Hostel Experience
          </Typography>
          <Typography
            className={`${poppins.variable}`}
            sx={{
              fontFamily: "var(--font-poppins)",
              color: "#fff",
              fontSize: "1rem",
              ml: "1rem",
            }}
          >
            Prime Hostel Picks Here
          </Typography>
        </StylishBox>
      ) : (
        ""
      )}

      <Box sx={{ margin: "1rem 0rem" }}>
        <Box mt={5} sx={{ display: "flex" }}>
          <Box
            mb={5}
            sx={{
              display: "flex",
              background:
                "linear-gradient(180deg, rgba(12, 45, 87, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Button
              sx={{
                margin: "30px 20px",
                paddingRight: "30px",
                color: "black",
                fontSize: { xs: "12px", lg: "20px" },
                borderRight: "1px solid black",
                borderRadius: "0px",
              }}
              onClick={HandleScrollToprice}
            >
              Price
            </Button>
            <Button
              sx={{
                margin: "30px 20px",
                paddingRight: "30px",
                color: "black",
                fontSize: { xs: "12px", lg: "20px" },
                borderRight: "1px solid black",
                borderRadius: "0px",
              }}
              onClick={handleScrollToFacilities}
            >
              Facilities
            </Button>
            <Button
              sx={{
                margin: "30px 20px",
                paddingRight: "30px",
                color: "black",
                fontSize: { xs: "12px", lg: "20px" },
                borderRight: "1px solid black",
                borderRadius: "0px",
              }}
            >
              Map
            </Button>
            <Button
              sx={{
                margin: "20px 20px",
                paddingRight: "30px",
                color: "black",
                fontSize: { xs: "12px", lg: "20px" },
              }}
              onClick={handleOpenDialog}
            >
              Hostel Rules
            </Button>
          </Box>
        </Box>

        <Dialog
          sx={{ width: "90%" }}
          open={openDialog}
          onClose={handleCloseDialog}
        >
          <DialogTitle>Hostel Rules</DialogTitle>
          <DialogContent>
            <Divider flexItem />
            <StyledMainBoxForDialog>
              <StyledPoliciesBox>
                <StyledHeader
                  sx={{ fontWeight: 700, display: "flex" }}
                  variant="h6"
                >
                  <CancelIcon
                    sx={{ color: "#3D66F8", marginRight: "0.2rem" }}
                  />{" "}
                  Cancellation Policies
                </StyledHeader>

                <StyledSubHeader>Cancellation Policy</StyledSubHeader>
                <StyledBody>{propertyData?.CancellationPolicy}</StyledBody>
              </StyledPoliciesBox>
              <Divider flexItem />
              <StyledThingstoNoteBox>
                <StyledHeader sx={{ display: "flex" }} variant="h5">
                  {" "}
                  <ChecklistIcon
                    sx={{ color: "#3D66F8", marginRight: "0.2rem" }}
                  />{" "}
                  Things to Note
                </StyledHeader>
                <StyledBody>{propertyData?.ThingstoNote}</StyledBody>
              </StyledThingstoNoteBox>
              <Divider flexItem />
              <CancellationPolicyBox>
                <StyledHeader sx={{ display: "flex" }} variant="h5">
                  {" "}
                  <PolicyIcon
                    sx={{ color: "#3D66F8", marginRight: "0.2rem" }}
                  />
                  Policies
                </StyledHeader>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                  }}
                >
                  <Box
                    sx={{
                      width: "10rem",
                      padding: "0.2rem",
                    }}
                  >
                    <StyledBody variant="h6">
                      <b>Minimum Nights: </b> {propertyData.minimumNights}
                    </StyledBody>
                    <StyledBody variant="h6">
                      <b>Max Nights: </b> {propertyData.maximumNights}
                    </StyledBody>
                    <StyledBody variant="h6">
                      <b>Weekend Min Nights: </b>
                      {propertyData.weekendMinimumNights}
                    </StyledBody>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: { xs: 0, lg: "12rem" },
                      border: "1px solid",
                      borderRadius: "1rem",
                      padding: "0.5rem",
                      textOverflow: "revert",
                      width: "10rem",
                      backgroundColor: "#eafaf1",
                    }}
                  >
                    <StyledBody
                      sx={{ marginLeft: "0.2rem", display: "flex" }}
                      variant="h6"
                    >
                      <AccessTimeIcon sx={{ color: "#3D66F8" }} />
                      &nbsp;&nbsp;&nbsp;
                      <b>Check In </b> &nbsp;
                      {propertyData.checkIn}
                    </StyledBody>
                    <StyledBody sx={{ marginLeft: "1.7rem" }} variant="h6">
                      &nbsp;&nbsp;
                      <b> Check Out </b>
                      {propertyData.checkout}
                    </StyledBody>
                  </Box>
                </Box>
              </CancellationPolicyBox>
            </StyledMainBoxForDialog>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>

      <Box mx={1} sx={{ display: { xs: "none", lg: "flex" } }}>
        <Grid container>
          <Grid
            py={4}
            px={3}
            item
            lg={3}
            sx={{ background: "#0C2D5708", borderRadius: "0 30px" }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                pt={1}
                px={2}
                variant="h5"
                sx={{
                  backgroundColor: "#F65656",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "40px",
                }}
              >
                8.7
              </Typography>
              <Box ml={2}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "25px", color: "#F65656", fontWeight: 700 }}
                >
                  Fabulous
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px", color: "#F65656" }}
                >
                  128 reviews
                </Typography>
              </Box>
            </Box>
            <hr style={{ margin: "35px 0" }} />
            <Typography
              sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
              variant="body2"
            >
              <RoomOutlinedIcon
                sx={{ color: "#F65656", marginRight: "10px" }}
              />{" "}
              Perfect Location
            </Typography>
            <Typography
              sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
              py={2}
              variant="body2"
            >
              <PeopleOutlinedIcon
                sx={{ color: "#F65656", marginRight: "10px" }}
              />
              Superb Staff
            </Typography>
            <Typography
              sx={{ fontSize: "20px", display: "flex", alignItems: "center" }}
              variant="body2"
            >
              <EmojiObjectsOutlinedIcon
                sx={{ color: "#F65656", marginRight: "10px" }}
              />
              Fantastic Cleanliness
            </Typography>
            <hr style={{ margin: "35px 0" }} />
            <Button sx={{ color: "#FF5733", padding: 0, fontSize: "20px" }}>
              Read all Reviews
            </Button>
          </Grid>
          <Grid mt={{ xs: 5, lg: 0 }} pl={{ xs: 0, lg: 10 }} item lg={9}>
            {!showMore ? (
              <Typography
                variant="h6"
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                {propertyData?.PropertyDescription.slice(0, 550)}
              </Typography>
            ) : (
              <Typography
                variant="h6"
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}
              >
                {" "}
                {propertyData?.PropertyDescription}
              </Typography>
            )}
            <Button
              variant="contained"
              onClick={() => setShowMore(!showMore)}
              sx={{
                color: "white",
                backgroundColor: "#F65656",
                borderRadius: "10px",
                marginTop: "1rem",
              }}
            >
              {" "}
              Show More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default TopComponentPropertyDetails;
