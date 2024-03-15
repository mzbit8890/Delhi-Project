import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Menu,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import Link from "next/link";
import {
  StyledContainerBoxForMain,
  StyledDesText,
  StyledListItemButton,
  StyledNameText,
  StyledPaper,
} from "./index.style";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ImageIcon from "@mui/icons-material/ImageOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import AppBarforVendor from "./TopBar/VendorHomeTopBar";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { SetPropertyIdForVendorDashboard } from "@/Store/VendorSlice";
import { useDispatch } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import { Poppins } from "next/font/google";
import SuccessComponent from "../SnackBar/Success";
import FailureComponent from "../SnackBar/Failure";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function VendorDashboardComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const username = useSelector(
    (state: any) => state?.vendor?.vendorNameForVendorDashboard
  );
  const vendorName = useSelector((state: any) => state?.vendor?.VendorName);
  const properties = useSelector(
    (state: any) => state.vendor.PropertiesForVendorDashboard
  );
  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);
  const [selectedId, setselectedId] = useState(properties[0]?.id || PropertyID);

  useEffect(() => {
    dispatch(SetPropertyIdForVendorDashboard(selectedId));
  }, [selectedId, dispatch]);

  const handlePropertyChange = (e: any) => {
    const newSelectedId = e.target.value;
    setselectedId(newSelectedId);
  };

  const isComplete = useSelector((state: any) => state.property.isComplete);

  const selectedProperty = properties.find(
    (property: any) => property?.id === PropertyID
  );

  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";

  const [rooms, setRooms] = useState(0);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/rooms/getRooms/${SelectedPropertyName}/all`
        );
        if (!response.ok) {
          alert(response.statusText);
          throw new Error("Failed to fetch rooms");
        }

        const data = await response.json();

        setRooms(data.length);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
      }
    };

    fetchRooms();
  }, [SelectedPropertyName]);
  const weights = {
    PropertyImages: 25,
    PropertyDescription: 25,
    PropertyEntertainment: 6.25,
    PropertyServices: 6.25,
    FoodAndDrinks: 6.25,
    PropertyFacalities: 6.25,
    checkIn: 12.5,
    checkout: 12.5,
  };

  const overallProgress = Object.keys(isComplete).reduce(
    (progress, property) => {
      return (
        progress +
        (isComplete[property] ? weights[property as keyof typeof weights] : 0)
      );
    },
    0
  );
  const roundedProgress = Math.ceil(overallProgress);

  const UpdateValue = useSelector((state: any) => state.vendor?.successValue);

  return (
    <>
      <AppBarforVendor />
      {UpdateValue === "success" ? (
        <SuccessComponent message="Details Updated Success" />
      ) : UpdateValue === "error" ? (
        <FailureComponent />
      ) : UpdateValue === "close" ? (
        ""
      ) : UpdateValue === "LoginSuccess" ? (
        <SuccessComponent message="Login Success" />
      ) : (
        ""
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: "2rem",
        }}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          className={`${poppins.variable}`}
          sx={{
            textAlign: "center",

            fontFamily: "var(--font-poppins)",
          }}
        >
          {roundedProgress === 100
            ? "Yah! Your Property Profile is complete"
            : "Complete your property now!"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={roundedProgress}
            sx={{
              width: "50rem",
              backgroundColor: "grey",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "green",
              },
            }}
          />
          <Typography
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)", ml: "1rem" }}
          >
            {roundedProgress}%
          </Typography>
        </Box>
      </Box>

      <StyledContainerBoxForMain>
        <StyledPaper elevation={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              m: "2rem",
            }}
          >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
                id="demo-simple-select-standard-label"
              >
                Property
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedId || ""}
                onChange={handlePropertyChange}
                label="Property"
              >
                {properties.map((property: any) => (
                  <MenuItem key={property?.id} value={property.id}>
                    <Typography
                      key={property?.id}
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
          </Box>

          <Box
            sx={{
              margin: "-4rem 5rem 5rem 5rem ",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              className={`${poppins.variable}`}
              sx={{ fontWeight: "bold", fontFamily: "var(--font-poppins)" }}
              variant="h4"
            >
              Vendor Design Center
            </Typography>
            <Typography
              className={`${poppins.variable}`}
              sx={{ fontWeight: "light", fontFamily: "var(--font-poppins)" }}
              variant="h6"
            >
              Setup your property by completing these quick steps
            </Typography>
            <List sx={{ width: "85%", marginTop: "3rem" }}>
              <ListItem sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <StyledListItemButton
                    onClick={() =>
                      router.push(`/dashboard/${vendorName}/UpdateDetails`)
                    }
                  >
                    <Box>
                      <DescriptionOutlinedIcon
                        sx={{ color: "purple", height: "3rem", width: "3rem" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StyledNameText
                        className={`${poppins.variable}`}
                        sx={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Update Details
                      </StyledNameText>
                      <StyledDesText
                        className={`${poppins.variable}`}
                        sx={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Inspire your guest and let them know what they will find
                        upon arrival
                      </StyledDesText>
                    </Box>

                    <Box>
                      {isComplete.PropertyDescription ? (
                        <CheckCircleOutlinedIcon
                          sx={{ color: "green", width: "3rem", height: "3rem" }}
                        />
                      ) : (
                        <WarningAmberOutlinedIcon
                          sx={{
                            color: "#8B8000",
                            width: "3rem",
                            height: "3rem",
                          }}
                        />
                      )}
                    </Box>
                  </StyledListItemButton>
                </Box>

                <StyledListItemButton
                  onClick={() =>
                    router.push(`/dashboard/${vendorName}/UploadImages`)
                  }
                >
                  <Box>
                    <ImageIcon
                      sx={{ color: "purple", height: "3rem", width: "3rem" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StyledNameText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Upload Property Images
                    </StyledNameText>
                    <StyledDesText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Show How beautiful you property is
                    </StyledDesText>
                  </Box>
                  <Box>
                    {isComplete.PropertyImages ? (
                      <CheckCircleOutlinedIcon
                        sx={{ color: "green", width: "3rem", height: "3rem" }}
                      />
                    ) : (
                      <WarningAmberOutlinedIcon
                        sx={{
                          color: "#8B8000",
                          width: "3rem",
                          height: "3rem",
                        }}
                      />
                    )}
                  </Box>
                </StyledListItemButton>
                <StyledListItemButton
                  onClick={() =>
                    router.push(`/dashboard/${vendorName}/ListFacilities`)
                  }
                >
                  <Box>
                    <DesignServicesOutlinedIcon
                      sx={{ color: "purple", height: "3rem", width: "3rem" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StyledNameText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      List Property Facilities
                    </StyledNameText>
                    <StyledDesText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Select Facilities that Your Property Provide
                    </StyledDesText>
                  </Box>
                  <Box>
                    {isComplete.PropertyEntertainment ||
                    isComplete.PropertyEntertainment ? (
                      <CheckCircleOutlinedIcon
                        sx={{ color: "green", width: "3rem", height: "3rem" }}
                      />
                    ) : (
                      <WarningAmberOutlinedIcon
                        sx={{
                          color: "#8B8000",
                          width: "3rem",
                          height: "3rem",
                        }}
                      />
                    )}
                  </Box>
                </StyledListItemButton>
                <StyledListItemButton
                  onClick={() =>
                    router.push(`/dashboard/${vendorName}/createRooms`)
                  }
                >
                  <Box>
                    <BedOutlinedIcon
                      sx={{ color: "purple", height: "3rem", width: "3rem" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StyledNameText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Create Room For Property
                    </StyledNameText>
                    <StyledDesText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Define Your Room and pricing for each room
                    </StyledDesText>
                  </Box>
                  <Box>
                    {rooms > 0 ? (
                      <CheckCircleOutlinedIcon
                        sx={{ color: "green", width: "3rem", height: "3rem" }}
                      />
                    ) : (
                      <WarningAmberOutlinedIcon
                        sx={{
                          color: "#8B8000",
                          width: "3rem",
                          height: "3rem",
                        }}
                      />
                    )}
                  </Box>
                </StyledListItemButton>
                <StyledListItemButton
                  onClick={() =>
                    router.push(`/dashboard/${vendorName}/UpdatePolicies`)
                  }
                >
                  <Box>
                    <PolicyOutlinedIcon
                      sx={{ color: "purple", height: "3rem", width: "3rem" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StyledNameText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Update Policies{" "}
                    </StyledNameText>
                    <StyledDesText
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Define Your Property Rules like checkIn,checkOut time and
                      much more
                    </StyledDesText>
                  </Box>
                  <Box>
                    {isComplete.checkIn && isComplete.checkout ? (
                      <CheckCircleOutlinedIcon
                        sx={{ color: "green", width: "3rem", height: "3rem" }}
                      />
                    ) : (
                      <WarningAmberOutlinedIcon
                        sx={{
                          color: "#8B8000",
                          width: "3rem",
                          height: "3rem",
                        }}
                      />
                    )}
                  </Box>
                </StyledListItemButton>
              </ListItem>
            </List>
          </Box>
        </StyledPaper>
      </StyledContainerBoxForMain>
    </>
  );
}
