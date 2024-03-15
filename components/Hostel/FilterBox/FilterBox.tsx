import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type CheckboxState = {
  [key: string]: boolean;
};

const FilterBox = () => {
  const theme = useTheme();
  const isBig = useMediaQuery("(min-width: 1400px)");
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    single: false,
    double: false,
    suite: false,
    wifi: false,
    parking: false,
    gym: false,
  });

  const marks = [
    {
      value: 0,
      label: "0 km",
    },
    {
      value: 100,
      label: "100km",
    },
  ];
  const [sliderValue, setSliderValue] = useState<number[]>([0, 50]);
  const handleClearFilters = () => {
    setCheckboxState({
      single: false,
      double: false,
      suite: false,
      wifi: false,
      parking: false,
      gym: false,
    });
    setSliderValue([0, 50]);
  };
  const [displayFilterBox, setDisplayFilterBox] = useState(true);
  const handleCheckboxChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckboxState({ ...checkboxState, [name]: event.target.checked });
    };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (windowWidth < 1341) {
      setDisplayFilterBox(false);
    } else {
      setDisplayFilterBox(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <>
      {isBig ? (
        <Paper
          id="filter-box"
          elevation={1}
          sx={{
            p: "2rem",
            borderRadius: "1rem",
            marginLeft: "3rem",
            mr: "1rem",
            display: displayFilterBox ? "block" : "none",
            mb: "-34rem",

            zIndex: 1,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                className={`${poppins.variable}`}
                variant="h6"
                sx={{ fontFamily: "var(--font-poppins)", fontSize: "1.2rem" }}
              >
                Distance from city center
              </Typography>

              <Slider
                defaultValue={[0, 50]}
                valueLabelDisplay="auto"
                marks={[
                  { value: 0, label: "0 km" },
                  { value: 100, label: "100 km" },
                ]}
                step={5}
                sx={{
                  color: "gold",
                  "& .MuiSlider-valueLabel": {
                    fontFamily: "var(--font-poppins)",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
              <Typography
                className={`${poppins.variable}`}
                sx={{ fontFamily: "var(--font-poppins)" }}
                variant="h6"
              >
                Room Types
              </Typography>

              {Object.keys(checkboxState).map((key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={checkboxState[key as keyof CheckboxState]}
                      onChange={handleCheckboxChange(key)}
                      sx={{
                        color: "default",
                        fontFamily: "var(--font-poppins)",
                        "&.Mui-checked": {
                          color: "gold",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      className={`${poppins.variable}`}
                      sx={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "1rem",
                      }}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                  }
                />
              ))}
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <Button
                onClick={handleClearFilters}
                className={`${poppins.variable}`}
                sx={{
                  display: "flex",
                  margin: "0 auto",
                  width: "100%",
                  fontFamily: "var(--font-poppins)",
                  fontSize: "1rem",
                }}
                variant="outlined"
              >
                Clear Filters
              </Button>
            </Box>
          </Box>
        </Paper>
      ) : (
        ""
      )}
    </>
  );
};

export default FilterBox;
