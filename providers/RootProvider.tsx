"use client";
import { persistor, store } from "@/Store/store";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type RootProviderProps = {
  children: ReactNode;
};

export default function RootProvider({ children }: RootProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthProvider>{children}</AuthProvider>
      </PersistGate>
    </Provider>
  );
}
