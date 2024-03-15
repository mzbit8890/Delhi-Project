import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  MobileStepper,
  LinearProgress,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import EditRoomDialog from "./DialogBox";
import FailureComponent from "../../SnackBar/Failure";
import SuccessComponent from "../../SnackBar/Success";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  SetPropertyIdForVendorDashboard,
  SetUpdateSuccess,
} from "@/Store/VendorSlice";

interface Room {
  id: string;
  PropertyName: string;
  VendorName: string;
  RoomName: string;
  Price: string;
  RoomGrade: string;
  NumberofGuestPerRoom: number;
  RoomType: string;
  RoomImages: string[];
  NumberOfRoomsOfSameType: number;
  NumberofRoomsBookedCurrently: number;
  NumberOfRoomsAvailable: number;
  Ensuite: string;
  RoomDescrption: string;
  weekDayPrice: number;
  weekEndPrice: number;
}

const ViewVendorRoomPageComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isDeleteDialog, setOpenDeleteDialog] = useState(false);
  const dispatch = useDispatch();
  const vendorName = useSelector(
    (state: any) => state.vendor?.vendorNameForVendorDashboard
  );

  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const properties = useSelector(
    (state: any) => state.vendor.PropertiesForVendorDashboard
  );

  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);

  const selectedProperty = properties.find(
    (property: any) => property.id === PropertyID
  );

  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";

  const [selectedId, setselectedId] = useState(
    PropertyID ? PropertyID : properties[0].id
  );

  useEffect(() => {
    dispatch(SetPropertyIdForVendorDashboard(selectedId));
  }, [selectedId, dispatch]);

  const handlePropertyChange = (e: any) => {
    const newSelectedId = e.target.value;
    setselectedId(newSelectedId);
  };

  const [loading, setLoading] = useState(true);

  if (loading) {
    <>
      <LinearProgress color="info" />
    </>;
  }
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://api.hostelbird.com/rooms/deleteRoom/${selectedRoomId}`,
        {
          withCredentials: true,
        }
      );
      dispatch(SetUpdateSuccess("success"));
      window.history.back();
    } catch (error) {
      alert(error);
    }
  };

  const [showSnackBar, setShowSnackBar] = useState("");
  const [selectedIndices, setSelectedIndices] = useState<{
    [roomId: string]: number[];
  }>({});

  const handleImageClick = (indices: number[], roomId: string) => {
    setSelectedIndices((prevSelectedIndices) => {
      const updatedSelectedIndices = { ...prevSelectedIndices };
      const roomSelectedIndices = updatedSelectedIndices[roomId] || [];

      indices.forEach((index) => {
        if (roomSelectedIndices.includes(index)) {
          updatedSelectedIndices[roomId] = roomSelectedIndices.filter(
            (idx) => idx !== index
          );
        } else {
          updatedSelectedIndices[roomId] = [...roomSelectedIndices, index];
        }
      });

      return updatedSelectedIndices;
    });
  };

  const handleDeleteImages = async () => {
    try {
      const roomId = Object.keys(selectedIndices)[0];
      const indicesToDelete = selectedIndices[roomId] || [];
      if (indicesToDelete.length === 0) {
        return;
      }

      const response = await fetch(
        `https://api.hostelbird.com/rooms/DeleteImages/${roomId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify({ indicies: indicesToDelete }),
        }
      );

      if (response.ok) {
        window.location.reload();
        setShowSnackBar("Success");
      } else {
        setShowSnackBar("Fail");
      }
    } catch (error) {
      setShowSnackBar("Fail");
    }
  };

  const SetFormData = async (incomingData: any) => {
    const formData = new FormData();
    if (incomingData !== null) {
      Object.entries(incomingData).forEach(([key, value]) => {
        if (
          value !== null &&
          ![
            "id",
            "PropertyName",
            "VendorName",
            "NumberofRoomsBookedCurrently",
            "NumberOfRoomsAvailable",
            "propertdetails",
            "RoomImages",
          ].includes(key)
        ) {
          if (key === "image" && Array.isArray(value) && value.length > 0) {
            value.forEach((image) => {
              formData.append("image", image as Blob);
            });
          } else {
            formData.append(key, value as string | Blob);
          }
        }
      });
    }
    return formData;
  };

  const handleUpdateRoom = async (updatedData: Room) => {
    try {
      const payload = await SetFormData(updatedData);

      const response = await axios.patch(
        `https://api.hostelbird.com/rooms/UpdateRooms/${selectedRoomId}`,
        payload,
        {
          withCredentials: true,
        }
      );
      if (!response) {
        setShowSnackBar("Fail");
        throw new Error("Failed to update room");
      }

      setRooms((prevRooms) =>
        prevRooms.map((prevRoom) =>
          prevRoom.id === rooms[0].id
            ? { ...prevRoom, ...updatedData }
            : prevRoom
        )
      );

      handleDialogClose();
      window.location.reload();
      setShowSnackBar("Success");
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

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

        const data: Room[] = await response.json();

        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [SelectedPropertyName]);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep: number) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep: number) => prevStep - 1);
  };

  return (
    <Container>
      {showSnackBar === "Fail" ? (
        <FailureComponent />
      ) : showSnackBar === "Success" ? (
        <SuccessComponent message="Room Details Updated Successfully" />
      ) : null}

      <Typography variant="h3" align="center" gutterBottom>
        My Rooms
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          sx={{
            fontFamily: "var(--font-poppins)",
            ml: "1rem",
          }}
          id="demo-simple-select-standard-label"
        >
          Change Property
        </InputLabel>
        <Select
          value={selectedId || ""}
          onChange={handlePropertyChange}
          variant="outlined"
          sx={{ width: "10rem", m: "1rem" }}
        >
          {properties.map((property: any) => (
            <MenuItem key={property.id} value={property.id}>
              <Typography
                key={property.id}
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
      {!loading && rooms.length > 0 ? (
        rooms.map((room, index) => (
          <Card key={room.id} sx={{ marginBottom: 2 }}>
            <Grid container spacing={2}>
              {room?.RoomImages?.map((image, index) => (
                <Grid item xs={3} key={index}>
                  <Card sx={{ marginBottom: 2 }}>
                    <div style={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        alt={room?.RoomName}
                        height="300"
                        width="640"
                        image={image}
                        style={{
                          objectFit: "cover",
                          padding: "0.5rem",
                          border: selectedIndices[room.id]?.includes(index)
                            ? "5px solid red"
                            : "1px solid #000",
                        }}
                        onClick={() => handleImageClick([index], room.id)}
                      />
                      <IconButton
                        style={{ position: "absolute", top: 0, right: 0 }}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleDeleteImages();
                        }}
                      >
                        {selectedIndices[room.id]?.includes(index) ? (
                          <DeleteIcon sx={{ color: "red" }} />
                        ) : (
                          <DeleteIcon
                            sx={{ filter: "drop-shadow(100 100 105px orange)" }}
                          />
                        )}
                      </IconButton>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {room.RoomName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                {room.RoomType} - {room.RoomGrade}
              </Typography>
              <Typography variant="body2" paragraph>
                {room.RoomDescrption}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: {room.Price}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: {room.weekDayPrice} (Weekdays) / {room.weekEndPrice}{" "}
                (Weekends)
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Available Rooms: {room.NumberOfRoomsAvailable}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    //setEditFormData(room);
                    setIsDialogOpen(true);
                    setSelectedRoomId(room.id);
                  }}
                  sx={{ mr: "1rem" }}
                >
                  Edit Room
                </Button>
                <Button
                  sx={{ border: "1px solid red", color: "red" }}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setOpenDeleteDialog(true), setSelectedRoomId(room.id);
                  }}
                >
                  Delete Room
                </Button>
                <Dialog
                  open={isDeleteDialog}
                  onClose={() => setOpenDeleteDialog(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Delete Room?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete this room?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => setOpenDeleteDialog(false)}
                      color="secondary"
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                      Yes, Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>

              <EditRoomDialog
                isOpen={isDialogOpen}
                onClose={handleDialogClose}
                formData={rooms?.find(
                  (room: Room) => room?.id === selectedRoomId
                )}
                onSave={handleUpdateRoom}
              />
            </CardContent>
          </Card>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <Typography
            variant="h3"
            sx={{
              mt: "5rem",
              color: "red",
            }}
          >
            This Property has no rooms
          </Typography>{" "}
          <Button
            sx={{ mt: "2rem" }}
            variant="contained"
            href={`/dashboard/${vendorName}`}
          >
            Back to Home
          </Button>
        </Box>
      )}
    </Container>
  );
};
export default ViewVendorRoomPageComponent;
