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
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Location {
  id: number;
  name: string;
  country: string;
  type: string;
  latitude: number;
  longitude: number;
}

interface HotelBookingState {
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
  const isMobile = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isBig = useMediaQuery(theme.breakpoints.up("lg"));

  const [dataProps, setDataProps] = useState<HotelBookingState>({
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
          `https://api.hostelbird.com/locations/search?name=${dataProps.city}`
        );
        const data = await response.json();
        setLocations(data);
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

  const minHeight = 5;
  const calculatedHeight = Math.min(locations.length * 2.5, 100);

  return (
    <Box sx={{ zIndex: 1 }}>
      {!isSmallScreen ? (
        <Box sx={{ width: "889px" }}>
          <Paper
            elevation={5}
            sx={{
              marginTop: "-3rem",
              padding: "0.5rem 0.7rem 0.5rem 0.7rem",
              borderRadius: "10rem",
              overflow: "hidden",
              display: "flex",
              borderColor: "#cccccc",
              borderStyle: "solid",
            }}
          >
            <Grid container spacing={1} alignItems="center">
              <Grid
                item
                xs={2}
                sm={3.5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "visible",
                }}
              >
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    marginLeft: "2rem",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.8rem",
                  }}
                >
                  Where
                </Typography>
                <TextField
                  fullWidth
                  className={`${poppins.variable}`}
                  required
                  id="city"
                  placeholder="Search Destination"
                  name="city"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      fontSize: "0.9rem",
                      fontFamily: "var(--font-poppins)",
                      marginLeft: "2rem",
                    },
                  }}
                  value={dataProps?.city || ""}
                  onChange={(e) => {
                    handleTextFieldChange(e), setClickdropdown(true);
                  }}
                />
                {!!showDropDownLocation && locations.length > 0 ? (
                  <Paper
                    elevation={1}
                    tabIndex={0}
                    sx={{
                      mt: "4rem",
                      ml: "0rem",
                      maxHeight: "10rem",
                      overflowY: "auto",
                      width: "13rem",
                      fontFamily: "Raleway",
                      position: "absolute",
                      border: "1px solid #fff",
                      zIndex: 2,
                      p: "2rem",
                      borderRadius: "1rem",
                      boxShadow: "0px 4px 10px #000",
                    }}
                  >
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
                                city: location.name,
                                dataCountry: location.country,
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
                                {location.name}
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
                  </Paper>
                ) : null}
              </Grid>

              <Grid item sm={0.1} sx={{ height: "70%" }}>
                <Divider
                  sx={{
                    borderColor: "#cccccc",
                    width: "0.011px",
                  }}
                  orientation="vertical"
                />
              </Grid>
              <Grid item xs={2} sm={1.5} sx={{ ml: "1rem" }}>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    marginLeft: "0rem",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.8rem",
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
                      color: "grey",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-poppins)",
                    },
                  }}
                />
              </Grid>
              <Grid item sm={0.1} sx={{ height: "70%", ml: "0.5rem" }}>
                <Divider
                  sx={{
                    borderColor: "#cccccc",
                    width: "0.011px",
                  }}
                  orientation="vertical"
                />
              </Grid>
              <Grid item xs={2} sm={2} sx={{ ml: "1rem" }}>
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    marginLeft: "0rem",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.8rem",
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
                      color: "#808080",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-poppins)",
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
              <Grid item sm={0.1} sx={{ height: "70%", ml: "0.5rem" }}>
                <Divider
                  sx={{
                    borderColor: "#cccccc",
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
                <Typography
                  className={`${poppins.variable}`}
                  sx={{
                    marginLeft: "1rem",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.8rem",
                  }}
                >
                  Who
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
                      : `${dataProps.adults + dataProps?.children}  Guests.  ${
                          dataProps.rooms
                        } Room`
                  }
                  onClick={() => setShowDropDown(!showDropDown)}
                />
                {showDropDown && (
                  <Paper
                    elevation={15}
                    sx={{
                      mt: "4rem",
                      width: "25rem",
                      fontFamily: "Raleway",
                      position: "absolute",
                      border: "1px solid #fff",
                      zIndex: 1,
                      padding: "2rem",
                    }}
                  >
                    {["Adults", "Children", "Rooms"].map((label) => (
                      <Grid container spacing={6} key={label}>
                        <Grid item xs={3}>
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
                          xs={6}
                          container
                          ml="7rem"
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

              <Grid item xs={1} sm={1.5}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "10rem",
                    backgroundColor: "#3D66F8",
                    cursor: "pointer",
                    fontFamily: "var(--font-poppins)",
                    ml: "1.5rem",
                    width: "115px",
                  }}
                  onClick={() =>
                    router.push(
                      `/hostel/${dataProps?.dataCountry}/${dataProps?.city}?from=${dataProps?.checkin}&to=${dataProps?.checkout}&adults=${dataProps?.adults}&children=${dataProps?.children}&rooms=${dataProps?.rooms}`
                    )
                  }
                >
                  <SearchOutlinedIcon
                    sx={{ width: "1.5rem", height: "2rem", ml: "0.1rem" }}
                  />{" "}
                  <Typography sx={{ ml: "0.2rem", fontSize: "0.9rem" }}>
                    {" "}
                    Search
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <Paper sx={{ borderRadius: "1rem" }} elevation={20}>
            <StyledGrid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                borderRadius: "2rem",
                padding: "1rem 1rem 0rem 2rem",
                height: "4rem",
                width: "20rem",
              }}
              item
              xs={12}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    color: "#D2042D",
                    marginTop: "-1.2rem",
                    marginLeft: "-1rem",
                  }}
                />
                <span
                  className={`${poppins.variable}`}
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-1rem",
                    marginLeft: "0.2rem",
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 400,
                    color: "lightgrey",
                  }}
                >
                  Location
                </span>
              </Box>
              <TextField
                fullWidth
                className={`${poppins.variable}`}
                required
                id="city"
                placeholder="Enter location"
                name="city"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    color: "#000",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-poppins)",
                    fontWeight: "bolder",
                    marginLeft: "-0.5rem",
                  },
                }}
                value={dataProps?.city}
                onChange={(e) => {
                  handleTextFieldChange(e), setClickdropdown(true);
                }}
              />
              {!!showDropDownLocation && locations.length > 0 ? (
                <Paper
                  elevation={1}
                  tabIndex={0}
                  sx={{
                    mt: "15rem",
                    ml: "0rem",
                    height: "7rem",
                    overflowY: "auto",
                    width: "13rem",
                    fontFamily: "Raleway",
                    position: "absolute",
                    border: "1px solid #fff",
                    zIndex: 2,
                    p: "2rem",
                    borderRadius: "1rem",
                    boxShadow: "0px 4px 10px #000",
                  }}
                >
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
                              city: location.name,
                              dataCountry: location.country,
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
                              {location.name}
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
                </Paper>
              ) : null}
            </StyledGrid>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginTop: "0.5rem",
              borderRadius: "1rem",
            }}
            elevation={20}
          >
            <StyledGrid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                borderRadius: "2rem",
                padding: "1rem 1rem 0rem 2rem",
                height: "4rem",
                width: "20rem",
              }}
              item
              xs={12}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <PersonIcon
                  sx={{
                    color: "#D2042D",
                    marginTop: "-1.25rem",
                    marginLeft: "-1rem",
                  }}
                />
                <span
                  className={`${poppins.variable}`}
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-1rem",
                    marginLeft: "0.2rem",
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 400,
                    color: "lightgrey",
                  }}
                >
                  Guests
                </span>
              </Box>

              <TextField
                fullWidth
                required
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    color: "#000",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-poppins)",
                    fontWeight: "bolder",
                    marginLeft: "-1rem",
                  },
                }}
                className={`${poppins.variable}`}
                sx={{ marginLeft: "0.5rem" }}
                type="text"
                name="guest"
                value={
                  dataProps?.adults +
                  +dataProps?.children +
                  " Guests , " +
                  dataProps?.rooms +
                  " Rooms"
                }
                onClick={() => setShowDropDown(!showDropDown)}
              />
              {showDropDown && (
                <Paper
                  elevation={15}
                  sx={{
                    mt: "14rem",
                    ml: "-2rem",
                    width: "15rem",
                    overflow: "hidden",
                    fontFamily: "Raleway",
                    position: "absolute",
                    border: "1px solid #fff",
                    zIndex: 1,
                    padding: "2rem",
                  }}
                >
                  {["Adults", "Children", "Rooms"].map((label) => (
                    <Grid container spacing={2} key={label}>
                      <Grid item xs={3}>
                        <Typography
                          className={`${poppins.variable}`}
                          sx={{
                            fontSize: "0.8rem",
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
                        xs={9}
                        sx={{ marginTop: "-2.5rem" }}
                        container
                        ml="5rem"
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
            </StyledGrid>
          </Paper>
          <Paper
            elevation={20}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",

              marginTop: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            <StyledGrid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem 0.1rem 1rem 0.1rem",
              }}
              container
              xs={12}
            >
              <CalendarMonthOutlinedIcon
                sx={{
                  color: "#D2042D",
                  marginTop: "-2rem",
                  width: "1rem",
                  height: "1rem",
                }}
              />
              <span
                className={`${poppins.variable}`}
                style={{
                  fontSize: "0.8rem",
                  marginTop: "-2rem",
                  marginLeft: "0.2rem",
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 400,
                  color: "lightgrey",
                }}
              >
                Date
              </span>
              <TextField
                required
                id="checkin"
                name="checkin"
                variant="standard"
                inputProps={{
                  min: dataProps?.checkin ? dataProps?.checkin : null,
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    marginLeft: "-2.8rem",
                    marginTop: "1rem",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.8rem",
                    color: "#000",
                    verticalAlign: "middle",
                    fontWeight: "bolder",
                  },
                }}
                sx={{ mr: "0.1rem" }}
                type="Date"
                value={dataProps?.checkin}
                onChange={handleTextFieldChange}
              />
              <Grid container xs={1}>
                <Divider
                  sx={{ height: "2rem", marginLeft: "0.5rem" }}
                  orientation="vertical"
                />
              </Grid>

              <CalendarMonthOutlinedIcon
                sx={{
                  color: "#D2042D",
                  marginTop: "-2rem",
                  width: "1rem",
                  height: "1rem",
                }}
              />
              <span
                className={`${poppins.variable}`}
                style={{
                  fontSize: "0.8rem",
                  marginTop: "-2rem",
                  marginLeft: "0.2rem",
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 400,
                  color: "lightgrey",
                }}
              >
                Date
              </span>
              <TextField
                required
                id="checkout"
                name="checkout"
                variant="standard"
                inputProps={{
                  min: today,
                }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    marginLeft: "-3rem",
                    marginTop: "1rem",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.8rem",
                    color: "#000",
                    verticalAlign: "middle",
                    fontWeight: "bolder",
                  },
                }}
                sx={{ mr: "0.1rem" }}
                type="Date"
                value={
                  dataProps?.checkout < dataProps?.checkin
                    ? dataProps?.checkin
                    : dataProps?.checkout
                }
                onChange={handleTextFieldChange}
              />
            </StyledGrid>
          </Paper>

          <StyledGrid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                borderRadius: "1rem",
                padding: "1rem",
                backgroundColor: "#3D66F8",
                cursor: "pointer",
                fontFamily: "var(--font-poppins)",

                marginTop: "0.5rem",
              }}
              onClick={() =>
                router.push(
                  `/hostel/${dataProps?.dataCountry}/${dataProps?.city}?from=${dataProps?.checkin}&to=${dataProps?.checkout}&adults=${dataProps?.adults}&children=${dataProps?.children}&rooms=${dataProps?.rooms}`
                )
              }
            >
              Search
            </Button>
          </StyledGrid>
        </Box>
      )}
    </Box>
  );
}

export default HostelFinderSearchBox;
