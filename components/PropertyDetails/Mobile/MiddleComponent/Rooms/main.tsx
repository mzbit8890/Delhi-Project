import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ButtonBox, PriceBox, RoomBox, RoomImageBox } from "./index.style";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { Raleway } from "next/font/google";
import { addRoomPrice, subtractRoomPrice } from "@/Store/PropertySlice";
import { useDispatch } from "react-redux";
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const RoomsComponentMobile = () => {
  const dispatch = useDispatch();
  interface Room {
    RoomImages: [] | "";
    Price: "";
    RoomGrade: string;
    NumberofGuestPerRoom: number;
    RoomType: string;
    NumberOfRoomsAvailable: number;
    Ensuite: string;
    RoomName: string;
    RoomDescrption: string;
    weekDayPrice: number;
    weekEndPrice: number;
  }
  const [rooms, setRooms] = useState<Room | any>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [ChoseRoom, setChoseRoom] = useState(-1);

  //   const handleImageClick = (roomIndex: number) => {
  //     setSelectedImageIndex(roomIndex);
  //     setLightboxOpen(true);
  //   };
  //   const handleCloseLightbox = () => {
  //     setSelectedImageIndex(0);
  //     setLightboxOpen(false);
  //   };
  const pathname = usePathname();

  const URL = pathname.split("/");
  const PropertyName = URL[3];

  const [loading, setLoading] = useState(true);

  const [showBookingPrice, setShowBookingPrice] = useState(true);
  const AllowedRoomTypes = ["Dorms", "Tent", "Capsule", "Pod", "Apartment"];

  const [selectedRooms, setSelectedRooms] = useState<{
    [key: string]: { price: number; RoomName: string };
  }>({});

  const HandleAddRoomForBooking = (room: Room) => {
    const numberOfRoomsAvailable = room?.NumberOfRoomsAvailable || 0;

    if (numberOfRoomsAvailable > 0) {
      setSelectedRooms((prevSelectedRooms) => ({
        ...prevSelectedRooms,
        [room?.RoomName]: {
          price: prevSelectedRooms[room?.RoomName]?.price + 1 || 1,
          RoomName: room?.RoomName,
        },
      }));
      dispatch(addRoomPrice(+room?.Price));
    }
  };

  const HandleRemoveRoomForBooking = (room: any) => {
    setSelectedRooms((prevSelectedRooms) => {
      const updatedPrice = Math.max(
        0,
        (prevSelectedRooms[room?.RoomName]?.price || 1) - 1
      );
      const updatedSelectedRooms = { ...prevSelectedRooms };
      if (updatedPrice === 0) {
        delete updatedSelectedRooms[room?.RoomName];
      } else {
        updatedSelectedRooms[room?.RoomName] = {
          price: updatedPrice,
          RoomName: room?.RoomName,
        };
      }
      return updatedSelectedRooms;
    });
    dispatch(subtractRoomPrice(+room?.Price));
  };

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
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [PropertyName]);
  return (
    <RoomBox>
      {Array.isArray(rooms) &&
        rooms.map((room: any, roomIndex: number) => (
          <Box
            key={roomIndex}
            sx={{
              padding: "0.5rem 0.1rem 0rem 0.5rem",
              m: "1rem 0rem 2rem 0.5rem",
              border: "1px solid #000",
              backgroundColor: "#fff",
              borderRadius: "1rem",
            }}
          >
            <RoomImageBox>
              {Array.isArray(room.RoomImages) && room.RoomImages.length > 0 ? (
                <Carousel indicators={false} sx={{ width: "23rem" }}>
                  {room.RoomImages.map((image: string, index: number) => (
                    <div key={index}>
                      <Image
                        src={image}
                        alt={`image ${index}`}
                        width={320}
                        height={200}
                        style={{
                          borderRadius: "0.5rem",
                          width: "345px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>No images available for {room.RoomName}</p>
              )}
            </RoomImageBox>

            <Typography
              className={`${raleway.variable}`}
              sx={{
                marginTop: "0.5rem",
                fontFamily: "var(--font-raleway)",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              {room?.RoomName}
            </Typography>
            <PriceBox elevation={5}>
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
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className={`${raleway.variable}`}
                    sx={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: "20px",
                      fontWeight: 700,
                      textDecoration: "line-through",
                      color: "#F95738",
                    }}
                  >
                    ₹
                    {" " +
                      (Number(room?.Price) +
                        Number(Number(room?.Price) / 100) * 10)}
                    .00
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#F95738",
                      width: "2.5rem",
                      height: "2rem",
                      ml: "1rem",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <Typography
                      className={`${raleway.variable}`}
                      sx={{
                        fontFamily: "var(--font-raleway)",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      -10%
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  className={`${raleway.variable}`}
                  sx={{
                    fontFamily: "var(--font-raleway)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#3D66F8",
                  }}
                >
                  ₹{" " + room.Price}.00
                </Typography>
                <Typography
                  className={`${raleway.variable}`}
                  sx={{
                    fontFamily: "var(--font-raleway)",
                    fontSize: "14px",
                    fontWeight: 500,
                    ml: "1.5rem",
                  }}
                >
                  Per night
                </Typography>
                <Typography
                  className={`${raleway.variable}`}
                  sx={{
                    marginTop: "0.5rem",
                    fontFamily: "var(--font-raleway)",
                    fontSize: "11px",
                    fontWeight: 700,

                    color: "#C3C3C3",
                  }}
                >
                  Room Rates Exclusive of Tax
                </Typography>
              </Box>
              <Box>
                <Typography
                  className={`${raleway.variable}`}
                  sx={{
                    marginTop: "0.5rem",
                    ml: "3rem",
                    fontFamily: "var(--font-raleway)",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Bed Only
                </Typography>
                <ButtonBox>
                  <Button
                    variant="text"
                    sx={{ color: "#fff" }}
                    onClick={() => HandleRemoveRoomForBooking(room)}
                  >
                    -
                  </Button>

                  <Typography
                    sx={{ fontSize: "0.8rem", color: "#fff" }}
                    variant="h5"
                  >
                    {String(selectedRooms[room?.RoomName]?.price || 0)}
                  </Typography>

                  <Button
                    variant="text"
                    sx={{ color: "#fff" }}
                    onClick={() => HandleAddRoomForBooking(room)}
                  >
                    +
                  </Button>
                </ButtonBox>
              </Box>
            </PriceBox>
          </Box>
        ))}
    </RoomBox>
  );
};

export default RoomsComponentMobile;
