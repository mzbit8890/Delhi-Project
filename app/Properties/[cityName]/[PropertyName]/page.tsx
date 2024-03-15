"use client";

import { persistor, store } from "@/Store/store";
import MainPropertyDetailsComponent from "@/components/PropertyDetails/main";
import PropertyDetails from "@/components/PropertyDetails/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function ShowPropertiesDetails() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainPropertyDetailsComponent />
        </PersistGate>
      </Provider>
    </>
  );
}
