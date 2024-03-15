import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Container,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  StyledEntertainment,
  StyledFreeBox,
  StyledGeneral,
  StyledMainBox,
  StyledText,
} from "./facilities.style";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { FoodAndDrinks } from "../VendorDashboard/FacilitiesArray";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FacilitiesComponent() {
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  let cityName = pathNameArray[2];
  let PropertyNamee = pathNameArray[3];
  interface PropertyData {
    PropertyName: string;
    PropertyFacalities: string[];
    PropertyServices: string[];
    PropertyEntertainment: string[];
    FoodAndDrinks: [];
  }

  const [propertyData, setPropertyData] = useState<PropertyData>({
    PropertyName: "",
    PropertyFacalities: [],
    PropertyServices: [],
    PropertyEntertainment: [],
    FoodAndDrinks: [],
  });

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

  return (
    <>
      <Divider flexItem />
      <StyledMainBox>
        <Typography
          className={`${poppins.variable}`}
          sx={{ fontWeight: "light", fontFamily: "var(--font-poppins)" }}
          variant="h5"
        >
          Facilities
        </Typography>
        <StyledFreeBox>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <CardGiftcardIcon sx={{ color: "#FF5733", mr: "0.5rem" }} />
            <Typography
              className={`${poppins.variable}`}
              sx={{
                fontWeight: "light",
                fontFamily: "var(--font-poppins)",
                color: "#FF5733",
              }}
            >
              Free
            </Typography>{" "}
          </Box>

          <Divider
            orientation="horizontal"
            sx={{ marginTop: "1.5rem" }}
            flexItem
          />
          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridGap: "1rem",
              marginTop: "2rem",
            }}
          >
            {facilities.map((fac, index) => (
              <StyledText
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
                key={index}
              >
                {fac}
              </StyledText>
            ))}
          </Container>
        </StyledFreeBox>
        <StyledGeneral>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <CardGiftcardIcon sx={{ color: "#FF5733", mr: "0.5rem" }} />
            <Typography
              className={`${poppins.variable}`}
              sx={{
                fontWeight: "light",
                fontFamily: "var(--font-poppins)",
                color: "#FF5733",
              }}
            >
              Facilities
            </Typography>{" "}
          </Box>
          <Divider sx={{ marginTop: "1.5rem" }} flexItem />
          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridGap: "1rem",
              marginTop: "2rem",
            }}
          >
            {services.map((ser, index) => (
              <StyledText
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
                key={index}
              >
                {ser}
              </StyledText>
            ))}
          </Container>
        </StyledGeneral>
        <StyledEntertainment>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <CardGiftcardIcon sx={{ color: "#FF5733", mr: "0.5rem" }} />
            <Typography
              className={`${poppins.variable}`}
              sx={{
                fontWeight: "light",
                fontFamily: "var(--font-poppins)",
                color: "#FF5733",
              }}
            >
              Entertainment
            </Typography>{" "}
          </Box>
          <Divider sx={{ marginTop: "1.5rem" }} flexItem />
          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridGap: "1rem",
              marginTop: "2rem",
            }}
          >
            {entertainment.map((ent: string, index: number) => (
              <StyledText
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
                key={index}
              >
                {ent}
              </StyledText>
            ))}
          </Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              mt: "5rem",
            }}
          >
            <CardGiftcardIcon sx={{ color: "#FF5733", mr: "0.5rem" }} />
            <Typography
              className={`${poppins.variable}`}
              sx={{
                fontWeight: "light",
                fontFamily: "var(--font-poppins)",
                color: "#FF5733",
              }}
            >
              Food And Drinks
            </Typography>{" "}
          </Box>
          <Divider sx={{ marginTop: "1.5rem" }} flexItem />
          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridGap: "1rem",
              marginTop: "2rem",
            }}
          >
            {FoodAndDrinks.map((item: string, index: number) => (
              <StyledText
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                }}
                key={index}
              >
                {item}
              </StyledText>
            ))}
          </Container>
        </StyledEntertainment>
      </StyledMainBox>
    </>
  );
}
