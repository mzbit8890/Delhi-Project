import {
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Input,
  LinearProgress,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ThankYouComponentForVendor from "../SnackBar/Success";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { SetUpdateSuccess } from "@/Store/VendorSlice";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const UploadImagesComponent = () => {
  const dispatch = useDispatch();
  const vendorName = useSelector((state: any) => state?.vendor?.VendorName);
  const PropertyID = useSelector((state: any) => state?.vendor?.PropertyID);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [PropertyImages, setPropertyImages] = useState<string[]>([]);
  const [errorOccured, setErrorOccured] = useState(false);
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setPropertyImages([...PropertyImages, ...acceptedFiles]);
    },
    [PropertyImages]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: true,
    });

  const formData = new FormData();
  const uploadfile = async () => {
    for (const image of PropertyImages) {
      formData.append("image", image);
    }
  };

  const handleUploadClick = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await uploadfile();
      const response = await fetch(
        `https://api.hostelbird.com/propertyDetails/updatePropertyDetails/${PropertyID}`,
        {
          method: "POST",
          credentials: "include",
          mode: "cors",
          body: formData,
        }
      );

      if (response.status === 201) {
        setIsLoading(false);
        setPropertyImages([]);
        window.history.back();
        dispatch(SetUpdateSuccess("success"));
      } else if (response.status === 401) {
        alert("Login Again");
        setIsLoading(false);
        router.push("/vendor-login");
      } else if (!response.ok) {
        setIsLoading(false);
        window.history.back();
        dispatch(SetUpdateSuccess("error"));
      }
    } catch (error) {
      setIsLoading(true);
      setErrorOccured(true);
      console.error("Error uploading images:", error);
    }
  };
  const [PropertyData, setPropertyData] = useState({
    PropertyImages: [],
  });
  let username = useSelector(
    (state: any) => state?.vendor?.vendorNameForVendorDashboard
  );
  username.replace("@", "%40");

  const Properties = useSelector(
    (state: any) => state.vendor?.PropertiesForVendorDashboard
  );

  const selectedProperty = Properties.find(
    (property: any) => property.id === PropertyID
  );
  const SelectedPropertyName =
    selectedProperty?.propertyName || "No property selected";

  const [selectedImage, setSelectedImage] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setSelectedImage((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((item) => item !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.hostelbird.com/vendor/PropertyDetails/${username}/${SelectedPropertyName}`,
          {
            credentials: "include",
            mode: "cors",
          }
        );
        if (response.ok) {
          const data = await response.json();

          setPropertyData({
            PropertyImages: data?.propertyDetails.PropertyImages || "",
          });
        } else {
          console.error("Failed to fetch data from API");
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, [username, SelectedPropertyName]);

  const handleDeleteClick = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `https://api.hostelbird.com/propertyDetails/delete-fields/${PropertyID}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          data: {
            indicies: selectedImage,
          },
        }
      );

      if (response) {
        window.location.reload();
        dispatch(SetUpdateSuccess("success"));
      } else {
        dispatch(SetUpdateSuccess("error"));
      }
    } catch (error) {
      dispatch(SetUpdateSuccess("error"));
    } finally {
      setIsLoading(false);
      // handleCloseModal();
      // handleConfirmDialogClose();
    }
  };

  if (isLoading) {
    return (
      <>
        <LinearProgress color="info" />
      </>
    );
  }

  return !isLoading ? (
    errorOccured ? (
      <Box
        className={`${poppins.variable}`}
        sx={{
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontFamily: "var(--font-poppins)" }}
          variant="h5"
          color="error"
        >
          Error uploading images. Please try again later.
        </Typography>
        <Button
          sx={{
            marginTop: "2rem",
            backgroundColor: "purple",
            fontFamily: "var(--font-poppins)",
          }}
          type="button"
          variant="contained"
          onClick={() => setErrorOccured(false)}
        >
          Try Again
        </Button>
      </Box>
    ) : (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            m: "2rem",
          }}
        >
          <Grid container spacing={1}>
            {PropertyData &&
              PropertyData.PropertyImages.map((image, index) => (
                <Grid item key={index} xs={2} md={3} lg={3}>
                  <Paper
                    style={{
                      width: 200,
                      margin: "0 8rem",
                      height: 200,

                      overflow: "scroll",
                      position: "relative",
                      border: !selectedImage.includes(index)
                        ? "1px solid #000"
                        : "2px solid red",
                    }}
                  >
                    <IconButton
                      onClick={handleDeleteClick}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      {selectedImage.includes(index) ? (
                        <Delete sx={{ color: "red" }} />
                      ) : (
                        <Delete />
                      )}
                    </IconButton>

                    <Image
                      src={image}
                      alt={`Property Image ${index + 1}`}
                      width={150}
                      height={150}
                      style={{ objectFit: "cover" }}
                      onClick={() => handleClick(index)}
                    />
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Box>

        <Typography sx={{ fontFamily: "var(--font-poppins)" }}>
          {PropertyData.PropertyImages.length === 20
            ? "Please Delete Some to upload more"
            : `  You can Upload ${
                20 - PropertyData?.PropertyImages?.length
              } more images`}
        </Typography>

        <Box
          {...getRootProps()}
          className="dropzone"
          sx={{
            padding: "1rem",
            maxWidth: "80rem",
          }}
        >
          <input {...getInputProps()} />
          <Typography
            variant="h4"
            className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
          >
            Upload Property Images
          </Typography>
          {PropertyData.PropertyImages.length !== 20 ? (
            <>
              {acceptedFiles.length >= 0 && (
                <Box
                  sx={{
                    border: "2px dashed #cccccc",
                    borderRadius: "1rem",
                    padding: "2rem",
                    marginTop: "1rem",
                  }}
                >
                  {isDragActive ? (
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                      variant="h5"
                    >
                      Drop the files here ...
                    </Typography>
                  ) : (
                    <Typography
                      variant="h5"
                      className={`${poppins.variable}`}
                      sx={{ fontFamily: "var(--font-poppins)" }}
                    >
                      Drag n drop some files here, or click to select files
                    </Typography>
                  )}
                  <div className="preview">
                    {acceptedFiles.map((file, index) => (
                      <Image
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index}`}
                        width={150}
                        height={150}
                      />
                    ))}
                  </div>
                </Box>
              )}
            </>
          ) : (
            <Box>
              <Typography
                sx={{ fontFamily: "var(--font-poppins)", mt: "1rem" }}
              >
                Max Limit Reached.
              </Typography>
              <Button
                sx={{ border: "1px solid red", color: "red", mt: "1rem" }}
                placeholder="delete images"
                variant="outlined"
              >
                Delete Images
              </Button>
            </Box>
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            className={`${poppins.variable}`}
            sx={{
              fontFamily: "var(--font-poppins)",
              marginTop: "2rem",
              backgroundColor: "orange",
              marginRight: "1rem",
            }}
            type="button"
            variant="contained"
            href={`/dashboard/${vendorName}`}
          >
            Back
          </Button>
          <Button
            className={`${poppins.variable}`}
            sx={{
              marginTop: "2rem",
              backgroundColor: "purple",
              fontFamily: "var(--font-poppins)",
            }}
            type="button"
            variant="contained"
            onClick={handleUploadClick}
            disabled={acceptedFiles.length === 0}
          >
            Upload
          </Button>
        </Box>
      </Box>
    )
  ) : (
    ""
  );
};

export default UploadImagesComponent;
