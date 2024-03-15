import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Select,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  StyledMainPaper,
  LabelText,
  TextBox,
  TextFieldComponent,
  CheckboxWrapper,
  LabelTypography,
} from "./index.style";
import { Raleway } from "next/font/google";
import { nanoid } from "nanoid";
import { Room } from "@/Store/Booking/BookingSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  NameOfCountries,
  NameOfCities,
} from "@/components/Admin/NameofCountiesAndCities/CountiesAndCities";
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import CircularProgress from "@mui/material/CircularProgress";
import {
  setBookingDetails,
  setStatusForBooking,
} from "@/Store/Booking/BookingStatus";

interface BookingOrder {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: string;
  entity: string;
  id: string;
  notes: any[];
  offer_id: string | null;
  receipt: string;
  status: string;
}

const initializeRazorpaySDK = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

function generateRandomPassword(): string {
  return nanoid(8);
}
const randomPassword = generateRandomPassword();

const Form = () => {
  const hiddenRefButton = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: randomPassword,
    phoneNumber: "",
    Country: "",
    city: "",
  });

  const [showHiddenFiled, setShowHiddenFields] = useState(1);

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phoneNumber.trim() !== "";

  const paperStyle = {
    padding: "20px",
    width: "50rem",
    margin: "auto",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  };

  const selectBookingRoom = useSelector((state: any) => state.booking.rooms);
  const checkin = useSelector((state: any) => state.bookingDates.checkIn);
  const checkout = useSelector((state: any) => state.bookingDates.checkOut);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event: any) => {
    setSelectedCity(event.target.value);
  };

  const [razorpayInitialized, setRazorpayInitialized] = useState(false);

  useLayoutEffect(() => {
    const initialize = async () => {
      const initialized = await initializeRazorpaySDK();
      if (initialized) {
        setRazorpayInitialized(true);
      }
    };
    initialize();
  }, []);
  const [loading, setLoading] = useState(false);
  const CreateUser = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.hostelbird.com/user/createUser",
        formData
      );

      if (response.data.userExists === true) {
        setLoading(false);
        if (!loading) {
          await createBooking();
        }
      } else if (response.data) {
        setLoading(false);
        if (!loading) {
          await createBooking();
        }
      }
    } catch (error: any) {
      console.error("Failed to create user:", error.response.data);
    }
  };

  const [bookingData, setBookingData] = useState<BookingOrder>({
    amount: 0,
    amount_due: 0,
    amount_paid: 0,
    attempts: 0,
    created_at: 0,
    currency: "INR",
    entity: "",
    id: "",
    notes: [],
    offer_id: "",
    receipt: "",
    status: "",
  });
  const processedRoomIds = selectBookingRoom?.map((room: Room) => room.id);
  console.log(formData);

  const createBooking = async (): Promise<object> => {
    try {
      setLoading(true);
      const response = await axios.post(
        `https://api.hostelbird.com/bookings/createBookingOrder`,
        {
          order: selectBookingRoom,
        }
      );

      const responseData: BookingOrder = response.data;
      if (responseData) {
        setBookingData(responseData);

        await openPaymentWindow(responseData);
      }

      return responseData;
    } catch (error) {
      dispatch(setStatusForBooking(false));
      console.error("Error creating booking:", error);
      throw error;
    } finally {
      setLoading(true);
    }
  };

  const userDataForBooking = {
    roomIds: processedRoomIds,
    startDate: checkin,
    endDate: checkout,
    username: formData?.email,
  };

  const openPaymentWindow = async (responseData: any) => {
    if (!razorpayInitialized) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    setLoading(true);

    const options = {
      key: "rzp_test_aXEeYhiIuoprXU",
      name: bookingData ? bookingData?.receipt.slice(0, 15) : "",
      currency: "INR",
      amount: responseData.amount,
      order_id: bookingData ? bookingData?.id : undefined,
      description: "Booking Room",
      image: selectBookingRoom[0]?.RoomImages[0],
      callback_url: "https://api.hostelbird.com/bookings/verifyPayment",
      handler: async function (response: any) {
        const requestData = {
          userData: userDataForBooking,
          razorpay_order_id: response.razorpay_payment_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };

        try {
          const responseVerify = await axios.post(
            "https://api.hostelbird.com/bookings/verifyPayment",
            requestData
          );
          const details = responseVerify.data.details;
          dispatch(setBookingDetails(details));
          dispatch(setStatusForBooking(true));
        } catch (error) {
          console.error("Error verifying payment:", error);
          dispatch(setStatusForBooking(false));
        }
      },
    };
    try {
      const paymentObject = await new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={`${raleway.variable}`}>
      <StyledMainPaper elevation={0}>
        <Typography mb={4} variant="h5">
          Guest Information
        </Typography>
        <Divider />
        <form onSubmit={CreateUser}>
          {showHiddenFiled === 1 ? (
            <>
              <TextBox>
                <LabelText variant="h6">Name</LabelText>
                <TextFieldComponent
                  required
                  placeholder="enter your name"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontFamily: "var(--font-raleway)",
                      borderRadius: "35px",
                      padding: "5px",
                    },
                  }}
                />
              </TextBox>
              <TextBox>
                <LabelText variant="h6">Email</LabelText>
                <TextFieldComponent
                  required
                  placeholder="enter your email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontFamily: "var(--font-raleway)",
                      borderRadius: "35px",
                      padding: "5px",
                    },
                  }}
                />
              </TextBox>
              <TextBox>
                <LabelText variant="h6">Number</LabelText>
                <TextFieldComponent
                  required
                  placeholder="enter your number"
                  variant="outlined"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  InputProps={{
                    style: {
                      fontFamily: "var(--font-raleway)",
                      borderRadius: "35px",
                      padding: "5px",
                    },
                  }}
                />
              </TextBox>
              {/* <FormGroup>
                <FormControlLabel sx={{fontSize: '16px'}} control={<Checkbox />} label="I acknowledge and accept the terms and conditions mentioned in the Property Policy & Cancellation Policy. " />
              </FormGroup> */}
              <CheckboxWrapper>
                <Checkbox />
                <LabelTypography
                  variant="body1"
                  sx={{ fontSize: { xs: "13px", lg: "16px" } }}
                >
                  I acknowledge and accept the terms and conditions mentioned in
                  the <span style={{ color: "#F65656" }}>Property Policy</span>{" "}
                  &{" "}
                  <span style={{ color: "#F65656" }}>Cancellation Policy.</span>
                </LabelTypography>
              </CheckboxWrapper>
              <Box sx={buttonContainerStyle}>
                <Button
                  sx={{
                    width: "162px",
                    borderRadius: "30px",
                    height: "50px",
                    backgroundColor: "#F65656",
                  }}
                  variant="contained"
                  color="primary"
                  type="button"
                  disabled={!isFormValid}
                  onClick={() => setShowHiddenFields(2)}
                >
                  Next
                </Button>
              </Box>
            </>
          ) : showHiddenFiled === 2 ? (
            <>
              <TextBox>
                <LabelText>Country</LabelText>
                <Select
                  className={`${raleway.variable}`}
                  id="Country"
                  name="Country"
                  sx={{
                    width: "85%",
                    fontFamily: "var(--font-raleway)",
                    borderRadius: "30px",
                  }}
                  value={selectedCountry}
                  onChange={(e) => {
                    handleCountryChange(e), handleChange(e as any);
                  }}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>
                    Select Country
                  </MenuItem>
                  {NameOfCountries?.map((country) => (
                    <MenuItem key={country} value={country}>
                      <Typography
                        className={`${raleway.variable}`}
                        sx={{ fontFamily: "var(--font-raleway)" }}
                      >
                        {country}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </TextBox>
              <TextBox>
                <LabelText>City</LabelText>
                <Select
                  id="city"
                  name="city"
                  value={selectedCity}
                  onChange={(e) => {
                    handleCityChange(e), handleChange(e as any);
                  }}
                  displayEmpty
                  disabled={!selectedCountry}
                  fullWidth
                  sx={{
                    width: "85%",
                    fontFamily: "var(--font-raleway)",
                    borderRadius: "30px",
                  }}
                >
                  <MenuItem value="" disabled>
                    Select City
                  </MenuItem>
                  {selectedCountry &&
                    NameOfCities[selectedCountry]?.map((city: string) => (
                      <MenuItem key={city} value={city}>
                        <Typography
                          className={`${raleway.variable}`}
                          sx={{ fontFamily: "var(--font-raleway)" }}
                        >
                          {city}{" "}
                        </Typography>
                      </MenuItem>
                    ))}
                </Select>
              </TextBox>
              <Box sx={buttonContainerStyle}>
                <Button
                  disabled={loading}
                  sx={{
                    width: "162px",
                    borderRadius: "30px",
                    height: "50px",
                    backgroundColor: "#F65656",
                    fontFamily: "var(--font-raleway)",
                  }}
                  variant="contained"
                  onClick={() => setShowHiddenFields(1)}
                >
                  Back
                </Button>
                <Button
                  disabled={loading}
                  sx={{
                    width: "162px",
                    borderRadius: "30px",
                    height: "50px",
                    backgroundColor: "#F65656",
                    fontFamily: "var(--font-raleway)",
                  }}
                  variant="contained"
                  color="primary"
                  // type="submit"
                  onClick={() => setShowHiddenFields(3)}
                >
                  Next
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography my={3} sx={{ fontSize: "25px", color: "#8E8E8E" }}>
                You have entered all the details, now click on “Confirm Booking”
                button to go to the payment gateway
              </Typography>
              <Box sx={buttonContainerStyle}>
                <Button
                  disabled={loading}
                  sx={{
                    width: "162px",
                    borderRadius: "30px",
                    height: "50px",
                    backgroundColor: "#F65656",
                    fontFamily: "var(--font-raleway)",
                  }}
                  variant="contained"
                  onClick={() => setShowHiddenFields(2)}
                >
                  Back
                </Button>
                <Button type="submit">Hidden</Button>
              </Box>
            </>
          )}
        </form>
      </StyledMainPaper>
    </Box>
  );
};

export default Form;
