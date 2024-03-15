import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  Box,
  FormControl,
  Input,
  InputLabel,
  useTheme,
} from "@mui/material";

import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EastIcon from "@mui/icons-material/East";
import PlaceIcon from "@mui/icons-material/Place";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { addDays, format } from "date-fns";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Raleway } from "next/font/google";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { StyledGrid } from "./search.style";
import { NodeNextRequest } from "next/dist/server/base-http/node";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Location {
  id: number;
  city: string;
  country: string;
  type: string;
  latitude: number;
  longitude: number;
}

interface Property {
  property_entity_PropertyName: string;
  property_entity_city: string;
  property_entity_id: string;
}

interface HotelBookingState {
  property: string;
  propertycity: string;
  city: string;
  dataCountry: string;
  checkin: string;
  checkout: string;
  adults: number;
  children: number;
  rooms: number;
}
const today = new Date().toISOString().split("T")[0];
const todayy = new Date();
const tomorrow = addDays(todayy, 1);
const tomorrowString = format(tomorrow, "yyyy-MM-dd");

function HostelFinderSearchBox() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isBig = useMediaQuery(theme.breakpoints.up("lg"));

  const [dataProps, setDataProps] = useState<HotelBookingState>({
    property: "",
    propertycity: "",
    city: "",
    dataCountry: "",
    checkin: today,
    checkout: tomorrowString,
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const router = useRouter();
  const [locations, setLocations] = useState<Location[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  // console.log("locations: ", locations);
  // console.log("properties: ", properties);

  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownLocation, setShowDropDownLocation] = useState(false);

  const handleIncrement = (field: keyof HotelBookingState) => {
    setDataProps((prevData) => ({
      ...prevData,
      [field]: (prevData[field] as number) + 1,
    }));
  };

  const handleDecrement = (field: keyof HotelBookingState) => {
    setDataProps((prevData) => ({
      ...prevData,
      [field]: Math.max(0, (prevData[field] as number) - 1),
    }));
  };

  const handleTextFieldChange = (event: any) => {
    const { name, value } = event.target;
    // console.log(name, value);

    setDataProps((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [clickdropdown, setClickdropdown] = useState(false);
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/locations/autocomplete?query=${dataProps.city}`
        );
        const data = await response.json();
        setLocations(data.locations);
        setProperties(data.properties);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    if (dataProps.city.trim() !== "" && clickdropdown) {
      fetchLocations();
      setShowDropDownLocation(true);
    } else {
      setLocations([]);
    }
  }, [dataProps.city]);

  // const minHeight = 5;
  // const calculatedHeight = Math.min(locations.length * 2.5, 100);

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Paper
          elevation={5}
          sx={{
            backgroundColor: "transparent",
            padding: "0.5rem 0.7rem 0.5rem 0.7rem",
            overflow: "hidden",
            display: "flex",
            border: "1px solid #FFFFFF80",
          }}
        >
          <Grid container spacing={1} alignItems="center">
            <Grid
              item
              xs={7.5}
              sm={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "visible",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PlaceIcon sx={{ color: "white" }} />
                <Box>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{
                      marginLeft: "1rem",
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1rem",
                      color: "#FFFFFF8C",
                      opacity : "55%"
                    }}
                  >
                    Where do you want to go?
                  </Typography>
                  <TextField
                    fullWidth
                    className={`${poppins.variable}`}
                    required
                    id="city"
                    placeholder="Search Destination"
                    name="city"
                    variant="standard"
                    autoComplete="off"
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        fontFamily: "var(--font-poppins)",
                        marginLeft: "1rem",
                        fontSize: "1rem",
                        color: "white",
                        width: "80%",
                      },
                    }}
                    value={dataProps?.city || dataProps?.property || ""}
                    onFocus={() => {
                      setShowDropDownLocation((prev) => !prev),
                        setShowDropDown(false);
                    }}
                    onChange={(e) => {
                      setDataProps((prev) => ({
                        ...prev,
                        city: "",
                        property: "",
                      }));
                      handleTextFieldChange(e), setClickdropdown(true);
                    }}
                  />
                </Box>
              </Box>
              {!!showDropDownLocation &&
              (locations?.length > 0 || properties?.length > 0) ? (
                <Paper
                  elevation={1}
                  tabIndex={0}
                  sx={{
                    mt: "4.5rem",
                    ml: "0rem",
                    maxHeight: "10rem",
                    overflowY: "auto",
                    width: { xs: "13rem", lg: "25rem" },
                    fontFamily: "Raleway",
                    position: "absolute",
                    zIndex: 2,
                    p: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0px 4px 10px #000",
                  }}
                >
                  <Typography variant="h6">Locations</Typography>
                  {locations &&
                    locations?.map((location) => (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                          onClick={() => {
                            setDataProps((prevState) => ({
                              ...prevState,
                              city: location.city,
                              dataCountry: location.country,
                            }));
                            setDataProps((prev) => ({
                              ...prev,
                              property: "",
                            }));
                            setShowDropDownLocation(false);
                          }}
                        >
                          <ApartmentOutlinedIcon
                            sx={{
                              width: "1rem",
                              height: "1rem",
                              marginRight: "1rem",
                            }}
                          />
                          <Box key={location.id}>
                            <Typography
                              className={`${poppins.variable}`}
                              sx={{
                                color: "#000",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontFamily: "var(--font-poppins)",
                                py: "0.5rem",
                                "&:hover": {
                                  background: "#f0f0f0",
                                },
                              }}
                              autoFocus={true}
                            >
                              {location.city}
                            </Typography>
                            <Typography
                              className={`${poppins.variable}`}
                              sx={{
                                marginLeft: "0rem",
                                marginTop: "-0.5rem",
                                fontWeight: "lighter",
                                fontFamily: "var(--font-poppins)",
                              }}
                            >
                              {location.country}
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    ))}
                  <Divider sx={{ my: 5 }} />
                  <Typography variant="h6">Properties</Typography>
                  {properties &&
                    properties?.map((property) => (
                      <>
                        <Box
                          sx={{
                            mt: "10px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                          onClick={() => {
                            setDataProps((prevState) => ({
                              ...prevState,
                              propertycity: property.property_entity_city,
                              property: property.property_entity_PropertyName,
                            }));
                            setDataProps((prev) => ({
                              ...prev,
                              city: "",
                            }));
                            setShowDropDownLocation(false);
                          }}
                        >
                          <HomeOutlinedIcon
                            sx={{
                              width: "1rem",
                              height: "1rem",
                              marginRight: "1rem",
                            }}
                          />
                          <Box key={property.property_entity_id}>
                            <Typography
                              className={`${poppins.variable}`}
                              sx={{
                                color: "#000",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontFamily: "var(--font-poppins)",
                                py: "0.5rem",
                                "&:hover": {
                                  background: "#f0f0f0",
                                },
                              }}
                              autoFocus={true}
                            >
                              {property.property_entity_PropertyName}
                            </Typography>
                            <Typography
                              className={`${poppins.variable}`}
                              sx={{
                                marginLeft: "0rem",
                                marginTop: "-0.5rem",
                                fontWeight: "lighter",
                                fontFamily: "var(--font-poppins)",
                              }}
                            >
                              {property.property_entity_city}
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    ))}
                </Paper>
              ) : null}
            </Grid>

            <Grid item xs={0.1} sx={{ height: { xs: "20%", lg: "70%" } }}>
              <Divider
                sx={{
                  border: "1px solid #FFFFFF80",
                  width: "0.011px",
                }}
                orientation="vertical"
              />
            </Grid>

            <Grid
              item
              xs={3}
              sm={2}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box ml={2.5} sx={{ display: "flex", alignItems: "center" }}>
                <GroupsIcon sx={{ color: "white" }} />
                <Box>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{
                      marginLeft: "1rem",
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1rem",
                      color: "#FFFFFF8C",
                    }}
                  >
                    Guests
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-poppins)",
                        color: "white",
                      },
                    }}
                    className={`${poppins.variable}`}
                    sx={{ ml: "1rem" }}
                    type="text"
                    name="guest"
                    placeholder="Add guests"
                    value={
                      dataProps.adults === 0 &&
                      dataProps.children === 0 &&
                      dataProps.rooms === 0
                        ? ""
                        : `${dataProps.adults + dataProps?.children}`
                      // `Guests ${
                      //   dataProps.rooms
                      // } Room`
                    }
                    onClick={() => (
                      setShowDropDown(!showDropDown),
                      setShowDropDownLocation(false)
                    )}
                  />
                </Box>
              </Box>
              {showDropDown && (
                <Paper
                  elevation={15}
                  sx={{
                    mt: "4rem",
                    width: "18rem",
                    fontFamily: "Raleway",
                    position: "absolute",
                    left: "0",
                    zIndex: 1,
                    padding: "2rem",
                  }}
                >
                  {["Adults", "Children"].map((label) => (
                    <Grid container spacing={6} key={label}>
                      <Grid item xs={2}>
                        <Typography
                          className={`${poppins.variable}`}
                          sx={{
                            color: "grey",
                            fontWeight: "light",
                            fontFamily: "var(--font-poppins)",
                          }}
                        >
                          {label}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        container
                        justifyContent="flex-end"
                        alignItems="center"
                      >
                        <Button
                          onClick={() =>
                            handleDecrement(
                              label.toLowerCase() as keyof HotelBookingState
                            )
                          }
                        >
                          <RemoveIcon
                            sx={{
                              border: "1px solid",
                              borderRadius: "50%",
                              borderColor: "#000",
                              color: "#000",
                            }}
                          />
                        </Button>

                        <Typography
                          className={`${poppins.variable}`}
                          sx={{
                            fontFamily: "var(--font-poppins)",
                            color: "grey",
                          }}
                        >
                          {
                            dataProps[
                              label.toLowerCase() as keyof HotelBookingState
                            ]
                          }{" "}
                        </Typography>

                        <Button
                          onClick={() =>
                            handleIncrement(
                              label.toLowerCase() as keyof HotelBookingState
                            )
                          }
                        >
                          <AddIcon
                            sx={{
                              border: "1px solid",
                              borderRadius: "50%",
                              borderColor: "#000",
                              color: "#000",
                            }}
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  ))}
                </Paper>
              )}
            </Grid>

            <Grid
              item
              sm={0.1}
              sx={{ height: "70%", display: { xs: "none", lg: "block" } }}
            >
              <Divider
                sx={{
                  border: "1px solid #FFFFFF80",
                  width: "0.011px",
                }}
                orientation="vertical"
              />
            </Grid>

            <Grid item xs={4} sm={1.5} sx={{ ml: { xs: "0rem", lg: "1rem" } }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CalendarMonthIcon sx={{ color: "white" }} />
                <Box>
                  <Typography
                    className={`${poppins.variable}`}
                    sx={{
                      // marginLeft: "1rem",
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1rem",
                      color: "#FFFFFF8C",
                    }}
                  >
                    Check in
                  </Typography>
                  <TextField
                    fullWidth
                    id="checkin"
                    required
                    name="checkin"
                    type="date"
                    value={dataProps?.checkin || today}
                    onChange={handleTextFieldChange}
                    variant="standard"
                    inputProps={{
                      min: today,
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        // marginLeft: "1rem",
                        color: "white",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-poppins)",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={0.5}
              lg={0.5}
              sx={{
                height: { xs: "15%", lg: "70%" },
                ml: { xs: "0rem", lg: "0.5rem" },
              }}
            >
              <EastIcon sx={{ color: "white", marginLeft: "40px" }} />
            </Grid>

            <Grid item xs={4} sm={1.5} sx={{ ml: { xs: "6rem", lg: "3rem" } }}>
              <Typography
                className={`${poppins.variable}`}
                sx={{
                  marginLeft: "0rem",
                  fontFamily: "var(--font-poppins)",
                  fontSize: "1rem",
                  color: "#FFFFFF8C",
                }}
              >
                Check out
              </Typography>
              <TextField
                fullWidth
                required
                id="checkout"
                name="checkout"
                variant="standard"
                inputProps={{
                  min: dataProps?.checkin ? dataProps?.checkin : null,
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-poppins)",
                    color: "white",
                  },
                }}
                sx={{ mr: "0.1rem" }}
                type="date"
                value={
                  dataProps?.checkout < dataProps?.checkin
                    ? dataProps?.checkin
                    : dataProps?.checkout
                }
                onChange={handleTextFieldChange}
              />
            </Grid>

            <Grid item xs={12} sm={1.5}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#F65656",
                  cursor: "pointer",
                  fontFamily: "var(--font-poppins)",
                  ml: { xs: 0, lg: "1.5rem" },
                  width: { xs: "100%", lg: "115px" },
                }}
                onClick={() =>
                  router.push(
                    `/hostel/${dataProps?.dataCountry}/${dataProps?.city}?from=${dataProps?.checkin}&to=${dataProps?.checkout}&adults=${dataProps?.adults}&children=${dataProps?.children}&rooms=${dataProps?.rooms}`
                  )
                }
              >
                <Typography sx={{ fontSize: "0.9rem" }}>Lets Go!</Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default HostelFinderSearchBox;
