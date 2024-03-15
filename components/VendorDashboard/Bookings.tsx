import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Poppins } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import {
  SetPropertyIdForVendorDashboard,
  SetUpdateSuccess,
} from "@/Store/VendorSlice";
const BookingSection = () => {
  interface Booking {
    id: string;
    propertyName: string;
    roomName: string;
    startDate: string;
    endDate: string;
    UserWhoBookedTheRoom: string;
    transactionID: string;
    currentStatus: string;
  }

  const [bookings, setBookings] = useState<Booking[]>([]);
  const dispatch = useDispatch();

  const properties = useSelector(
    (state: any) => state.vendor.PropertiesForVendorDashboard
  );
  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);
  const [selectedId, setselectedId] = useState(
    PropertyID ? PropertyID : properties[0]?.id
  );

  useEffect(() => {
    dispatch(SetPropertyIdForVendorDashboard(selectedId));
  }, [selectedId, dispatch]);

  const handlePropertyChange = (e: any) => {
    const newSelectedId = e.target.value;
    setselectedId(newSelectedId);
  };
  const selectedProperty = properties.find(
    (property: any) => property.id === PropertyID
  );
  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/bookings/getAllBookingForVendor/${PropertyID}`
        );
        if (response.ok) {
          const data = await response.json();
          data.sort((a: any, b: any) => {
            if (a.id > b.id) return -1;
            if (a.id < b.id) return 1;
            return 0;
          });

          setBookings(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBookings();
  }, [PropertyID]);

  return (
    <Container sx={{ marginTop: 4 }} maxWidth="md">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          className={`${poppins.variable}`}
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
                className={`${poppins.variable}`}
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
      {bookings.length !== 0 ? (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", m: "1rem" }}
          >
            {bookings[0]?.propertyName}
          </Typography>
          {bookings?.map((booking, index) => (
            <Paper
              key={index}
              sx={{ padding: 2, marginBottom: 2 }}
              elevation={5}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "text.secondary",
                    }}
                    primary={`Room Name: `}
                    secondaryTypographyProps={{
                      variant: "h6",
                      fontWeight: "bold",
                    }}
                    secondary={booking.roomName}
                  />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "text.secondary",
                    }}
                    primary={`Start Date: `}
                    secondaryTypographyProps={{
                      variant: "h6",
                      fontWeight: "bold",
                    }}
                    secondary={booking.startDate}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "text.secondary",
                    }}
                    primary={`End Date: `}
                    secondaryTypographyProps={{
                      variant: "h6",
                      fontWeight: "bold",
                    }}
                    secondary={booking.endDate}
                  />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "text.secondary",
                    }}
                    primary={`Booked By: `}
                    secondaryTypographyProps={{
                      variant: "h6",
                      fontWeight: "bold",
                    }}
                    secondary={booking.UserWhoBookedTheRoom}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "text.secondary",
                    }}
                    primary={`Transaction ID: `}
                    secondaryTypographyProps={{
                      variant: "h6",
                      fontWeight: "bold",
                    }}
                    secondary={booking.transactionID}
                  />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "subtitle2",
                      color: "text.secondary",
                    }}
                    primary={`Status: `}
                    secondaryTypographyProps={{
                      variant: "h6",
                      fontWeight: "bold",
                    }}
                    secondary={booking.currentStatus}
                  />
                </ListItem>
              </List>
            </Paper>
          ))}
        </>
      ) : (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="h2"
        >
          No Bookings currently
        </Typography>
      )}
    </Container>
  );
};

export default BookingSection;
