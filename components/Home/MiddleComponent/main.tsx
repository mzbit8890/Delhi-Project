import dynamic from "next/dynamic";

const BookEventComponent = dynamic(() => import("./BookEvent/main"), {
  ssr: false,
});

const FindBestComponent = dynamic(() => import("./FindBest/main"), {
  ssr: false,
});

const TopDestinationComponent = dynamic(
  () => import("./TopDestinations/main"),
  {
    ssr: false,
  }
);

const UpperMiddleComponent = dynamic(() => import("./UpperMiddle"), {
  ssr: false,
});

import { Box } from "@mui/material";
export default function MiddleComponetMain() {
  return (
    <>
      <Box sx={{ marginTop: "8rem", overflow: "clip" }}>
        <UpperMiddleComponent />
        <BookEventComponent />
        <FindBestComponent />
        <TopDestinationComponent />
      </Box>
    </>
  );
}
