import UpperComponentMobile from "./UpperComponent/main";
import MiddleComponenetMobile from "./MiddleComponent/main";
import BottomComponentMobile from "./BottomComponent/main";
import { Box } from "@mui/material";

const MainComponentMobile = () => {
  return (
    <Box sx={{ bgcolor: "#F4F7FF", overflow: "clip" }}>
      <UpperComponentMobile />
      <MiddleComponenetMobile />
      <BottomComponentMobile />
    </Box>
  );
};

export default MainComponentMobile;
