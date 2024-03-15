import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import searchicon from "@/assests/PropertyDisplay/search-normal.png";
import { MainBox } from "./Search.style";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CalenderIcon from "@/assests/PropertyDisplay/calendar.png";
import { StyledSubGrid, StyledMainGrid } from "./Search.style";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@/assests/PropertyDisplay/profile-2user.png";
import LocaionIcon from "@/assests/PropertyDisplay/location.png";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { addDays, format } from "date-fns";
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

export default function SearchBoxComponentHostel() {
  const pathName = usePathname();
  const urlArray = pathName.split("/");
  const urlNeededforCityName = urlArray[3];
  const urlNeededforCountryName = urlArray[2];
  const today = new Date().toISOString().split("T")[0];
  const todayy = new Date();
  const tomorrow = addDays(todayy, 1);
  const tomorrowString = format(tomorrow, "yyyy-MM-dd");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isBig = useMediaQuery(theme.breakpoints.up("lg"));
  const [dataProps, setDataProps] = useState<HotelBookingState>({
    city: urlNeededforCityName,
    dataCountry: urlNeededforCountryName,
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
  }, [dataProps.city, clickdropdown]);

  return (
    <MainBox>
      <StyledMainGrid spacing={1} container>
        <StyledSubGrid xs={12} md={3} lg={3} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
            }}
          >
            <Image
              src={LocaionIcon}
              alt="location.png"
              loading="lazy"
              width={25}
              height={25}
              style={{ marginTop: "0.5rem", marginRight: "0.5rem" }}
            />
            <TextField
              className={`${poppins.variable}`}
              label={
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.9rem",
                  }}
                >
                  Location
                </Typography>
              }
              fullWidth
              required
              id="city"
              placeholder="Enter location"
              name="city"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: isBig ? "0.85rem" : "0.7rem",
                  fontFamily: "var(--font-poppins)",
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
                sx={{
                  mt: "3rem",
                  ml: "-3rem",
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
          </Box>
        </StyledSubGrid>

        <StyledSubGrid
          sx={
            isSmallMobile || isMobile
              ? { mt: "1rem" }
              : isBig
              ? { ml: "-2rem" }
              : { ml: "-5rem" }
          }
          xs={4}
          md={3}
          lg={3}
          item
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={PersonIcon}
              alt="person.png"
              loading="lazy"
              width={25}
              height={25}
              style={{ marginTop: "0.5rem" }}
            />
            <TextField
              className={`${poppins.variable}`}
              label={
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.9rem",
                  }}
                >
                  Guests
                </Typography>
              }
              fullWidth
              required
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  color: "#000",
                  fontWeight: 400,
                  fontSize: isBig ? "0.85rem" : "0.7rem",
                  fontFamily: "var(--font-poppins)",
                },
              }}
              sx={{ ml: "1rem" }}
              type="text"
              name="guest"
              value={
                dataProps?.adults +
                dataProps?.children +
                " Adults " +
                dataProps?.rooms +
                " rooms"
              }
              onClick={() => setShowDropDown(!showDropDown)}
            />
            {showDropDown && (
              <Paper
                elevation={15}
                sx={{
                  mt: "3rem",
                  ml: "-2rem",
                  width: "18rem",
                  fontFamily: "Raleway",
                  position: "absolute",
                  border: "1px solid #fff",
                  zIndex: 1,
                  padding: "2rem",
                }}
              >
                {["Adults", "Children", "Rooms"].map((label) => (
                  <Grid container key={label}>
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
                      xs={10}
                      sx={{ mt: "-2rem" }}
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
          </Box>
        </StyledSubGrid>

        <StyledSubGrid
          sx={isBig || isTab ? { marginLeft: "0rem" } : {}}
          xs={4}
          md={5}
          lg={5}
          item
        >
          <Box
            sx={
              isBig || isTab
                ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
                : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }
            }
          >
            <Image
              src={CalenderIcon}
              alt="calendericon.png"
              style={{ marginTop: "-0.4rem", marginRight: "1rem" }}
              width={25}
              height={25}
              loading="lazy"
            />
            <TextField
              fullWidth
              id="checkin"
              label={
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.9rem",
                  }}
                >
                  Check-In
                </Typography>
              }
              required
              name="checkin"
              type="Date"
              value={dataProps?.checkin || today}
              onChange={handleTextFieldChange}
              variant="standard"
              inputProps={{
                min: today,
              }}
              InputProps={{
                disableUnderline: true,
                style: {
                  color: "#000",
                  fontWeight: 400,
                  fontFamily: "var(--font-poppins)",
                  fontSize: isBig ? "0.9rem" : "0.7rem",
                },
              }}
            />

            <TextField
              fullWidth
              id="checkout"
              sx={isSmallMobile || isMobile ? { ml: "1rem" } : { ml: "1rem" }}
              label={
                <Typography
                  sx={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.8rem",
                  }}
                >
                  Check-Out
                </Typography>
              }
              required
              name="checkout"
              type="Date"
              value={dataProps?.checkout || tomorrowString}
              onChange={handleTextFieldChange}
              variant="standard"
              inputProps={{
                min: dataProps?.checkin,
              }}
              InputProps={{
                disableUnderline: true,
                style: {
                  color: "#000",

                  fontSize: isBig ? "0.9rem" : "0.7rem",
                  fontFamily: "var(--font-poppins)",
                },
              }}
            />
          </Box>
        </StyledSubGrid>
      </StyledMainGrid>

      <StyledSubGrid
        sx={
          isBig || isTab
            ? { ml: "1.5rem", mt: "0rem" }
            : isMobile
            ? { ml: "12rem", mt: "1rem" }
            : isSmallMobile
            ? { ml: "3rem", mt: "1rem" }
            : {}
        }
        xs={12}
        md={1}
        lg={1}
        item
      >
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={
            isBig || isTab
              ? {
                  borderRadius: "0.5rem",
                  marginTop: "0rem",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-poppins)",
                  marginLeft: "-7rem",
                  width: "2px",
                  mt: "-1rem",
                }
              : {
                  borderRadius: "0.5rem",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-poppins)",
                  marginLeft: "-1rem",
                  position: "absolute",
                  width: "10px",
                  top: 10,
                  right: 20,
                }
          }
          onClick={() =>
            router.push(
              `/hostel/${dataProps?.dataCountry}/${dataProps?.city}?from=${dataProps?.checkin}&to=${dataProps?.checkin}&adults=${dataProps?.adults}&children=${dataProps?.children}&rooms=${dataProps?.rooms}`
            )
          }
        >
          <SearchIcon sx={{ color: "#F65656" }} />
        </Button>
      </StyledSubGrid>
    </MainBox>
  );
}
