import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import CupICon from "@/assests/PropertyDisplay/cup.png";
import CurtainIcons from "@/assests/PropertyDisplay/curatins.png";
import WifiIcon from "@/assests/PropertyDisplay/Group.png";
import Image from "next/image";
import DistanceIcon from "@/assests/PropertyDisplay/locationOrange.png";
import { DialogProps, Box, Rating, Typography, Button } from "@mui/material";
import {
  ImageBox,
  DetailsBox,
  PropertyNameText,
  IconBox,
  IconText,
  RatingBox,
  DesprictionText,
} from "./index.style";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const DetailsCompoentMobile = () => {
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
  const [isSliced, setIsSliced] = useState(true);
  const handleToggle = () => {
    setIsSliced((prev) => !prev);
  };
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
        setLoading(false);
      }
    };

    fetchData();
  }, [cityName, PropertyName]);
  return (
    <>
      <ImageBox>
        <Carousel indicators={false} sx={{ width: "100%" }}>
          {propertyData?.PropertyImages.map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={`image ${index}`}
              width={100}
              height={200}
              style={{
                width: "345px",
                height: "200px",
                borderRadius: "0.5rem",
                objectFit: "cover",
              }}
            />
          ))}
        </Carousel>
      </ImageBox>
      <DetailsBox>
        <PropertyNameText
          className={`${raleway.variable}`}
          sx={{
            fontFamily: "var(--font-raleway)",
            fontSize: "24px",
          }}
        >
          {propertyData?.PropertyName}
        </PropertyNameText>
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
            <IconText
              className={`${raleway.variable}`}
              sx={{
                fontFamily: "var(--font-raleway)",
              }}
            >
              Free Wifi
            </IconText>
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
            <IconText
              className={`${raleway.variable}`}
              sx={{
                fontFamily: "var(--font-raleway)",
              }}
            >
              Free Dining
            </IconText>
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
            <IconText
              className={`${raleway.variable}`}
              sx={{
                fontFamily: "var(--font-raleway)",
              }}
            >
              No Curtain
            </IconText>
          </Box>
        </IconBox>
        <RatingBox>
          <Box
            sx={{
              borderRadius: "0.3rem",
              p: "0.3rem",
              backgroundColor: "#F4D35E",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {Number.isInteger(hostel?.AdminRating / 2)
              ? hostel?.AdminRating / 2 + ".00"
              : (hostel?.AdminRating / 2).toFixed(2)} */}
            4.33
          </Box>
          <Rating
            name="read-only"
            //value={hostel?.AdminRating / 2}
            precision={0.5}
            readOnly
            sx={{ ml: "0.3rem" }}
          />
          <Image
            src={DistanceIcon.src}
            alt="DistanceIcon.png"
            loading="lazy"
            style={{
              marginRight: "0.5rem",
              marginLeft: "1rem",
            }}
            width={25}
            height={25}
          />
          <Typography
            className={`${raleway.variable}`}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontSize: "14px",
            }}
          >
            Around 1.8mil
          </Typography>
        </RatingBox>
        <DesprictionText
          className={`${raleway.variable}`}
          sx={{
            fontFamily: "var(--font-raleway)",
          }}
        >
          {isSliced ? (
            <>
              {propertyData?.PropertyDescription.slice(0, 1000)}
              <Button
                variant="text"
                sx={{ color: "#000" }}
                onClick={handleToggle}
              >
                {isSliced ? "....." : ""}
              </Button>
            </>
          ) : (
            <>
              {propertyData?.PropertyDescription}
              <Button
                variant="text"
                sx={{ color: "#000" }}
                onClick={handleToggle}
              >
                {!isSliced ? "Show Less" : ""}
              </Button>
            </>
          )}
        </DesprictionText>
      </DetailsBox>
    </>
  );
};

export default DetailsCompoentMobile;
