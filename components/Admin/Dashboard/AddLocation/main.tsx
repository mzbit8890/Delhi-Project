import React, { useState, useCallback, useEffect } from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";
import Autocomplete from "react-google-autocomplete";
import { useDropzone } from "react-dropzone";

const AddLocation = () => {
  const maxWords = 250;
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [info, setInfo] = useState("");
  const [infoCount, setInfoCount] = useState("");
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles: any) => {
    setImage(acceptedFiles[0]);
  }, []);
  useEffect(() => {
    setInfoCount(`${info.split(/\s+/).length}/${maxWords} words`);
  }, [info]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleCountryChange = (event: any) => {
    setCountry(event.target.value);
  };

  const handelLocationChange = (place: any) => {
    setLat(place.geometry?.location?.lat());
    setLong(`${place.geometry?.location?.lng()}`);
  };

  const handleStateChange = (event: any) => {
    setState(event.target.value);
  };

  const handleCityChange = (event: any) => {
    setCity(event.target.value);
  };

  const handleInfoChange = (event: any) => {
    setInfo(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("CityName", city);
    formData.append("CityInfo", info);
    formData.append("State", state);
    formData.append("Country", country);
    formData.append("Lat", lat);
    formData.append("Long", long);
    if (!country || !state || !city || !info || !lat || !long) {
      alert("Please fill in all required fields before submitting.");
      return;
    }
    const wordCount = info.trim().split(/\s+/).length;
    if (wordCount <= 100 || wordCount >= maxWords) {
      alert("Please add info at least 100 and at max 250 words");
      return;
    }
    if (!image) {
      alert("Please add the location image first.");
      return;
    } else {
      formData.append("image", image);
    }
    await fetch("https://api.hostelbird.com/locations/create", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: formData,
    })
      .then((response) => {
        if (response.status === 201) {
          alert("Location added successfully!");
        } else {
          alert("Failed to add location. Please try again.");
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
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Submit Form</Typography>
        <Typography variant="h6">
          Note: Kindly add the City Details carefully
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          apiKey={"AIzaSyC-wjWcJX2yxd7d6r4r4-BtZSwwMzOgcBs"}
          onPlaceSelected={(place: any) => handelLocationChange(place)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="City Info"
          fullWidth
          rows={5}
          multiline
          value={info}
          helperText={infoCount}
          onChange={handleInfoChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="country"
          fullWidth
          multiline
          value={country}
          onChange={handleCountryChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="State"
          fullWidth
          value={state}
          onChange={handleStateChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="City"
          fullWidth
          value={city}
          onChange={handleCityChange}
        />
      </Grid>
      <Grid item xs={12}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag & drop an image here, or click to select one</p>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddLocation;
