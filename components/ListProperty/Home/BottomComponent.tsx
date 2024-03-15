import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import Tag from "@/assests/Traveller.png";
import Hammer from "@/assests/Hammer.webp";
import Speaker from "@/assests/speaker.svg";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,

  color: "#ff5349",
  fontWeight: "medium",
};

const image = {
  height: "5rem",
  width: "5rem",
  marginTop: "1rem",
};

function HowItWorksComponent() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        backgroundColor: "#E3DFFD",
        color: "#000",
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontWeight: "bolder",
            marginBottom: "5rem",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "8rem",
              height: "0.2rem",
              backgroundColor: "#ff5349",
              display: "block",
            },
          }}
          variant="h3"
          component="h2"
        >
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src={Speaker.src}
                  alt="suitcase"
                  sx={image}
                />
                <Typography
                  sx={{
                    marginTop: "2rem",
                    fontWeight: "lighter",
                  }}
                  variant="h6"
                  align="center"
                >
                  Sign up, add details, showcase amenities.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box component="img" src={Tag.src} alt="graph" sx={image} />
                <Typography
                  sx={{ marginTop: "2rem", fontWeight: "lighter" }}
                  variant="h6"
                  align="center"
                >
                  Get Verfied
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box component="img" src={Hammer.src} alt="clock" sx={image} />
                <Typography
                  sx={{ marginTop: "2rem", fontWeight: "lighter" }}
                  variant="h6"
                  align="center"
                >
                  {
                    "Welcome guests, grow your hostel business with positive reviews."
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          size="large"
          variant="contained"
          component="a"
          href="/listProperty/register-form"
          sx={{ mt: 8, backgroundColor: "#ff5349" }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default HowItWorksComponent;
