"use client";

import { persistor, store } from "@/Store/store";
import PropertiesDetailsVerifications from "@/components/Admin/Dashboard/PropertyDetailsVerifications/TableD";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function NewPropertyDeatilsVerification() {
  return (
    <>
      <PropertiesDetailsVerifications />
    </>
  );
}
