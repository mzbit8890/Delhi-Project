"use client";

import { persistor, store } from "@/Store/store";
import LocationList from "@/components/Admin/Dashboard/getLocations/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function getAllLocationsPage() {
    return (
        <>
            <LocationList/>
        </>
    );
}