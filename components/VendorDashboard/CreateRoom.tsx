import React, { useCallback, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Paper,
  Box,
  LinearProgress,
  Alert,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import SuccessComponent from "../SnackBar/Success";
import FailureComponent from "../SnackBar/Failure";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function CreateRoomComponent() {
  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);
  const vendorName = useSelector((state: any) => state?.vendor?.VendorName);

  const router = useRouter();
  interface RoomDetailsInterface {
    RoomDescrption: string;
    RoomGrade: string;
    RoomType: string;
    Price: string;
    RoomName: string;
    Ensuite: string;
    weekDayPrice: number | null;
    weekEndPrice: number | null;
    NumberOfRoomsOfSameType: number | null;
    NumberofGuestPerRoom: number | null;
    image: File[] | string | null;

    [key: string]: string | number | null | File[];
  }
  const DisableButtonOnError = () => {
    if (RoomDetails !== null) {
      return Object?.entries(RoomDetails as RoomDetailsInterface).some(
        ([_, value]) => value === null || value === undefined || value === ""
      );
    }
  };
  const [showSnackBar, setShowSnakbar] = useState({
    value: "",
  });
  const [RoomDetails, SetRoomDetails] = useState<RoomDetailsInterface | null>({
    RoomDescrption: "",
    RoomGrade: "",
    RoomType: "",
    Price: "",
    NumberOfRoomsOfSameType: null,
    Ensuite: "",
    RoomName: "",
    weekDayPrice: null,
    weekEndPrice: null,
    NumberofGuestPerRoom: null,
    image: "",
  });
  const [RoomType, setSelectedRoomType] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const filesToAdd = acceptedFiles.slice(0, 4);
      if (RoomDetails === null) {
        SetRoomDetails((prevRoomDetails: any) => ({
          ...prevRoomDetails,
          image: null,
        }));
      }
      SetRoomDetails((prevRoomDetails: any) => ({
        ...prevRoomDetails,
        image: [...filesToAdd],
      }));
    },
    [RoomDetails]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: true,
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const convertedValue = isNaN(Number(value)) ? value : Number(value);

    SetRoomDetails((prevState: any) => ({
      ...prevState,
      [name]: convertedValue,
    }));
  };
  const roomtypes = ["Pod", "Tent", "Dorms", "Apartment", "Capsule"];
  const handleRoomTypeChange = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;
    if (roomtypes.some((item) => value.includes(item))) {
      setSelectedRoomType(value);
    }
    SetRoomDetails((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const formData = new FormData();
  const SetFormData = async () => {
    if (RoomDetails !== null) {
      Object.entries(RoomDetails).forEach(([key, value]) => {
        if (value !== null) {
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
  };
  const handleAddRoom = async (event: any) => {
    try {
      setLoading(true);
      event.preventDefault();
      await SetFormData();
      const response = await fetch(
        `https://api.hostelbird.com/rooms/createRoom/${PropertyID}`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          body: formData,
        }
      );

      if (response.ok) {
        setLoading(false);
        SetRoomDetails(null);
        setShowSnakbar({
          value: "success",
        });
      } else if (response.status === 401) {
        alert("Login Again");
        setLoading(false);
        setShowSnakbar({
          value: "error",
        });
        router.push("/vendor-login");
      } else {
        alert(response.statusText);
        console.error("Error adding room:", response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <>
        <LinearProgress color="info" />
      </>
    );
  }

  if (showSnackBar.value === "success") {
    return (
      <>
        <SuccessComponent message={"Room Added Successfully"} />
        <Box sx={{ display: "flex", flexDirection: "column", mt: "2rem" }}>
          <Alert sx={{ width: "50rem", margin: "auto" }} severity="success">
            Room has been successfully added to your property
          </Alert>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "cener",
              justifyContent: "center",
              mt: "1rem",
            }}
          >
            <Button
              onClick={() => router.push(`/dashboard/${vendorName}`)}
              variant="outlined"
            >
              Back to home
            </Button>{" "}
            <Button
              sx={{ backgroundColor: "#3D66F8", color: "#fff", ml: "1rem" }}
              variant="contained"
              onClick={() => window.location.reload()}
            >
              Add another room
            </Button>
          </Box>
        </Box>
      </>
    );
  } else if (showSnackBar.value === "error") {
    return (
      <Box sx={{ display: "flex", mt: "1rem" }}>
        <Alert sx={{ width: "50rem", margin: "auto" }} severity="error">
          Something went wrong. Please Try again later
        </Alert>
        <FailureComponent />
      </Box>
    );
  }

  return (
    <Paper
      sx={{
        display: "flex",
        margin: "2rem 10rem",
        alignItems: "center",
        justifyContent: "center",
      }}
      elevation={10}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
          >
            Add New Room
          </Typography>
          <form onSubmit={handleAddRoom}>
            <TextField
              fullWidth
              id="RoomName"
              name="RoomName"
              label="Room Name"
              value={RoomDetails?.RoomName || ""}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="text"
              required
            />
            <TextField
              fullWidth
              id="RoomDescrption"
              name="RoomDescrption"
              label="Room Descirption"
              value={RoomDetails?.RoomDescrption || ""}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="text"
              required
            />
            <FormControl required fullWidth variant="outlined" margin="normal">
              <InputLabel>Room Type</InputLabel>
              <Select
                label="Room Type"
                id="RoomType"
                name="RoomType"
                value={RoomDetails?.RoomType || ""}
                onChange={handleRoomTypeChange}
              >
                <MenuItem value="Private Bedroom">Private Bedroom</MenuItem>{" "}
                <MenuItem value="Double Bedroom">Double Bedroom</MenuItem>
                <MenuItem value="Twin Bedroom">Twin Bedroom</MenuItem>
                <MenuItem value="Family Bedroom">Family Bedroom</MenuItem>
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="Private Tent">Private Tent</MenuItem>
                <MenuItem value="Shared Tent">Shared Tent</MenuItem>
                <MenuItem value="Mixed Dorms">Mixed Dorms</MenuItem>
                <MenuItem value="Male Dorms">Male Dorms</MenuItem>
                <MenuItem value="Female Dorms">Female Dorms</MenuItem>
                <MenuItem value="Male Capsule">Male Capsule</MenuItem>
                <MenuItem value="Female Capsule">Female Capsule</MenuItem>
                <MenuItem value="Mixed Capsule">Mixed Capsule</MenuItem>
                <MenuItem value="Mixed Pod">Mixed Pod</MenuItem>
                <MenuItem value="Male Pod">Male Pod</MenuItem>
                <MenuItem value="Female Pod">Female Pod</MenuItem>
              </Select>
            </FormControl>
            <FormControl required fullWidth variant="outlined" margin="normal">
              <InputLabel>Room Grade</InputLabel>
              <Select
                id="RoomGrade"
                name="RoomGrade"
                label="Room Grade"
                value={RoomDetails?.RoomGrade || ""}
                onChange={handleRoomTypeChange}
              >
                <MenuItem value="Basic">Basic</MenuItem>
                <MenuItem value="Standard">Standard</MenuItem>
                <MenuItem value="Deluxe">Deluxe</MenuItem>
                <MenuItem value="Suite">Suite</MenuItem>
                <MenuItem value="Superior">Superior</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              id="Price"
              name="Price"
              label="Set Price"
              value={RoomDetails?.Price || ""}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
              required
            />
            <TextField
              fullWidth
              id="NumberOfRoomsOfSameType"
              name="NumberOfRoomsOfSameType"
              label="No.of Rooms Of Same Type"
              value={RoomDetails?.NumberOfRoomsOfSameType || ""}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
              required
            />
            <TextField
              fullWidth
              id="weekDayPrice"
              name="weekDayPrice"
              label="weekDayPrice"
              value={RoomDetails?.weekDayPrice || ""}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
              required
            />
            <TextField
              fullWidth
              id="weekEndPrice"
              name="weekEndPrice"
              label="weekEndPrice"
              value={RoomDetails?.weekEndPrice || ""}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
              required
            />

            <TextField
              fullWidth
              id="NumberofGuestPerRoom"
              name="NumberofGuestPerRoom"
              label="NumberofGuestPerRoom"
              value={RoomDetails?.NumberofGuestPerRoom || ""}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="number"
              required
            />

            <FormControl required component="fieldset" margin="normal">
              <Typography variant="subtitle1">Ensuite</Typography>
              <RadioGroup
                id="Ensuite"
                name="Ensuite"
                row
                value={RoomDetails?.Ensuite || ""}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <Box
              {...getRootProps()}
              className="dropzone"
              sx={{
                padding: "1rem",
                maxWidth: "80rem",
              }}
            >
              <input {...getInputProps()} />
              <Typography
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                variant="h4"
              >
                Upload Room Images
              </Typography>

              {acceptedFiles.length >= 0 && (
                <Box
                  sx={{
                    border: "2px dashed #cccccc",
                    borderRadius: "1rem",
                    padding: "2rem",
                    marginTop: "1rem",
                  }}
                >
                  {isDragActive ? (
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                      variant="h5"
                    >
                      Drop the files here ...
                    </Typography>
                  ) : (
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                      variant="h5"
                    >
                      Drag n drop some files here, or click to select files (Max
                      4)
                    </Typography>
                  )}
                  <div className="preview">
                    {RoomDetails !== null &&
                      acceptedFiles
                        .slice(0, 4)
                        .map((file, index) => (
                          <Image
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index}`}
                            width={150}
                            height={150}
                          />
                        ))}
                  </div>
                </Box>
              )}
            </Box>

            <Button
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
                backgroundColor: "purple",
                marginBottom: "2rem",
                marginTop: "2rem",
              }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={DisableButtonOnError()}
            >
              Upload and Add Room
            </Button>
          </form>
        </Container>
      </Box>
    </Paper>
  );
}
