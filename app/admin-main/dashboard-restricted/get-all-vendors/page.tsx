"use client";

import { persistor, store } from "@/Store/store";
import AllVendorscomponents from "@/components/Admin/Dashboard/AllVendors/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function GetAllVendorsPage() {
  return (
    <>
      <AllVendorscomponents />
    </>
  );
}
