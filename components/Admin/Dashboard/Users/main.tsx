import { useEffect, useLayoutEffect, useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { StyledText } from "./index.style";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useRouter } from "next/navigation";
import { GeTAdmin } from "../../Auth/Auth";

const UserDetailsComponent = () => {
  interface UserDetailsI {
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: number;
    email: string;
    Country: string;
    city: string;
    DateAndTime: string;
    RoomAndPropertyBookedName: string;
    StartDateOfBooking: string;
    LastDateOfBooking: string;
  }
  const [userDetails, setUserDetails] = useState<UserDetailsI>();
  const UsernameFromRedux = useSelector(
    (state: any) => state.admin?.VendorNameForAdmin
  );
  const CityNameFromRedux = useSelector(
    (state: any) => state.admin?.cityForAdmin
  );
  const CountryNameFromRedux = useSelector(
    (state: any) => state.admin?.countryForAdmin
  );

  const router = useRouter();

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
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.comAdminHostelBird-dashboard/getAllUserDetails/${UsernameFromRedux}/${CountryNameFromRedux}/${CityNameFromRedux}`,
          {
            credentials: "include",
            mode: "cors",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUserDetails(data);
        } else {
          console.error("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={10}
        style={{
          marginTop: "5rem",
        }}
      >
        {userDetails && (
          <Box>
            <Typography
              sx={{ mt: "1rem", mb: "1rem" }}
              variant="h4"
              textAlign={"center"}
            >
              Personal Details
            </Typography>
            <Container
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <StyledText variant="body1">
                Name{" "}
                <p style={{ fontWeight: "bold" }}>
                  {userDetails?.firstName} {userDetails?.lastName}
                </p>{" "}
              </StyledText>
              <StyledText variant="body1">
                Username{" "}
                <p style={{ fontWeight: "bold" }}>{userDetails?.username} </p>
              </StyledText>
              <StyledText variant="body1">
                Phone Number{" "}
                <p style={{ fontWeight: "bold" }}>{userDetails.phoneNumber}</p>
              </StyledText>
              <StyledText variant="body1">
                Email <p style={{ fontWeight: "bold" }}>{userDetails?.email}</p>
              </StyledText>
              <StyledText variant="body1">
                Country{" "}
                <p style={{ fontWeight: "bold" }}> {userDetails?.Country}</p>
              </StyledText>
              <StyledText variant="body1">
                City <p style={{ fontWeight: "bold" }}>{userDetails?.city} </p>{" "}
              </StyledText>
            </Container>
            <StyledText sx={{ mt: "2rem", mb: "2rem" }} variant="body1">
              Date and Time when user was created
              <p style={{ fontWeight: "bold" }}>{userDetails?.DateAndTime}</p>
            </StyledText>

            <Typography
              sx={{ mt: "2rem", mb: "2rem" }}
              variant="h4"
              textAlign={"center"}
            >
              Other Details
            </Typography>
            <Container
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <StyledText variant="body1">
                Room and Property Booked{" "}
                <p style={{ fontWeight: "bold" }}>
                  {userDetails?.RoomAndPropertyBookedName
                    ? userDetails?.RoomAndPropertyBookedName
                    : "No Bookings currently"}
                </p>
              </StyledText>
              <StyledText variant="body1">
                Start Date of Booking{" "}
                <p style={{ fontWeight: "bold" }}>
                  {userDetails?.StartDateOfBooking
                    ? userDetails?.StartDateOfBooking
                    : "-"}
                </p>
              </StyledText>
              <StyledText variant="body1">
                Last Date of Booking{" "}
                <p style={{ fontWeight: "bold" }}>
                  {userDetails?.LastDateOfBooking
                    ? userDetails?.LastDateOfBooking
                    : "-"}
                </p>
              </StyledText>
            </Container>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default UserDetailsComponent;
