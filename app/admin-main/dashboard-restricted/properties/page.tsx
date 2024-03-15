"use client";

import { store, persistor } from "@/Store/store";
import PropertyPageAdmin from "@/components/Admin/Dashboard/Properties/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function PropertyPage() {
  return (
    <>
      <PropertyPageAdmin />
    </>
  );
}
