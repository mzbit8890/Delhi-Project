"use client";

import { persistor, store } from "@/Store/store";
import AddLocation from "@/components/Admin/Dashboard/AddLocation/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function addLocationPage() {
    return (
        <>
        <AddLocation/>
            {/* <UsersByCountryAndCity /> */}
        </>
    );
}