"use client";

import { persistor, store } from "@/Store/store";
import PropertyDetailsVerficationComponent from "@/components/Admin/Dashboard/PropertyDetailsVerifications/PropertyDetailsVerification";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function NewPropertyDetailsVerification() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PropertyDetailsVerficationComponent />
        </PersistGate>
      </Provider>
    </>
  );
}
