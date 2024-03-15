"use client";

import { persistor, store } from "@/Store/store";
import PropertyVerficationComponent from "@/components/Admin/Dashboard/PropertyVerifications/PropertyDecision";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function NewPropertyVerification() {
  return (
    <>
      <PropertyVerficationComponent />
    </>
  );
}
