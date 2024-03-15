import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import EditLocation from "./dailogBox"; // Adjust the path accordingly

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

const LocationList = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.hostelbird.com/locations/getAll"
        );
        if (response.ok) {
          const data = await response.json();
          setLocations(data);
        } else {
          setError("Error fetching data");
        }
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const handleEdit = (location: Location) => {
    setSelectedLocation(location);
  };

  if (error) {
    return (
      <Typography
        variant="h2"
        sx={{ display: "flex", margin: "0 auto", mt: "5rem" }}
      >
        {error}{" "}
        <MinorCrashIcon
          sx={{ ml: "1rem", color: "grey", height: "4rem", width: "4rem" }}
        />
      </Typography>
    );
  }

  return (
    <Container>
      {!selectedLocation && (
        <Typography
          variant="h2"
          sx={{ mt: "1rem", mb: "1rem" }}
          textAlign={"center"}
        >
          Locations
        </Typography>
      )}

      {!selectedLocation && (
        <Grid container spacing={2}>
          {locations.map((location) => (
            <Grid
              sx={{ mt: "1rem" }}
              item
              key={location.id}
              xs={6}
              md={3}
              lg={3}
            >
              <Card elevation={10}>
                <CardMedia
                  component="img"
                  alt={`City ${location.CityName} Image`}
                  height="150"
                  image={location.CityImage}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {location.CityName}
                  </Typography>
                  <Typography sx={{ fontWeight: "lighter" }} noWrap>
                    State: {location.State}
                  </Typography>
                  <Typography sx={{ fontWeight: "lighter" }} noWrap>
                    Country: {location.Country}
                  </Typography>
                  <Typography sx={{ fontWeight: "lighter" }} noWrap>
                    City Info: {location.CityInfo}
                  </Typography>
                  <Typography sx={{ fontWeight: "lighter" }} noWrap>
                    Latitude: {location.Lat}
                  </Typography>
                  <Typography sx={{ fontWeight: "lighter" }} noWrap>
                    Longitude: {location.Long}
                  </Typography>
                  {/* Add other fields as needed */}
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(location)}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {selectedLocation && (
        <EditLocation
          location={selectedLocation}
          onUpdate={(updatedLocation) => {
            // Handle update logic if needed
            console.log("Updated Location:", updatedLocation);
            setSelectedLocation(null);
          }}
        />
      )}
    </Container>
  );
};

export default LocationList;
