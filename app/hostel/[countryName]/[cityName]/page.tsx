"use client";

import { store, persistor } from "@/Store/store";
import PropertyMainComponenet from "@/components/Hostel/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Locations() {
  return (
    <main>
      <PropertyMainComponenet />
    </main>
  );
}
