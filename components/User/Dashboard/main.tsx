import { useEffect, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarComponent from "./SideBar";

function UserDashboardComponent() {
  const router = useRouter();
  const [userExists, setUserExists] = useState(false);

  // useLayoutEffect(() => {
  //   const IsAuthticated = getCookie("access_token_user");

  //   if (!IsAuthticated && userExists) {
  //     router.push("/user/sign-in");
  //   }
  // }, [router, userExists]);

  interface UserDetailsI {
    username: string;
    PhoneNumber: string;
    Email: string;
    Country: string;
    City: string;
    RoomAndPropertyBookedName: string[];
    StartDateOfBooking: string[];
    LastDateOfBooking: string[];
    currentStatus: string;
  }
  const [userDetails, setUserDetails] = useState<UserDetailsI>({
    username: "",
    PhoneNumber: "",
    Email: "",
    Country: "",
    City: "",
    RoomAndPropertyBookedName: [],
    StartDateOfBooking: [],
    LastDateOfBooking: [],
    currentStatus: "ssss",
  });

  const usernameFromRedux = useSelector((state: any) => state.user?.username);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://api.hostelbird.com/user/getUserDetails/${usernameFromRedux}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserDetails(data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkUserExists();
  }, []);

  const checkUserExists = async () => {
    try {
      if (usernameFromRedux) {
        try {
          const response = await fetch(
            `https://api.hostelbird.com/user/checkUserExits/${usernameFromRedux}`
          );

          if (response.ok) {
            const data = await response.json();
            if (data.exists) {
              setUserExists(true);
              fetchUserData();
            } else {
              setUserExists(false);
            }
          } else {
            setUserExists(false);
          }
        } catch (error) {
          alert("Error checking user existence");
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", mt: "2rem" }}
      maxWidth="lg"
    >
      {userExists ? (
        <>
          <SidebarComponent />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography textAlign={"center"} variant="h4" gutterBottom>
                Welcome {userDetails?.username}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Phone Number"
                      secondary={userDetails?.PhoneNumber || "Not available"}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={userDetails?.Email}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Country"
                      secondary={userDetails.Country}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="City" secondary={userDetails.City} />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <List>
                  {userDetails &&
                  userDetails?.RoomAndPropertyBookedName?.length > 0 ? (
                    userDetails?.RoomAndPropertyBookedName?.map(
                      (booking: any, index: any) => (
                        <ListItem key={index}>
                          <ListItemText
                            primary={`Room and Property Name ${booking}`}
                            secondary={`Start Date: ${userDetails?.StartDateOfBooking[index]} - End Date: ${userDetails?.LastDateOfBooking[index]}, ${userDetails?.currentStatus[index]}`}
                          />
                        </ListItem>
                      )
                    )
                  ) : (
                    <Typography textAlign={"center"} variant="h4">
                      No Bookings currently
                    </Typography>
                  )}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

export default UserDashboardComponent;
