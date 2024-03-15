import { useEffect, useLayoutEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@mui/material";
import Image from "next/image";
import { StyledText } from "./index.style";

import { useDispatch, useSelector } from "react-redux";
import { GeTAdmin } from "../../Auth/Auth";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SetUpdateSuccess } from "@/Store/VendorSlice";

interface DetailsResponse {
  AllRelatedProperties: string[];
  responseObject: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    country: string;
  };
}

const VendorPageDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();

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

  const [details, setDetails] = useState<DetailsResponse | null>(null);

  const VendorNameFromRedux = useSelector(
    (state: any) => state.admin?.VendorNameForAdmin
  );
  const PropertyNameFromRedux = useSelector(
    (state: any) => state.admin?.PropertyNameForAdminVerificationForAdmin
  );

  const DisplayDetails = async () => {
    const response = await axios.get(
      `https://api.hostelbird.com/AdminHostelBird-dashboard/getAllVendorDetails/${VendorNameFromRedux}`,
      {
        withCredentials: true,
      }
    );
    const data = response.data;
    return data;
  };

  useEffect(() => {
    DisplayDetails().then((data) => {
      setDetails(data as any);
    });
  }, []);

  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://api.hostelbird.com/AdminHostelBird-dashboard/deleteVendor/${VendorNameFromRedux}`,
        {
          withCredentials: true,
        }
      );
      alert(setOpen(false));
      dispatch(SetUpdateSuccess("Success"));
      router.push("/admin-main/dashboard-restricted/properties");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {details &&
        details.responseObject &&
        details.AllRelatedProperties.length > 0 && (
          <Container>
            <Box>
              <Button
                sx={{ border: "1px solid red", color: "red", mt: "1rem" }}
                variant="outlined"
                color="primary"
                onClick={() => setOpen(true)}
              >
                Delete Vendor
              </Button>
              <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Delete Property?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this property? This action
                    cannot be undone.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpen(false)} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={handleDelete} color="primary" autoFocus>
                    Yes, Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>

            <Typography textAlign="center" variant="h3">
              Assets Overview
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">
                First Name: {details?.responseObject?.firstName}
              </Typography>
              <Typography>
                {" "}
                Last Name: {details?.responseObject?.lastName}
              </Typography>
              <Typography variant="body2">
                Country : {details?.responseObject?.country}
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography sx={{ mt: "1rem" }} variant="h4">
                  Related Properties
                </Typography>
              </Grid>

              {details ? (
                details?.AllRelatedProperties.map((property, index) => (
                  <Grid item key={index} xs={12} md={6} lg={4}>
                    <Paper elevation={3} style={{ padding: "20px" }}>
                      <Typography variant="h6">
                        Property Name: {property}
                      </Typography>
                      {/* <Button
                        variant="outlined"
                        sx={{ border: "1px solid green", m: "1rem" }}
                      >
                        View Property
                      </Button> */}
                    </Paper>
                  </Grid>
                ))
              ) : (
                <Box sx={{ m: "0 auto" }}>
                  <Typography variant="h3" sx={{ mt: "2rem", color: "red" }}>
                    Vendor has no Properties
                  </Typography>
                </Box>
              )}
            </Grid>
          </Container>
        )}
    </>
  );
};

export default VendorPageDetails;
