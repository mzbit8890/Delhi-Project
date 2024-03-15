import { Box, Container, LinearProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { GeTAdmin } from "../Auth/Auth";
import { useLayoutEffect } from "react";

export default function VisitsPage() {
  const overallSales = "Overall Sales";
  const overallVisits = "Overall Visits";
  const todaySales = 751;
  const monthlySales = 1547;
  const progress = (monthlySales / 1500) * 100;

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "26%",
        marginTop: "10%",
        width: "30rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        border: "1px solid",
        borderRadius: "1rem",
        background: "#419197",
        color: "#fff",
      }}
    >
      <Container>
        <Typography variant="h4" style={{ margin: "20px 0" }}>
          Sales and Visits
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Box>
            <Typography variant="h6">{overallSales}</Typography>
            <Typography variant="h4">2,415</Typography>

            <Typography variant="h6">{overallVisits}</Typography>
            <Typography variant="h4">2,415</Typography>
          </Box>

          <div>
            <Typography variant="h6">Todays Sales</Typography>
            <Typography variant="h4">{todaySales}</Typography>

            <Typography variant="h6">Monthly Sales</Typography>
            <Typography variant="h4">{monthlySales}</Typography>
          </div>
        </Box>

        <Typography variant="h6">Progress This Month</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 2 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Typography variant="h6">{progress.toFixed(2)}%</Typography>
        </Box>
      </Container>
    </Box>
  );
}
