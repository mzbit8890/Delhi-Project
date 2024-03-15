import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useDropzone } from "react-dropzone";

interface Location {
  id: string;
  CityName: string;
  State: string;
  Country: string;
  CityInfo: string;
  Lat: string;
  Long: string;
  CityImage: string;
}

interface EditLocationProps {
  location: Location;
  onUpdate: (updatedLocation: Location) => void;
}

const EditLocation: React.FC<EditLocationProps> = ({ location, onUpdate }) => {
  const [error, setError] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [cityInfo, setCityInfo] = useState<string>(location.CityInfo);
  const [state, setState] = useState<string>(location.State);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoCount, setInfoCount] = useState("");
  const maxWords = 250;

  useEffect(() => {
    setInfoCount(`${cityInfo.split(/\s+/).length}/${maxWords} words`);
  }, [cityInfo]);

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(
        "https://api.hostelbird.com/locations/delete/" + location.id,
        {
          method: "GET",
        }
      );

      if (response.status === 200) {
        alert("Location deleted successfully! Please refresh the page");
        window.location.reload();
      } else {
        console.log(response);
        alert("Failed to update location. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to delete location");
    } finally {
      setOpenDialog(false);
    }
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("id", location.id);
    formData.append("CityName", location.CityName);
    formData.append("State", state);
    formData.append("Country", location.Country);
    formData.append("CityInfo", cityInfo);
    formData.append("Lat", location.Lat);
    formData.append("Long", location.Long);
    const wordCount = cityInfo.trim().split(/\s+/).length;
    if (wordCount <= 100 || wordCount >= maxWords) {
      alert("Please add info at least 100 and at max 250 words");
      return;
    }
    if (image) {
      formData.append("image", image);
    }
    fetch("https://api.hostelbird.com/locations/update", {
      method: "PUT",
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Location updated successfully!");
          window.location.reload();
        } else {
          alert("Failed to update location. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Submission response:", data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Error submitting data. Please try again.");
      });
    onUpdate({
      ...location,
      CityImage: image ? URL.createObjectURL(image) : location.CityImage,
    });
  };

  const onDrop = (acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  if (error) {
    return (
      <Typography
        variant="h2"
        sx={{ display: "flex", margin: "0 auto", mt: "5rem" }}
      >
        {error}
      </Typography>
    );
  }

  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ mt: "1rem", mb: "1rem" }}
        textAlign={"center"}
      >
        Edit Location
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            label="City Name"
            fullWidth
            margin="normal"
            value={location.CityName}
            disabled
          />
          <TextField
            label="State"
            fullWidth
            margin="normal"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            label="Country"
            fullWidth
            margin="normal"
            value={location.Country}
            disabled
          />
          <TextField
            label="City Info"
            fullWidth
            multiline
            rows={9}
            margin="normal"
            value={cityInfo}
            helperText={infoCount}
            onChange={(e) => setCityInfo(e.target.value)}
          />
          <TextField
            label="Latitude"
            fullWidth
            margin="normal"
            value={location.Lat}
            disabled
          />
          <TextField
            label="Longitude"
            fullWidth
            margin="normal"
            value={location.Long}
            disabled
          />

          {/* Dropzone for image upload */}
          <div {...getRootProps()} style={{ marginTop: "16px" }}>
            <input {...getInputProps()} />
            <Typography variant="subtitle1">
              Drop an image here, or click to select one.
            </Typography>
          </div>
          {/* <Button onClick={handleDelete} variant="contained" color="secondary" style={{ margin: "16px" }}>
                        Delete Location
                    </Button> */}

          {/* Confirmation Dialog */}
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete this location?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={confirmDelete} color="secondary">
                Confirm Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>

      <Button onClick={handleUpdate} variant="contained" color="primary">
        Update Location
      </Button>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="secondary"
        style={{ margin: "16px" }}
      >
        Delete Location
      </Button>
    </Container>
  );
};

export default EditLocation;
