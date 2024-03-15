import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        mt: "-5rem",
      }}
    >
      <CheckCircleIcon sx={{ fontSize: "6rem", color: "green" }} />
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        Congratulations! Your user is registered.
      </Typography>
      <Button
        sx={{ backgroundColor: "purple", m: "1rem" }}
        variant="contained"
        onClick={() => router.push("sign-in")}
      >
        Login Now
      </Button>
    </Box>
  );
};

export default ThankYouPage;
