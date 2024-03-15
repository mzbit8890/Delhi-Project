"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Paper,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
  Skeleton,
  Grid,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import {
  BottomBox,
  IconBox,
  ImageBox,
  MainBox,
  MiddleBox,
  PriceBox,
  PropertyDetailsBox,
  PropertyInnerStyledBox,
  PropertyStyledBox,
  PropertyStyledDistance,
  PropertyStyledDistanceBox,
  PropertyStyledPaper,
  PropertyStyledPrices,
  PropertyStyledPropertyName,
} from "./Properties.style";

import FeaturedProperties from "./FeaturedProperty/FeaturedProperties";

import Image from "next/image";
import { resetRoomPrice } from "@/Store/PropertySlice";
import Pagination from "@mui/material/Pagination";
import Carousel from "react-material-ui-carousel";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";

import AirIcon from "@mui/icons-material/Air";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import PlaceIcon from "@mui/icons-material/Place";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import TvOutlinedIcon from "@mui/icons-material/Tv";
import "@fontsource/raleway/700.css";
import { useSearchParams } from "next/navigation";
import Goals from "./Goals/Goals";

import DistanceIcon from "@/assests/PropertyDisplay/locationOrange.png";
import "@fontsource/raleway/700.css";

import {
  AddressSkeleton,
  BottomBoxSkelton,
  ButtonSkeleton,
  DetailsBox,
  IconSkeleton,
  ImageSkeleton,
  OtherSkeleton,
  PriceBoxSkelton,
  PriceSkeleton,
  StyledPaper,
} from "./skeleton.style";
import { useDispatch } from "react-redux";
import { setPropertyRating } from "@/Store/PropertySlice";
import dynamic from "next/dynamic";
const FilterBox = dynamic(() => import("./FilterBox/FilterBox"), {
  ssr: false,
});
const TopBarListProperties = dynamic(() => import("./TopBar/Topbar"), {
  ssr: false,
});
interface PropertyInterface {
  city: string;
  PropertyName: string;
  RoomPriceStartFrom: any;
  DormsPriceStartFrom: any;
  distanceFromMainCity: any;
  distanceFromAirport: any;
  Postcode_Zip_code: any;
  country: string;
  Address: string;
  AdminRating: number;
  PropertyImages: string[];
}

const PropertyPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isBig = useMediaQuery(theme.breakpoints.up("lg"));

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    ...(isSmallMobile
      ? {
          width: "100%",
          height: "13rem",
          borderRadius: "0.5rem 0.5rem 0 0",
        }
      : {}),
    // ...(isTab
    //   ? {
    //       width: "100%",
    //       height: "20rem",
    //       margin: "5rem 1rem 0rem 0rem",
    //       borderRadius: "0.5rem 0.5rem 0 0",
    //     }
    //   : {}),
    // ...(isMobile
    //   ? {
    //       minWidth: "22.5rem",
    //       height: "20rem",
    //       borderRadius: "0.5rem 0.5rem 0 0",
    //     }
    //   : {}),
    ...(isBig ? { width: "90%", height: "200px", borderRadius: "25px" } : {}),
  };

  const pathName = usePathname();
  const urlArray = pathName.split("/");
  const urlNeededforCountryName = urlArray[2];
  const urlNeededforCityName = urlArray[3];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();

  let from = searchParams.get("from");
  let to = searchParams.get("to");
  let Adults = searchParams.get("adults");
  let children = searchParams.get("children");
  let room = searchParams.get("rooms");

  const [hostelData, setHostelData] = useState<PropertyInterface[]>([]);
  const pageSize = 10;

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.hostelbird.com/property/${urlNeededforCountryName}/${urlNeededforCityName}`
        );

        if (!response.ok) {
          setError(true);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHostelData(data.slice(pagination.from, pagination.to));
        setPagination({
          ...pagination,
          count: data.length,
        });
      } catch (error) {
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, [
    pagination.from,
    pagination.to,
    urlNeededforCityName,
    urlNeededforCountryName,
  ]);

  if (error) {
    return <Box>Error occurred: {error}</Box>;
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from, to });
  };

  const PropertySkeleton = () => (
    <PropertyStyledPaper elevation={2}>
      <DetailsBox>
        <Box>
          <ImageSkeleton variant="rounded" sx={{ borderRadius: "1rem" }} />
        </Box>
        <Box>
          <IconSkeleton variant="text" />
          <OtherSkeleton variant="text" />
          <AddressSkeleton variant="text" />
          <BottomBoxSkelton>
            <ButtonSkeleton variant="text" />
            <PriceBoxSkelton>
              <PriceSkeleton variant="text" />
              <PriceSkeleton variant="text" />
            </PriceBoxSkelton>
          </BottomBoxSkelton>
        </Box>
      </DetailsBox>
    </PropertyStyledPaper>
  );

  if (loading) {
    return (
      <>
        <TopBarListProperties />
        {Object.keys(hostelData).map((propertyKey) => (
          <PropertySkeleton key={propertyKey} />
        ))}
      </>
    );
  }

  return (
    <Box
      mx={{ xs: 1, lg: 4 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "0rem",
      }}
    >
      {hostelData.length > 0 &&
        hostelData?.map((hostel, index) => {
          return (
            <MainBox key={index}>
              <PropertyStyledBox>
                <PropertyStyledPaper elevation={2}>
                  <PropertyInnerStyledBox>
                    <Grid container>
                      <Grid item xs={12} lg={3}>
                        <ImageBox>
                          <Carousel
                            animation="slide"
                            sx={{
                              width: "100%",
                              height: "100%",
                            }}
                            indicators={isBig ? false : true}
                          >
                            {hostel?.PropertyImages &&
                              hostel?.PropertyImages?.map(
                                (image: string, index) => (
                                  <Image
                                    key={index}
                                    alt={`PropertyImage+${index}`}
                                    style={containerStyle}
                                    width={200}
                                    height={200}
                                    loading="lazy"
                                    src={image}
                                  />
                                )
                              )}
                          </Carousel>
                        </ImageBox>
                      </Grid>
                      <Grid item xs={12} lg={5}>
                        <MiddleBox ml={{ xs: 0, lg: 4 }}>
                          <PropertyDetailsBox>
                            <Box
                            // component={"text"}
                            // href={`/Properties/${urlNeededforCityName}/${hostelData[index]?.PropertyName}`}
                            // style={{ color: "#000", textDecoration: "none" }}
                            >
                              <PropertyStyledPropertyName variant="h5">
                                {hostel?.PropertyName}
                              </PropertyStyledPropertyName>
                              <IconBox my={1}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: { xs: 3, lg: 3.5 },
                                  }}
                                >
                                  <AirIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                  <ChairOutlinedIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                  <TableRestaurantOutlinedIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                  <CleaningServicesOutlinedIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                  <LockOutlinedIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                  <CameraAltOutlinedIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                  <TvOutlinedIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                  <WifiOutlinedIcon
                                    fontSize="large"
                                    sx={{
                                      color: "#F65656",
                                      fontSize: { xs: "20px", lg: "30px" },
                                    }}
                                  />
                                </Box>
                              </IconBox>
                              <PropertyStyledDistanceBox>
                                <PlaceIcon
                                  sx={
                                    isBig
                                      ? {
                                          color: "grey",
                                          marginLeft: "-6rem",
                                          marginRight: "0.5rem",
                                        }
                                      : {
                                          color: "grey",
                                          marginRight: "0.5rem",
                                          marginLeft: "0rem",
                                        }
                                  }
                                  width={25}
                                  height={25}
                                />
                                <PropertyStyledDistance variant="body1">
                                  {hostel.distanceFromMainCity} km from City
                                  Center
                                </PropertyStyledDistance>
                                <LocalAirportOutlinedIcon
                                  sx={
                                    isSmallMobile || isMobile
                                      ? {
                                          color: "grey",
                                          marginLeft: "1rem",
                                          marginRight: "0.5rem",
                                        }
                                      : {
                                          color: "grey",
                                          marginLeft: "2rem",
                                          marginRight: "0.5rem",
                                        }
                                  }
                                />
                                <PropertyStyledDistance variant="h6">
                                  {hostel.distanceFromAirport} km from Airport
                                </PropertyStyledDistance>
                              </PropertyStyledDistanceBox>

                              <Box
                                mt={1.5}
                                sx={{
                                  display: "flex",
                                  gap: 3,
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    border: "1px solid lightgrey",
                                    padding: "5px 10px",
                                    borderRadius: "20px",
                                  }}
                                >
                                  Instant Booking
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    border: "1px solid lightgrey",
                                    padding: "5px 10px",
                                    borderRadius: "20px",
                                  }}
                                >
                                  Free Cancellation
                                </Typography>
                              </Box>
                              {isBig && (
                                <>
                                  <Box
                                    mt={1.5}
                                    sx={{
                                      display: "flex",
                                      gap: 3,
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        border: "1px solid lightgrey",
                                        padding: "2px 10px",
                                        borderRadius: "15px",
                                      }}
                                    >
                                      <StarRateIcon
                                        sx={{
                                          paddingBottom: "3px",
                                          marginRight: "2px",
                                          color: "#F3D120",
                                        }}
                                      />
                                      {Number.isInteger(hostel?.AdminRating / 2)
                                        ? hostel?.AdminRating / 2 + ".00"
                                        : (hostel?.AdminRating / 2).toFixed(2)}
                                    </Typography>
                                    <Button
                                      sx={{
                                        borderRadius: "20px",
                                        backgroundColor: "#F65656",
                                      }}
                                      href={`/Properties/${urlNeededforCityName}/${hostelData[index]?.PropertyName}?from=${from}&to=${to}&adults=${Adults}&children=${children}&rooms=${room}`}
                                      variant={"contained"}
                                      onClick={() => dispatch(resetRoomPrice())}
                                    >
                                      Book Now
                                    </Button>
                                  </Box>
                                </>
                              )}
                            </Box>
                          </PropertyDetailsBox>
                        </MiddleBox>
                      </Grid>
                      <Grid item lg={4}>
                        <BottomBox>
                          <>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Grid
                                ml={{ xs: 0, lg: 12 }}
                                container
                                sx={{
                                  border: {
                                    xs: "none",
                                    md: "1px solid lightgrey",
                                  },
                                  borderRadius: "20px",
                                  padding: { xs: 1, lg: "10px" },
                                  width: { xs: "300px", lg: "75%" },
                                  gap: { xs: 6, md: 0 },
                                }}
                              >
                                <Grid
                                  item
                                  pt={1}
                                  sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", lg: "row" },
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: {
                                        xs: "row",
                                        md: "column",
                                      },
                                    }}
                                  >
                                    <Typography
                                      mb={1}
                                      variant="body2"
                                      sx={{
                                        backgroundColor: "#454545",
                                        borderRadius: "20px",
                                        color: "white",
                                        padding: "5px 5px 5px 10px",
                                      }}
                                    >
                                      -10%
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      sx={{
                                        padding: "5px 0 0 10px",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      ₹125.7
                                    </Typography>
                                  </Box>
                                  {hostel.RoomPriceStartFrom !== null &&
                                  hostel.RoomPriceStartFrom !== "" ? (
                                    <PriceBox>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                        }}
                                      >
                                        <Typography
                                          variant="h6"
                                          sx={{
                                            fontSize: "15px",
                                            fontWeight: 700,
                                            color: "#FF5F1F",
                                          }}
                                        >
                                          Private Rooms
                                        </Typography>
                                        <Typography variant="body2">
                                          From
                                        </Typography>

                                        <PropertyStyledPrices variant="h6">
                                          ₹ {hostel?.RoomPriceStartFrom}{" "}
                                          <span
                                            style={{
                                              fontSize: "15px",
                                              fontWeight: 200,
                                            }}
                                          >
                                            / night
                                          </span>
                                        </PropertyStyledPrices>
                                      </Box>
                                    </PriceBox>
                                  ) : (
                                    <Typography
                                      sx={{
                                        mt: "1rem",
                                        ml: { xs: "0rem", lg: "2rem" },
                                        fontSize: "0.75rem",
                                        fontWeight: "lighter",
                                        fontFamily: "Raleway",
                                      }}
                                    >
                                      No Privates Available
                                    </Typography>
                                  )}
                                </Grid>
                                <Grid
                                  item
                                  sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", lg: "row" },
                                  }}
                                >
                                  <Box
                                    mt={1.5}
                                    sx={{
                                      display: "flex",
                                      flexDirection: {
                                        xs: "row",
                                        md: "column",
                                      },
                                    }}
                                  >
                                    <Typography
                                      mb={1}
                                      variant="body2"
                                      sx={{
                                        backgroundColor: "#454545",
                                        borderRadius: "20px",
                                        color: "white",
                                        padding: "5px 5px 5px 10px",
                                      }}
                                    >
                                      -23%
                                    </Typography>
                                    <Typography
                                      variant="body1"
                                      sx={{
                                        padding: "5px 0 0 10px",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      ₹125.7
                                    </Typography>
                                  </Box>
                                  {hostel.DormsPriceStartFrom !== null &&
                                  hostel.DormsPriceStartFrom !== "" ? (
                                    <PriceBox sx={{ marginLeft: "1rem" }}>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          flexDirection: "column",
                                        }}
                                      >
                                        <Typography
                                          variant="h6"
                                          sx={{
                                            fontSize: "15px",
                                            fontWeight: 700,
                                            color: "#FF5F1F",
                                          }}
                                        >
                                          Dorm Beds
                                        </Typography>
                                        <Typography variant="body2">
                                          From
                                        </Typography>

                                        <PropertyStyledPrices variant="h6">
                                          ₹ {hostel.DormsPriceStartFrom}{" "}
                                          <span
                                            style={{
                                              fontSize: "15px",
                                              fontWeight: 200,
                                            }}
                                          >
                                            / night
                                          </span>
                                        </PropertyStyledPrices>
                                      </Box>
                                    </PriceBox>
                                  ) : (
                                    <Typography
                                      sx={{
                                        mt: "1rem",
                                        ml: { xs: 0, lg: "2rem" },
                                        fontSize: "0.75rem",
                                        fontWeight: "lighter",
                                        fontFamily: "Raleway",
                                      }}
                                    >
                                      No Dorms Available
                                    </Typography>
                                  )}
                                </Grid>
                              </Grid>
                            </Box>
                            {isSmallMobile && (
                              <Box
                                my={1}
                                sx={{
                                  display: "flex",
                                  gap: { xs: 12, md: 3 },
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "1px solid lightgrey",
                                    padding: "2px 10px",
                                    borderRadius: "15px",
                                  }}
                                >
                                  <StarRateIcon
                                    sx={{
                                      paddingBottom: "3px",
                                      marginRight: "2px",
                                      color: "#F3D120",
                                    }}
                                  />
                                  {Number.isInteger(hostel?.AdminRating / 2)
                                    ? hostel?.AdminRating / 2 + ".00"
                                    : (hostel?.AdminRating / 2).toFixed(2)}
                                </Typography>
                                <Button
                                  sx={{
                                    borderRadius: "20px",
                                    backgroundColor: "#F65656",
                                  }}
                                  href={`/Properties/${urlNeededforCityName}/${hostelData[index]?.PropertyName}?from=${from}&to=${to}&adults=${Adults}&children=${children}&rooms=${room}`}
                                  variant={"contained"}
                                  onClick={() => dispatch(resetRoomPrice())}
                                >
                                  Book Now
                                </Button>
                              </Box>
                            )}
                          </>
                        </BottomBox>
                      </Grid>
                    </Grid>
                  </PropertyInnerStyledBox>
                </PropertyStyledPaper>
              </PropertyStyledBox>
            </MainBox>
          );
        })}

      <Pagination
        color="primary"
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
        sx={{
          display: "flex",
          margin: { xs: "1.5rem 0", md: "5.5rem 0" },
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </Box>
  );
};

export default PropertyPage;
