"use client";

import { persistor, store } from "@/Store/store";
import UserLoginAccountComponent from "@/components/User/Login/main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function UserSignInPage() {
  return (
    <>
      <UserLoginAccountComponent />
    </>
  );
}
