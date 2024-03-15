import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  LinearProgress,
  Modal,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  Snackbar,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { styledSpan, StyledText } from "./index.style";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Poppins } from "next/font/google";
import {
  SetPropertyIdForVendorDashboard,
  SetUpdateSuccess,
} from "@/Store/VendorSlice";
import React from "react";
import axios from "axios";
import { log } from "console";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Property {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  AdminRating: number;
  PhoneNumber: string;
  PropertyName: string;
  PropertyType: string;
  RoomPriceStartFrom: string;
  DormsPriceStartFrom: string;
  distanceFromMainCity: string;
  distanceFromAirport: string;
  currency: string;
  city: string;
  Postcode_Zip_code: number;
  Total_number_of_bedrooms: number;
  Number_of_beds: number;
  country: string;
  DateAndTime: string;
  Address: string;
  uploadedImageDoc: string;
  verifiedProperty: boolean;
  PropertDetailsVerified: boolean;
  propertyDetails: {
    DateAndTime: string;
    PropertyImages: string[];
    PropertyDescription: string;
    PropertyType: string;
    minimumNights: number;
    maximumNights: number;
    weekendMinimumNights: number;
    checkIn: number;
    checkout: number;
    CancellationPolicy: string;
    ThingstoNote: string;
    PropertyFacalities: string[];
    PropertyServices: string[];
    PropertyEntertainment: string[];
    FoodAndDrinks: string[];
  };
}
type PropertyDetailsKey = keyof Property["propertyDetails"];

const VendorPropertyDetailsPage = () => {
  const [openMessage, setOpen] = useState(false);
  const router = useRouter();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProp, setSelectedProp] = useState<string>("");
  const handleClickDialog = (property: any) => {
    setOpenDialog(!openDialog);

    setSelectedProp(property);
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [clickedImageIndex, setClickedImageIndex] = useState<number | null>(
    null
  );
  const dispatch = useDispatch();
  const handleImageClick = (index: number) => {
    setClickedImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const UpdateValue = useSelector((state: any) => state.vendor?.successValue);
  const [propertyDetails, setPropertyDetails] = useState<Property | null>(null);

  let vendorName = useSelector(
    (state: any) => state?.vendor?.vendorNameForVendorDashboard
  );
  vendorName.replace("@", "%40");

  const properties = useSelector(
    (state: any) => state.vendor.PropertiesForVendorDashboard
  );
  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);
  const [selectedId, setselectedId] = useState(
    PropertyID ? PropertyID : properties[0]?.id
  );

  useEffect(() => {
    dispatch(SetPropertyIdForVendorDashboard(selectedId));
  }, [selectedId, dispatch]);

  const handlePropertyChange = (e: any) => {
    const newSelectedId = e.target.value;
    setselectedId(newSelectedId);
  };
  const selectedProperty = properties.find(
    (property: any) => property.id === PropertyID
  );
  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const handleDeleteClick = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://api.hostelbird.com/propertyDetails/delete-fields/${PropertyID}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          data: {
            indicies: selectedImages,
          },
        }
      );

      if (response) {
        window.location.reload();
        dispatch(SetUpdateSuccess("success"));
      } else {
        dispatch(SetUpdateSuccess("error"));
      }
    } catch (error) {
      dispatch(SetUpdateSuccess("error"));
    } finally {
      setLoading(false);
      handleCloseModal();
      handleConfirmDialogClose();
    }
  };
  const [confirmationDialogOpen, setConfirmationDialogOpen] =
    useState<boolean>(false);

  const handleConfirmDialogOpen = () => {
    setConfirmationDialogOpen(true);
  };

  const handleConfirmDialogClose = () => {
    setConfirmationDialogOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/vendor/PropertyDetails/${vendorName}/${SelectedPropertyName}`,
          {
            credentials: "include",
            mode: "cors",
          }
        );
        const data = await response.json();

        setPropertyDetails(data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };
    if (vendorName && SelectedPropertyName) {
      fetchData();
    }
  }, [vendorName, SelectedPropertyName]);

  if (!propertyDetails) {
    return <LinearProgress color="info" />;
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(SetUpdateSuccess("close"));
    setOpen(false);
  };

  return (
    <Container className={`${poppins.variable}`}>
      <>
        {UpdateValue === "success" ? (
          <Snackbar
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            open={true}
            autoHideDuration={12000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Image Deleted SuccessFully!
            </Alert>
          </Snackbar>
        ) : <Snackbar
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            open={true}
            autoHideDuration={12000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Some Error Occured
            </Alert>
          </Snackbar> ? (
          UpdateValue === "close"
        ) : (
          ""
        )}
      </>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          className={`${poppins.variable}`}
          sx={{
            fontFamily: "var(--font-poppins)",
            ml: "1rem",
          }}
          id="demo-simple-select-standard-label"
        >
          Change Property
        </InputLabel>
        <Select
          value={selectedId || ""}
          onChange={handlePropertyChange}
          variant="outlined"
          sx={{ width: "10rem", m: "1rem" }}
        >
          {properties.map((property: any) => (
            <MenuItem key={property.id} value={property.id}>
              <Typography
                key={property.id}
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
              >
                {property.propertyName}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid className={`${poppins.variable}`} container spacing={3}>
        <Grid item xs={12} md={12}>
          <Paper elevation={3}>
            <Card>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", m: "1rem" }}
                variant="h5"
              >
                Goverment Uploaded Document
              </Typography>
              <CardMedia
                component="img"
                height="500"
                image={propertyDetails?.uploadedImageDoc}
                alt={propertyDetails?.PropertyName}
              />
              <CardContent>
                <Typography
                  sx={{ fontFamily: "var(--font-poppins)" }}
                  variant="h5"
                  gutterBottom
                >
                  Property Description
                </Typography>
                <Typography sx={{ fontFamily: "var(--font-poppins)" }}>
                  {propertyDetails?.propertyDetails?.PropertyDescription}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid className={`${poppins.variable}`} item xs={12}>
          <Paper elevation={3}>
            <Typography
              className={`${poppins.variable}`}
              variant="h5"
              gutterBottom
              sx={{ fontFamily: "var(--font-poppins)" }}
            >
              Property Images
            </Typography>
            <Carousel animation="slide" indicators={false}>
              {propertyDetails?.propertyDetails?.PropertyImages.map(
                (image: string, index: number) => (
                  <Card key={index}>
                    <CardMedia
                      component="img"
                      height="340"
                      image={image}
                      loading="lazy"
                      style={{
                        padding: "1rem",
                        cursor: "pointer",
                      }}
                      alt={`Property Image ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                    />
                  </Card>
                )
              )}
            </Carousel>
          </Paper>
        </Grid>

        <Modal
          className={`${poppins.variable}`}
          open={modalOpen}
          onClose={handleCloseModal}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              style={{ top: 0, right: 0, color: "red" }}
              onClick={handleConfirmDialogOpen}
            >
              <DeleteIcon />
            </IconButton>

            <Carousel
              animation="slide"
              indicators={true}
              index={selectedImages.length > 0 ? selectedImages[0] : 0}
            >
              {propertyDetails?.propertyDetails?.PropertyImages.map(
                (image: string, index: number) => (
                  <Card
                    key={index}
                    style={{
                      border: selectedImages.includes(index)
                        ? "20px solid darkred"
                        : "none",
                      cursor: "pointer",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="600px"
                      width="100%"
                      image={image}
                      loading="lazy"
                      alt={`Property Image ${index + 1}`}
                      onClick={() => {
                        if (selectedImages.includes(index)) {
                          setSelectedImages((prev) =>
                            prev.filter((i) => i !== index)
                          );
                        } else {
                          setSelectedImages((prev) => [...prev, index]);
                        }
                      }}
                    />
                  </Card>
                )
              )}
            </Carousel>
          </div>
        </Modal>

        <Dialog
          className={`${poppins.variable}`}
          open={confirmationDialogOpen}
          onClose={handleConfirmDialogClose}
        >
          <DialogTitle
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
          >
            Delete Confirmation
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ fontFamily: "var(--font-poppins)" }}>
              Are you sure you want to delete the selected images? There is no
              Going back
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ fontFamily: "var(--font-poppins)" }}
              onClick={handleConfirmDialogClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button onClick={handleDeleteClick} color="primary">
              {loading ? (
                <CircularProgress color="success" />
              ) : (
                "Confirm Delete"
              )}
            </Button>
          </DialogActions>
        </Dialog>

        <Grid item xs={12}>
          <Paper elevation={3}>
            <List
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              <ListItem>
                <StyledText>
                  Type:
                  <span style={styledSpan}>{propertyDetails.PropertyType}</span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Room Price Start From:
                  <span style={styledSpan}>
                    {propertyDetails.currency}{" "}
                    {propertyDetails.RoomPriceStartFrom}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Dorms Price Start From:
                  <span style={styledSpan}>
                    {propertyDetails.currency}{" "}
                    {propertyDetails.DormsPriceStartFrom}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Distance From Main City:
                  <span style={styledSpan}>
                    {propertyDetails.distanceFromMainCity} km
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Distance From Airport:
                  <span style={styledSpan}>
                    {propertyDetails.distanceFromAirport} km
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Total Number of Bedrooms:
                  <span style={styledSpan}>
                    {propertyDetails.Total_number_of_bedrooms}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Number of Beds:
                  <span style={styledSpan}>
                    {propertyDetails.Number_of_beds}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Country:
                  <span style={styledSpan}>{propertyDetails.country}</span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  City:
                  <span style={styledSpan}>{propertyDetails.city}</span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Postcode/Zip Code:
                  <span style={styledSpan}>
                    {propertyDetails.Postcode_Zip_code}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Address:
                  <span style={styledSpan}>{propertyDetails.Address}</span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Hostel Bird Rating:{" "}
                  <span style={styledSpan}>{propertyDetails.AdminRating}</span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Phone Number:
                  <span style={styledSpan}>{propertyDetails.PhoneNumber}</span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Email:
                  <span style={styledSpan}>{propertyDetails?.email}</span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Sign-Up Date:
                  <span style={styledSpan}>
                    {" " + propertyDetails.DateAndTime}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Verified Property:
                  <span style={styledSpan}>
                    {" " + (propertyDetails.verifiedProperty ? "Yes" : "No")}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Property Details Verified:
                  <span style={styledSpan}>
                    {" " +
                      (propertyDetails.PropertDetailsVerified ? "Yes" : "No")}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Minimum Nights:
                  <span style={styledSpan}>
                    {propertyDetails.propertyDetails?.minimumNights}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Maximum Nights:
                  <span style={styledSpan}>
                    {propertyDetails?.propertyDetails?.maximumNights}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Weekend Minimum Nights:
                  <span style={styledSpan}>
                    {propertyDetails.propertyDetails?.weekendMinimumNights}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Check-in Time:
                  <span style={styledSpan}>
                    {propertyDetails?.propertyDetails?.checkIn}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Check-out Time:
                  <span style={styledSpan}>
                    {propertyDetails?.propertyDetails?.checkout}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Cancellation Policy:
                  <span
                    style={styledSpan}
                    onClick={() => handleClickDialog("CancellationPolicy")}
                  >
                    {propertyDetails?.propertyDetails?.CancellationPolicy.slice(
                      0,
                      10
                    ) + "..."}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Things to Note:
                  <span
                    style={styledSpan}
                    onClick={() => handleClickDialog("ThingstoNote")}
                  >
                    {propertyDetails?.propertyDetails?.ThingstoNote.slice(
                      0,
                      10
                    ) + "..."}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Facilities:
                  <span
                    style={styledSpan}
                    onClick={() => handleClickDialog("PropertyFacalities")}
                  >
                    {propertyDetails?.propertyDetails?.PropertyFacalities.join(
                      ", "
                    ).slice(0, 10) + "..."}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Services:
                  <span
                    style={styledSpan}
                    onClick={() => handleClickDialog("PropertyServices")}
                  >
                    {propertyDetails?.propertyDetails?.PropertyServices.join(
                      ", "
                    ).slice(0, 10) + "..."}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  Entertainment:
                  <span
                    style={styledSpan}
                    onClick={() => handleClickDialog("PropertyEntertainment")}
                  >
                    {propertyDetails?.propertyDetails?.PropertyEntertainment.join(
                      ", "
                    ).slice(0, 10) + "..."}
                  </span>
                </StyledText>
              </ListItem>

              <ListItem>
                <StyledText>
                  FoodAndDrinks:
                  <span
                    style={styledSpan}
                    onClick={() => handleClickDialog("FoodAndDrinks")}
                  >
                    {" " +
                      propertyDetails?.propertyDetails?.FoodAndDrinks.join(
                        ", "
                      ).slice(0, 15) +
                      "..."}
                  </span>
                </StyledText>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
      <React.Fragment>
        <Dialog open={openDialog} onClose={() => handleClickDialog(null)}>
          <DialogContent>
            <List>
              {selectedProp && (
                <Box>
                  <StyledText>{selectedProp}: </StyledText>
                  <span style={styledSpan}>
                    {"  " +
                      propertyDetails?.propertyDetails[
                        selectedProp as PropertyDetailsKey
                      ]}
                  </span>

                  <Divider />
                </Box>
              )}
            </List>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </Container>
  );
};
export default VendorPropertyDetailsPage;
