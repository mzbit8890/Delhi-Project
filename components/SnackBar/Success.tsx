import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import React, { useState } from "react";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { SetUpdateSuccess } from "@/Store/VendorSlice";

type SuccessComponentProps = {
  message: string;
};

const SuccessComponent: React.FC<SuccessComponentProps> = ({ message }) => {
  const vendorNamefromRedux = useSelector(
    (state: any) => state?.vendor?.VendorName
  );
  const [vendorName, setVendorName] = useState(vendorNamefromRedux ?? "");
  const dispatch = useDispatch();
  const [openMessage, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(SetUpdateSuccess("close"));
    setOpen(false);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={true}
        autoHideDuration={12000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default SuccessComponent;
