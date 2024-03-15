import { useState, useEffect, useLayoutEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  setCityForAdmin,
  setCountryForAdmin,
  setVendorNameForAdmin,
} from "@/Store/AdminSlice";
import {
  NameOfCities,
  NameOfCountries,
} from "../../NameofCountiesAndCities/CountiesAndCities";
import { GeTAdmin } from "../../Auth/Auth";
interface User {
  username: string;
  Country: string;
  city: string;
}

const UsersByCountryAndCity = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCity, setSelectedCity] = useState("Delhi");

  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = await GeTAdmin();

        if (!isAuthenticated) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [selectedCountry, selectedCity]);

  const errorState = "Error occured pls try again";

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/getUserByCountryAndCity/${selectedCountry}/${selectedCity}`,
        {
          credentials: "include",
          mode: "cors",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        setUsers([]);
      }
    } catch (error) {
      setUsers(errorState as unknown as []);
      console.error("Error fetching users", error);
    }
  };

  const handleCountryChange = (event: any) => {
    const selectedCountryValue = event.target.value as string;
    setSelectedCountry(selectedCountryValue);
    setSelectedCity("");
  };

  const handleCityChange = (event: any) => {
    setSelectedCity(event.target.value as string);
  };

  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ mt: "1rem", mb: "1rem" }}
        textAlign={"center"}
      >
        Users by Country and City
      </Typography>

      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.5rem",
          mb: "1rem",
        }}
      >
        {NameOfCountries.sort().map((country: any, index: number) => (
          <MenuItem value={country} key={index}>
            {country}
          </MenuItem>
        ))}
      </Select>

      {selectedCountry && (
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            mb: "1rem",
          }}
        >
          {(NameOfCities[selectedCountry] || [])
            .sort()
            .map((city: string, index: number) => (
              <MenuItem value={city} key={index}>
                {city}
              </MenuItem>
            ))}
        </Select>
      )}
      <Typography variant="h5" align="left" sx={{ margin: "1rem" }}>
        Showing {users.length} user in {selectedCity},{selectedCountry}
      </Typography>
      <Grid container spacing={2}>
        {users?.length === 0 ? (
          <Typography
            variant="h2"
            sx={{ display: "flex", margin: "0 auto", mt: "5rem" }}
          >
            No Users found{" "}
            <MinorCrashIcon
              sx={{ ml: "1rem", color: "grey", height: "4rem", width: "4rem" }}
            />
          </Typography>
        ) : (
          users?.map((user, index) => (
            <Grid sx={{ mt: "1rem" }} item key={index} xs={6} md={3} lg={3}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                }}
                elevation={10}
              >
                <Typography sx={{ fontWeight: "lighter" }}>
                  Username:{" "}
                  <span style={{ fontWeight: "bold" }}>{user.username}</span>
                </Typography>
                <Typography
                  sx={{ mt: "1rem", mb: "1rem", fontWeight: "lighter" }}
                >
                  Country:{" "}
                  <span style={{ fontWeight: "bold" }}>{user.Country}</span>
                </Typography>
                <Typography sx={{ fontWeight: "lighter" }}>
                  City: <span style={{ fontWeight: "bold" }}>{user.city}</span>
                </Typography>
                <Button
                  sx={{ backgroundColor: "#FF5F1F", mt: "1rem" }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    router.push(`usersdetails/${user.username}`);
                    dispatch(setCountryForAdmin(user?.Country));
                    dispatch(setCityForAdmin(user?.city));
                    dispatch(setVendorNameForAdmin(user?.username));
                  }}
                >
                  View
                </Button>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default UsersByCountryAndCity;
