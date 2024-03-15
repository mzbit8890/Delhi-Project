import { useEffect, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  ImageListClasses,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import {
  StyledDisplayRoomBox,
  StyledUpperPriceBox,
  StyledBottomPriceBox,
  StyledMainBox,
  StyledOuterRoomInfoBox,
  StyledPriceBox,
  StyledRoomBox,
  StyledRoomInfoBox,
  StyledHeadingRoomBox,
  SubPriceBox,
  OuterLayerBox,
  RoomHeadingBox,
  RoomHeading,
  StyledMainBoxForDialog,
  StyledPoliciesBox,
  StyledHeader,
  StyledSubHeader,
  StyledBody,
  StyledThingstoNoteBox,
} from "./room.style";

import { setBookingDate } from "@/Store/Booking/BookingDateSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Carousel from "react-material-ui-carousel";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { StyledText } from "./room.style";
import DisplayPriceBox from "./PriceBox/DisplayPrice";
import { setRoomForBooking } from "@/Store/Booking/BookingSlice";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Room {
  id: string;
  RoomImages: [] | "";
  Price: "";
  RoomGrade: string;
  NumberofGuestPerRoom: number;
  RoomType: string;
  NumberOfRoomsOfSameType: number;
  NumberofRoomsBookedCurrently: number;
  NumberOfRoomsAvailable: number;
  Ensuite: string;
  RoomName: string;
  RoomDescrption: string;
  weekDayPrice: number;
  weekEndPrice: number;
  TotalRooms: number;
  TotalNights: number;
}

export default function MiddleComponenet() {
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([]);
  const urlSearchParams = new URLSearchParams(window.location.search);
  function getDateFromUrl() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const from = urlSearchParams.get("from");
    const to = urlSearchParams.get("to");

    if (from && to) {
      const fromDate = new Date(from);
      const toDate = new Date(to);

      const timeDifference = toDate.getTime() - fromDate.getTime();

      const nights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      return {
        from,
        to,
        nights,
      };
    } else {
      throw new Error("Both 'from' and 'to' dates are required in the URL");
    }
  }

  function getPersonFromUrl() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return {
      persons:
        Number(urlSearchParams.get("adults")) +
        Number(urlSearchParams.get("children")),
    };
  }

  const dateParams = getDateFromUrl();

  const handleRoomSelectionChange = (event: any, room: any) => {
    const ID = room.id;
    const total = parseInt(event.target.value);

    const existingRoomIndex = selectedRooms.findIndex(
      (selectedRoom) => selectedRoom.id === ID
    );
    const updatedRoom = {
      ...room,
      TotalRooms: total,
      TotalNights: dateParams.nights,
    };
    if (total === -1) {
      setSelectedRooms((prevState) =>
        prevState.filter((selectedRoom) => selectedRoom.id !== ID)
      );
    }
    if (existingRoomIndex !== -1) {
      setSelectedRooms((prevState) => {
        const updatedSelectedRooms = [...prevState];
        updatedSelectedRooms[existingRoomIndex] = updatedRoom;
        return updatedSelectedRooms;
      });
    } else {
      setSelectedRooms((prevState) => [...prevState, updatedRoom]);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoomForBooking(selectedRooms));
    dispatch(
      setBookingDate({
        checkIn: dateParams.from as string,
        checkOut: dateParams.to as string,
      })
    );
  }, [selectedRooms, dispatch, dateParams]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [rooms, setRooms] = useState<Room | any>();
  const handleImageClick = (roomIndex: number) => {
    setSelectedImageIndex(roomIndex);
    setLightboxOpen(true);
  };
  const handleCloseLightbox = () => {
    setSelectedImageIndex(0);
    setLightboxOpen(false);
  };

  const pathname = usePathname();

  const URL = pathname.split("/");
  const PropertyName = URL[3];

  const personParams = getPersonFromUrl();

  const [loading, setLoading] = useState(true);

  const [showBookingPrice, setShowBookingPrice] = useState(true);
  const AllowedRoomTypes = ["Dorms", "Tent", "Capsule", "Pod", "Apartment"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/rooms/getRooms/${PropertyName}/all`
        );

        if (!response.ok) {
          setLoading(false);
          return;
        }

        const data = await response.json();
        setRooms(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [PropertyName]);

  if (loading) {
    return (
      <>
        <LinearProgress color="info" />
      </>
    );
  }

  return (
    <StyledMainBox>
      <StyledRoomBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "start", md: "center" },
            background: "#0C2D5708",
            padding: { xs: "15px", md: "25px 25px" },
            borderRadius: "20px",
          }}
        >
          <Typography
            my={2}
            variant="h3"
            sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "45px" } }}
          >
            Book Your Stay
          </Typography>
          <Typography
            mr={{ xs: 0, lg: 5 }}
            variant="h5"
            sx={{
              backgroundColor: "#F65656",
              border: "1px solid lightgrey",
              padding: "0px 20px",
              borderRadius: "20px",
              fontSize: { xs: "16px", md: "25px" },
              display: "flex",
              alignItems: "center",
              color: "white",
              width: "90%",
            }}
          >
            <CalendarMonthIcon fontSize="large" sx={{ mr: 2 }} />{" "}
            {dateParams.from}
            <ArrowRightAltOutlinedIcon
              fontSize="large"
              sx={{ margin: "20px 20px" }}
            />{" "}
            {dateParams.to}{" "}
          </Typography>
        </Box>

        <StyledDisplayRoomBox>
          <StyledHeadingRoomBox>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <RoomHeadingBox py={3} mb={5}>
                <RoomHeading variant="h6">Private Rooms</RoomHeading>
              </RoomHeadingBox>
            </Box>
          </StyledHeadingRoomBox>
          {rooms && Array.isArray(rooms) && rooms.length > 0
            ? rooms
                .filter((room: Room) => room.RoomType.includes("Bedroom"))
                .map((room: Room, roomIndex: any) => (
                  <OuterLayerBox key={roomIndex} py={2}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Carousel
                          sx={{
                            width: { xs: "100%", lg: "17rem" },
                            height: { xs: "300px", md: "100%" },
                            position: "relative",
                            margin: "10px",
                          }}
                          indicators={true}
                          NextIcon={null}
                          PrevIcon={null}
                          animation="slide"
                          swipe={true}
                          height="85%"
                        >
                          {Array.isArray(room.RoomImages) &&
                            room?.RoomImages?.map(
                              (image: string, imageIndex: number) => (
                                <Image
                                  key={imageIndex}
                                  src={image}
                                  alt={`image ${imageIndex}`}
                                  width={150}
                                  height={150}
                                  loading="lazy"
                                  style={{
                                    position: "absolute",
                                    objectFit: "fill",
                                    cursor: "pointer",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "30px",
                                  }}
                                  onClick={() => {
                                    handleImageClick(roomIndex);
                                  }}
                                />
                              )
                            )}
                        </Carousel>
                        {lightboxOpen && selectedImageIndex !== null && (
                          <Dialog
                            open={lightboxOpen}
                            onClose={handleCloseLightbox}
                            maxWidth="lg"
                            fullWidth
                          >
                            <DialogTitle>Room Images</DialogTitle>
                            <DialogContent>
                              <Box>
                                <Carousel>
                                  {rooms[selectedImageIndex]?.RoomImages?.map(
                                    (image: string, index: number) => (
                                      <Box
                                        key={index}
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          height: "80vh",
                                        }}
                                      >
                                        <Image
                                          src={image}
                                          width={1000}
                                          height={1000}
                                          loading="lazy"
                                          style={{
                                            objectFit: "cover",
                                          }}
                                          alt={`Image ${index}`}
                                        />
                                      </Box>
                                    )
                                  )}
                                </Carousel>
                              </Box>
                            </DialogContent>
                          </Dialog>
                        )}
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <StyledOuterRoomInfoBox key={roomIndex}>
                          <StyledRoomInfoBox>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "90%",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography
                                  className={`${poppins.variable}`}
                                  sx={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    fontFamily: "var(--font-poppins)",
                                  }}
                                >
                                  {room?.RoomName}{" "}
                                </Typography>
                                <Box
                                  sx={{
                                    display: { xs: "none", md: "flex" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "3rem",
                                    borderRadius: "1rem",
                                    height: "1.5rem",
                                    backgroundColor: "#F65656",
                                  }}
                                >
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      color: "#fff",
                                      fontFamily: "var(--font-poppins)",
                                    }}
                                  >
                                    -10%
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      textDecoration: "line-through",
                                      fontFamily: "var(--font-poppins)",
                                      mt: "0.2rem",
                                      mr: "0.5rem",
                                      fontSize: "0.8rem",
                                    }}
                                  >
                                    Rs{" "}
                                    {Number(room?.Price) +
                                      Number(Number(room?.Price) / 100) * 10}
                                  </Typography>
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      fontFamily: "var(--font-poppins)",
                                      fontSize: { xs: "0.8rem", md: "1rem" },
                                    }}
                                  >
                                    {" "}
                                    Rs{" "}
                                    <strong>
                                      {" " + room.Price + ".00"}{" "}
                                    </strong>{" "}
                                    / night
                                  </Typography>
                                </Box>
                              </Box>
                              <Typography
                                className={`${poppins.variable}`}
                                sx={{
                                  fontWeight: "light",
                                  fontSize: "1rem",
                                  fontFamily: "var(--font-poppins)",
                                  mt: "0.5rem",
                                }}
                              >
                                {room.RoomDescrption}
                              </Typography>
                              <Box my={1} sx={{ display: "flex" }}>
                                <DesktopWindowsOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <ShowerOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <WifiOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <AirOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <BusinessCenterOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <CheckroomOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Typography
                                  className={`${poppins.variable}`}
                                  sx={{
                                    fontWeight: "light",
                                    fontSize: "0.8rem",
                                    mt: "0.5rem",
                                    fontFamily: "var(--font-poppins)",
                                  }}
                                >
                                  Type - <strong>{room.RoomType} </strong>
                                </Typography>
                                <Box
                                  mt={1}
                                  ml={3}
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <HelpOutlineOutlinedIcon
                                    sx={{
                                      color: "#F65656",
                                      mr: "0.5rem",
                                      height: "1.3rem",
                                      width: "1.3rem",
                                    }}
                                  />
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      color: "#F65656",
                                      fontSize: "0.8rem",
                                      fontFamily: "var(--font-poppins)",
                                    }}
                                  >
                                    <strong>{room?.RoomGrade}</strong>
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </StyledRoomInfoBox>

                          <StyledRoomInfoBox>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <SubPriceBox>
                                <Select
                                  value={
                                    selectedRooms.find(
                                      (selectedRoom) =>
                                        selectedRoom.id === room.id
                                    )?.TotalRooms || -1
                                  }
                                  onChange={(event) =>
                                    handleRoomSelectionChange(event, room)
                                  }
                                  sx={{
                                    py: 2,
                                    fontSize: { xs: "10px", lg: "1rem" },
                                    borderRadius: "30px",
                                    height: "30px",
                                    backgroundColor: "#F65656",
                                    color: "white",
                                  }}
                                >
                                  <MenuItem value={-1}>Select Rooms</MenuItem>
                                  {Array.from(
                                    { length: room.NumberOfRoomsAvailable },
                                    (_, index) => (
                                      <MenuItem
                                        key={index + 1}
                                        value={index + 1}
                                        onClick={() =>
                                          setShowBookingPrice(false)
                                        }
                                      >
                                        Room {index + 1}
                                      </MenuItem>
                                    )
                                  )}
                                </Select>
                              </SubPriceBox>
                            </Box>
                          </StyledRoomInfoBox>
                        </StyledOuterRoomInfoBox>
                      </Grid>
                    </Grid>
                  </OuterLayerBox>
                ))
            : "No Rooms Available Currenty"}
        </StyledDisplayRoomBox>

        <StyledDisplayRoomBox>
          <StyledHeadingRoomBox>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <RoomHeadingBox py={3} mb={5}>
                <RoomHeading
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: "25px",
                  }}
                >
                  Dorm Beds
                </RoomHeading>
              </RoomHeadingBox>
            </Box>
          </StyledHeadingRoomBox>
          {rooms && Array.isArray(rooms) && rooms.length > 0
            ? rooms
                .filter((room: Room) =>
                  AllowedRoomTypes.some((type) => room.RoomType.includes(type))
                )
                .map((room: Room, roomIndex: any) => (
                  <OuterLayerBox key={roomIndex} py={2}>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Carousel
                          sx={{
                            width: { xs: "100%", lg: "17rem" },
                            height: { xs: "300px", md: "100%" },
                            position: "relative",
                            margin: "10px",
                          }}
                          indicators={true}
                          NextIcon={null}
                          PrevIcon={null}
                          animation="slide"
                          swipe={true}
                          height="85%"
                        >
                          {Array.isArray(room.RoomImages) &&
                            room?.RoomImages?.map(
                              (image: string, imageIndex: number) => (
                                <Image
                                  key={imageIndex}
                                  src={image}
                                  alt={`image ${imageIndex}`}
                                  width={150}
                                  height={150}
                                  loading="lazy"
                                  style={{
                                    position: "absolute",
                                    objectFit: "fill",
                                    cursor: "pointer",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "30px",
                                  }}
                                  onClick={() => {
                                    handleImageClick(roomIndex);
                                  }}
                                />
                              )
                            )}
                        </Carousel>
                        {lightboxOpen && selectedImageIndex !== null && (
                          <Dialog
                            open={lightboxOpen}
                            onClose={handleCloseLightbox}
                            maxWidth="lg"
                            fullWidth
                          >
                            <DialogTitle>Room Images</DialogTitle>
                            <DialogContent>
                              <Box>
                                <Carousel>
                                  {rooms[selectedImageIndex]?.RoomImages?.map(
                                    (image: string, index: number) => (
                                      <Box
                                        key={index}
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          height: "80vh",
                                        }}
                                      >
                                        <Image
                                          src={image}
                                          width={1000}
                                          height={1000}
                                          loading="lazy"
                                          style={{
                                            objectFit: "cover",
                                          }}
                                          alt={`Image ${index}`}
                                        />
                                      </Box>
                                    )
                                  )}
                                </Carousel>
                              </Box>
                            </DialogContent>
                          </Dialog>
                        )}
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <StyledOuterRoomInfoBox key={roomIndex}>
                          <StyledRoomInfoBox>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "90%",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography
                                  className={`${poppins.variable}`}
                                  sx={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    fontFamily: "var(--font-poppins)",
                                  }}
                                >
                                  {room?.RoomName}{" "}
                                </Typography>
                                <Box
                                  sx={{
                                    display: { xs: "none", md: "flex" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "3rem",
                                    borderRadius: "1rem",
                                    height: "1.5rem",
                                    backgroundColor: "#F65656",
                                  }}
                                >
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      color: "#fff",
                                      fontFamily: "var(--font-poppins)",
                                    }}
                                  >
                                    -10%
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      textDecoration: "line-through",
                                      fontFamily: "var(--font-poppins)",
                                      mt: "0.2rem",
                                      mr: "0.5rem",
                                      fontSize: "0.8rem",
                                    }}
                                  >
                                    Rs{" "}
                                    {Number(room?.Price) +
                                      Number(Number(room?.Price) / 100) * 10}
                                  </Typography>
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      fontFamily: "var(--font-poppins)",
                                      fontSize: { xs: "0.8rem", md: "1rem" },
                                    }}
                                  >
                                    {" "}
                                    Rs{" "}
                                    <strong>
                                      {" " + room.Price + ".00"}{" "}
                                    </strong>{" "}
                                    / night
                                  </Typography>
                                </Box>
                              </Box>
                              <Typography
                                className={`${poppins.variable}`}
                                sx={{
                                  fontWeight: "light",
                                  fontSize: "1rem",
                                  fontFamily: "var(--font-poppins)",
                                  mt: "0.5rem",
                                }}
                              >
                                {room.RoomDescrption}
                              </Typography>
                              <Box my={1} sx={{ display: "flex" }}>
                                <DesktopWindowsOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <ShowerOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <WifiOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <AirOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <BusinessCenterOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                                <CheckroomOutlinedIcon
                                  fontSize="large"
                                  sx={{ color: "#F65656", marginRight: "20px" }}
                                />
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Typography
                                  className={`${poppins.variable}`}
                                  sx={{
                                    fontWeight: "light",
                                    fontSize: "0.8rem",
                                    mt: "0.5rem",
                                    fontFamily: "var(--font-poppins)",
                                  }}
                                >
                                  Type - <strong>{room.RoomType} </strong>
                                </Typography>
                                <Box
                                  mt={1}
                                  ml={3}
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <HelpOutlineOutlinedIcon
                                    sx={{
                                      color: "#F65656",
                                      mr: "0.5rem",
                                      height: "1.3rem",
                                      width: "1.3rem",
                                    }}
                                  />
                                  <Typography
                                    className={`${poppins.variable}`}
                                    sx={{
                                      fontSize: "0.8rem",
                                      fontFamily: "var(--font-poppins)",
                                    }}
                                  >
                                    <strong>{room?.RoomGrade}</strong>
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </StyledRoomInfoBox>

                          <StyledRoomInfoBox>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <SubPriceBox>
                                <Select
                                  value={
                                    selectedRooms.find(
                                      (selectedRoom) =>
                                        selectedRoom.id === room.id
                                    )?.TotalRooms || -1
                                  }
                                  onChange={(event) =>
                                    handleRoomSelectionChange(event, room)
                                  }
                                  sx={{
                                    py: 2,
                                    fontSize: { xs: "10px", lg: "1rem" },
                                    borderRadius: "30px",
                                    height: "30px",
                                    backgroundColor: "#F65656",
                                    color: "white",
                                  }}
                                >
                                  <MenuItem value={-1}>Select Rooms</MenuItem>
                                  {Array.from(
                                    { length: room.NumberOfRoomsAvailable },
                                    (_, index) => (
                                      <MenuItem
                                        key={index + 1}
                                        value={index + 1}
                                        onClick={() =>
                                          setShowBookingPrice(false)
                                        }
                                      >
                                        Room {index + 1}
                                      </MenuItem>
                                    )
                                  )}
                                </Select>
                              </SubPriceBox>
                            </Box>
                          </StyledRoomInfoBox>
                        </StyledOuterRoomInfoBox>
                      </Grid>
                    </Grid>
                  </OuterLayerBox>
                ))
            : "No Rooms Available Currenty"}
        </StyledDisplayRoomBox>

        {/* <StyledDisplayRoomBox>
          <StyledHeadingRoomBox>
            <Typography
              className={`${poppins.variable}`}
              sx={{ fontFamily: "var(--font-poppins)", fontWeight: "bold" }}
            >
              Dorms Beds
            </Typography>
            <Typography
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
                fontSize: "0.9rem",
                fontWeight: "light",
              }}
            >
              Prices are per beds
            </Typography>
          </StyledHeadingRoomBox>
          {rooms && Array.isArray(rooms) && rooms.length > 0
            ? rooms
                .filter((room: Room) =>
                  AllowedRoomTypes.some((type) => room.RoomType.includes(type))
                )
                .map((room: Room, roomIndex: any) => (
                  <StyledOuterRoomInfoBox key={roomIndex}>
                    <StyledRoomInfoBox>
                      <Box sx={{ mt: "1rem" }}>
                        <Carousel
                          sx={{ width: "7rem" }}
                          indicators={true}
                          NextIcon={null}
                          PrevIcon={null}
                          animation="slide"
                          swipe={true}
                        >
                          {Array.isArray(room.RoomImages) &&
                            room.RoomImages.map(
                              (image: string, imageIndex: number) => (
                                <Image
                                  key={imageIndex}
                                  src={image}
                                  alt={`image ${imageIndex}`}
                                  width={110}
                                  height={100}
                                  loading="lazy"
                                  style={{
                                    height: "5rem",
                                    cursor: "pointer",
                                    borderRadius: "0.5rem",
                                  }}
                                  onClick={() => {
                                    handleImageClick(roomIndex);
                                  }}
                                />
                              )
                            )}
                        </Carousel>
                      </Box>
                      {lightboxOpen && selectedImageIndex !== null && (
                        <Dialog
                          open={lightboxOpen}
                          onClose={handleCloseLightbox}
                          maxWidth="lg"
                          fullWidth
                        >
                          <DialogTitle>Room Images</DialogTitle>
                          <DialogContent>
                            <Box>
                              <Carousel>
                                {rooms[selectedImageIndex]?.RoomImages?.map(
                                  (image: string, index: number) => (
                                    <Box
                                      key={index}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "80vh",
                                      }}
                                    >
                                      <Image
                                        src={image}
                                        width={1000}
                                        height={1000}
                                        loading="lazy"
                                        style={{
                                          objectFit: "cover",
                                        }}
                                        alt={`Image ${index}`}
                                      />
                                    </Box>
                                  )
                                )}
                              </Carousel>
                            </Box>
                          </DialogContent>
                        </Dialog>
                      )}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          ml: "1rem",
                          padding: "0.5rem",
                        }}
                      >
                        <Typography
                          className={`${poppins.variable}`}
                          sx={{
                            fontWeight: "bold",
                            fontFamily: "var(--font-poppins)",
                          }}
                        >
                          {room.RoomName}{" "}
                        </Typography>
                        <Typography
                          className={`${poppins.variable}`}
                          sx={{
                            fontWeight: "light",
                            fontSize: "0.8rem",
                            fontFamily: "var(--font-poppins)",
                            mt: "0.5rem",
                          }}
                        >
                          {room?.RoomDescrption}
                        </Typography>
                        <Typography
                          className={`${poppins.variable}`}
                          sx={{
                            fontWeight: "light",
                            fontSize: "0.8rem",
                            mt: "1rem",
                            fontFamily: "var(--font-poppins)",
                          }}
                        >
                          Type - <strong>{room.RoomType}</strong>
                        </Typography>
                        <Typography
                          className={`${poppins.variable}`}
                          sx={{
                            fontWeight: "light",
                            fontSize: "0.8rem",
                            fontFamily: "var(--font-poppins)",
                          }}
                        >
                          Ensuite - <strong>{room.Ensuite} </strong>
                        </Typography>
                      </Box>
                    </StyledRoomInfoBox>
                    <StyledRoomInfoBox>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "0.2rem",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "3rem",
                            borderRadius: "0.5rem",
                            height: "1.5rem",
                            backgroundColor: "#cc0074",
                          }}
                        >
                          <Typography
                            className={`${poppins.variable}`}
                            sx={{
                              color: "#fff",
                              fontFamily: "var(--font-poppins)",
                            }}
                          >
                            -10%
                          </Typography>
                        </Box>
                        <SubPriceBox>
                          
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <Typography
                                className={`${poppins.variable}`}
                                sx={{ fontFamily: "var(--font-poppins)" }}
                              >
                                {" "}
                                Rs <strong>{" " + room.Price + ".00"} </strong>
                              </Typography>
                              <Typography
                                className={`${poppins.variable}`}
                                sx={{
                                  ml: "0.5rem",
                                  fontSize: "0.8rem",
                                  textDecoration: "line-through",
                                  fontFamily: "var(--font-poppins)",
                                }}
                              >
                                Rs{" "}
                                {Number(room?.Price) +
                                  Number(Number(room?.Price) / 100) * 10}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                mt: "0.5rem",
                                ml: "-3rem",
                              }}
                            >
                              <HelpOutlineOutlinedIcon
                                sx={{
                                  color: "grey",
                                  mr: "0.5rem",
                                  height: "1.3rem",
                                  width: "1.3rem",
                                }}
                              />
                              <Typography
                                className={`${poppins.variable}`}
                                sx={{
                                  fontSize: "0.8rem",
                                  fontFamily: "var(--font-poppins)",
                                }}
                              >
                                <strong>{room?.RoomGrade}</strong>
                              </Typography>
                            </Box>
                          </Box>

                          <SelectRoomBox>
                            <Select
                              value={
                                selectedRooms.find(
                                  (selectedRoom) => selectedRoom.id === room.id
                                )?.TotalRooms || -1
                              }
                              onChange={(event) =>
                                handleRoomSelectionChange(event, room)
                              }
                              sx={{ fontSize: "0.85rem" }}
                            >
                              <MenuItem value={-1}>Select Beds</MenuItem>
                              {Array.from(
                                { length: room.NumberOfRoomsAvailable },
                                (_, index) => (
                                  <MenuItem key={index + 1} value={index + 1}>
                                    Room {index + 1}
                                  </MenuItem>
                                )
                              )}
                            </Select>
                          </SelectRoomBox>
                        </SubPriceBox>
                      </Box>
                    </StyledRoomInfoBox>
                  </StyledOuterRoomInfoBox>
                ))
            : "No Rooms Available Currenty"}
        </StyledDisplayRoomBox> */}
      </StyledRoomBox>

      <StyledPriceBox>
        {selectedRooms.length === 0 ? (
          <Box
            mb={5}
            sx={{
              background: "#0C2D5708",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            <Box>
              <Typography mt={4} variant="h4" sx={{ fontWeight: 700 }}>
                Booking <span style={{ color: "#F65656" }}>Summary</span>
              </Typography>
              <Typography
                mt={3}
                variant="h4"
                sx={{ fontSize: "25px", color: "#C7C8CC", fontWeight: 700 }}
              >
                No Rooms Selected
              </Typography>
              <Typography
                mt={3}
                mx={{ xs: 2, lg: 8 }}
                variant="h5"
                sx={{
                  border: "1px solid lightgrey",
                  padding: "20px 10px",
                  borderRadius: "20px",
                }}
              >
                {dateParams.from}, {personParams.persons} Guest
              </Typography>
              <Box mx={{ xs: 5, lg: 10 }}>
                <Typography
                  mt={3}
                  variant="h5"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{ marginRight: "10px", color: "#F65656" }}
                  />{" "}
                  Instant Confirmation
                </Typography>
                <Typography
                  mt={3}
                  variant="h5"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{ marginRight: "10px", color: "#F65656" }}
                  />{" "}
                  No booking fees
                </Typography>
                <Typography
                  mt={3}
                  mb={4}
                  variant="h5"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CheckCircleOutlineOutlinedIcon
                    sx={{ marginRight: "10px", color: "#F65656" }}
                  />{" "}
                  Takes only 2 minutes
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box>
            <StyledUpperPriceBox>
              <Typography
                className={`${poppins.variable}`}
                sx={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "2rem",
                }}
                variant="h5"
              >
                My Selection
              </Typography>
              <StyledText className={`${poppins.variable}`}>
                <strong style={{ marginLeft: "0.2rem", fontSize: "1.2rem" }}>
                  {dateParams.from} , {personParams.persons} Guest
                </strong>
              </StyledText>

              <DisplayPriceBox />
            </StyledUpperPriceBox>
          </Box>
        )}
      </StyledPriceBox>
    </StyledMainBox>
  );
}
