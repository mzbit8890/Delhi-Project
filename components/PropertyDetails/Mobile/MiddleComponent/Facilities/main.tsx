import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { IconBox, MainBox, MapBox } from "./index.style";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import CupICon from "@/assests/PropertyDisplay/cup.png";
import CurtainIcons from "@/assests/PropertyDisplay/curatins.png";
import WifiIcon from "@/assests/PropertyDisplay/Group.png";
import MapImg from "@/assests/PropertyDisplay/TempMap.png";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface PropertyData {
  CancellationPolicy: string;
  ThingstoNote: string;
  minimumNights: number;
  maximumNights: number;
  weekendMinimumNights: number;
  checkIn: number;
  checkout: number;
  PropertyName: string;
  PropertyFacalities: string[];
  PropertyServices: string[];
  PropertyEntertainment: string[];
  FoodAndDrinks: [];
}

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function FacilitiesComponentMobile() {
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  let cityName = pathNameArray[2];
  let PropertyNamee = pathNameArray[3];
  const [propertyData, setPropertyData] = useState<PropertyData>({
    CancellationPolicy: "",
    ThingstoNote: "",
    minimumNights: 0,
    maximumNights: 0,
    weekendMinimumNights: 0,
    checkIn: 0,
    checkout: 0,
    PropertyName: "",
    PropertyFacalities: [],
    PropertyServices: [],
    PropertyEntertainment: [],
    FoodAndDrinks: [],
  });

  const [openDialogFacilities, setOpenDialogFacilities] = useState(false);
  const [openDialogRules, setOpenDialogRules] = useState(false);

  const handleDialogOpenFacility = () => {
    setOpenDialogFacilities(true);
  };

  const handleDialogCloseFacilty = () => {
    setOpenDialogFacilities(false);
  };
  const handleDialogOpenRules = () => {
    setOpenDialogRules(true);
  };

  const handleDialogCloseRules = () => {
    setOpenDialogRules(false);
  };

  useEffect(() => {
    if (cityName && PropertyNamee) {
      fetch(
        `https://api.hostelbird.com/propertyDetails/getPropertyDetails/${cityName}/${PropertyNamee}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPropertyData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [cityName, PropertyNamee]);
  if (PropertyNamee === undefined || PropertyNamee === null) {
    PropertyNamee = propertyData.PropertyName;
  }

  const facilities = propertyData.PropertyFacalities;
  const services = propertyData.PropertyServices;
  const entertainment = propertyData.PropertyEntertainment;
  const FoodsAndDrinks = propertyData.FoodAndDrinks;
  return (
    <MainBox>
      <Typography
        className={`${raleway.variable}`}
        sx={{
          fontFamily: "var(--font-raleway)",
          fontSize: "20px",
          fontWeight: 700,
        }}
      >
        FACILTIES
      </Typography>
      <IconBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={WifiIcon.src}
            alt="CupICon.png"
            loading="lazy"
            style={{
              marginTop: "0rem",
              marginLeft: "0rem",
              marginRight: "0.5rem",
              color: "#3D66F8",
            }}
            width={30}
            height={20}
          />
          <Typography
            className={`${raleway.variable}`}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontSize: "12px",
              color: "#3D66F8",
            }}
          >
            Free Wifi
          </Typography>
          <Image
            src={CupICon.src}
            alt="CupICon.png"
            loading="lazy"
            style={{
              marginTop: "-0.5rem",
              marginLeft: "1.5rem",
              marginRight: "0.5rem",
              color: "#3D66F8",
            }}
            width={25}
            height={30}
          />
          <Typography
            className={`${raleway.variable}`}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontSize: "12px",
              color: "#3D66F8",
            }}
          >
            Free Dining
          </Typography>
          <Image
            src={CurtainIcons.src}
            alt="CurtainIcons.png"
            loading="lazy"
            style={{
              marginLeft: "1rem",
              marginRight: "0.5rem",
              color: "#3D66F8",
            }}
            width={25}
            height={25}
          />
          <Typography
            className={`${raleway.variable}`}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontSize: "12px",
              color: "#3D66F8",
            }}
          >
            No Curtain
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "right",
            mt: "1rem",
            cursor: "pointer",
          }}
          onClick={handleDialogOpenFacility}
        >
          <Typography
            className={`${raleway.variable}`}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontSize: "18px",
              textDecoration: "underline",
              textAlign: "right",
              mr: "0.5rem",
            }}
          >
            Check out all the facilities
          </Typography>
          <ChevronRightOutlinedIcon />
        </Box>

        <Dialog open={openDialogFacilities} onClose={handleDialogCloseFacilty}>
          <DialogTitle
            className={`${raleway.variable}`}
            sx={{ fontFamily: "var(--font-raleway)" }}
          >
            Facilities
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    className={`${raleway.variable}`}
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    Free
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                    }}
                  >
                    {facilities.map((facility, index) => (
                      <Typography
                        className={`${raleway.variable}`}
                        sx={{
                          marginLeft: "0.5rem",
                          fontWeight: 400,
                          fontFamily: "var(--font-raleway)",
                        }}
                        key={index}
                      >
                        {facility}{" "}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    className={`${raleway.variable}`}
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    Services
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                    }}
                  >
                    {services.map((service, index) => (
                      <Typography
                        className={`${raleway.variable}`}
                        sx={{
                          marginLeft: "0.5rem",
                          fontWeight: 400,
                          fontFamily: "var(--font-raleway)",
                        }}
                        key={index}
                      >
                        {service}{" "}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    className={`${raleway.variable}`}
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    Entertainment
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "row",
                    }}
                  >
                    {entertainment.map((entertainmentItem, index) => (
                      <Typography
                        className={`${raleway.variable}`}
                        sx={{
                          marginLeft: "0.5rem",
                          fontWeight: 400,
                          fontFamily: "var(--font-raleway)",
                        }}
                        key={index}
                      >
                        {entertainmentItem}{" "}
                      </Typography>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        className={`${raleway.variable}`}
                        sx={{
                          fontFamily: "var(--font-raleway)",
                          fontSize: "18px",
                          fontWeight: 700,
                        }}
                      >
                        Foods And Drinks
                      </Typography>
                      {FoodsAndDrinks.map((item: string, index: number) => (
                        <Typography
                          className={`${raleway.variable}`}
                          sx={{
                            marginLeft: "0.5rem",
                            fontWeight: 400,
                            fontFamily: "var(--font-raleway)",
                          }}
                          key={index}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogCloseFacilty}>Close</Button>
          </DialogActions>
        </Dialog>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "start",
            mt: "1.5rem",
          }}
          onClick={handleDialogOpenRules}
        >
          <Typography
            className={`${raleway.variable}`}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontSize: "18px",
              mr: "0.5rem",
              fontWeight: 700,
            }}
          >
            RULES & POLICIES
          </Typography>
          <Typography
            className={`${raleway.variable}`}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-raleway)",
              fontSize: "18px",
              textDecoration: "underline",
              textAlign: "right",
              ml: "4.5rem",
              mt: "0.5rem",
            }}
          >
            Check out the House Rules
            <ChevronRightOutlinedIcon />
          </Typography>
        </Box>
        <Dialog open={openDialogRules} onClose={handleDialogCloseRules}>
          <DialogTitle
            className={`${raleway.variable}`}
            sx={{ fontFamily: "var(--font-raleway)" }}
          >
            Hostel Rules
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    className={`${raleway.variable}`}
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    Cancellation Policies
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    {propertyData?.CancellationPolicy}{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    className={`${raleway.variable}`}
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "18px",
                      fontWeight: 700,
                      mt: "1rem",
                    }}
                  >
                    Things to Note
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    {propertyData?.ThingstoNote}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    className={`${raleway.variable}`}
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "18px",
                      fontWeight: 700,
                      mt: "1rem",
                    }}
                  >
                    Policies
                  </Typography>
                  <Typography>
                    Check In:{" "}
                    <span
                      className={`${raleway.variable}`}
                      style={{
                        fontFamily: "var(--font-raleway)",
                        fontWeight: 900,
                      }}
                    >
                      {propertyData?.checkIn || ""}
                    </span>
                  </Typography>
                  <Typography>
                    Check Out:{" "}
                    <span
                      className={`${raleway.variable}`}
                      style={{
                        fontFamily: "var(--font-raleway)",
                        fontWeight: 900,
                      }}
                    >
                      {propertyData?.checkout || ""}
                    </span>
                  </Typography>
                  <Typography>
                    Minimum Nights:
                    <span
                      className={`${raleway.variable}`}
                      style={{
                        fontFamily: "var(--font-raleway)",
                        fontWeight: 800,
                      }}
                    >
                      {propertyData?.minimumNights || ""}
                    </span>
                  </Typography>
                  <Typography>
                    Maximum Nights:{" "}
                    <span
                      className={`${raleway.variable}`}
                      style={{
                        fontFamily: "var(--font-raleway)",
                        fontWeight: 800,
                      }}
                    >
                      {propertyData?.maximumNights || ""}
                    </span>
                  </Typography>
                  <Typography>
                    Weekend Minimum Nights:
                    <span
                      className={`${raleway.variable}`}
                      style={{
                        fontFamily: "var(--font-raleway)",
                        fontWeight: 800,
                      }}
                    >
                      {" "}
                      {propertyData?.weekendMinimumNights || ""}
                    </span>
                  </Typography>
                </Box>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogCloseRules}>Close</Button>
          </DialogActions>
        </Dialog>
      </IconBox>
      <MapBox>
        <Typography
          className={`${raleway.variable}`}
          sx={{
            fontFamily: "var(--font-raleway)",
            fontSize: "18px",
            textAlign: "right",
            mr: "0.5rem",
            fontWeight: 700,
          }}
        >
          Map
        </Typography>
        <Image
          src={MapImg}
          alt="TempMap.png"
          width={345}
          height={300}
          style={{
            margin: "0.5rem 0rem 0.5rem 0rem",
            borderRadius: "0.5rem",
            objectFit: "cover",
          }}
        />
      </MapBox>
    </MainBox>
  );
}
