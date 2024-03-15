"use client";

import { persistor, store } from "@/Store/store";
import Table from "@/components/Admin/Dashboard/PropertyVerifications/Table";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function NewPropertyVerification() {
  return (
    <>
      <Table />
    </>
  );
}
