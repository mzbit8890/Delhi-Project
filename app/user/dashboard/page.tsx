"use client";

import { persistor, store } from "@/Store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import dynamic from "next/dynamic";

const DetailsComponent = dynamic(
  () => import("@/components/User/Dashboard/main"),
  { ssr: false }
);

export default function UserDashboard() {
  return (
    <>
      <DetailsComponent />
    </>
  );
}
