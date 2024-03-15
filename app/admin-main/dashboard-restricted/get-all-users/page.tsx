"use client";

import { persistor, store } from "@/Store/store";
import UsersByCountryAndCity from "@/components/Admin/Dashboard/AllUsers/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function GetAllVendorsPage() {
  return (
    <>
      <UsersByCountryAndCity />
    </>
  );
}
