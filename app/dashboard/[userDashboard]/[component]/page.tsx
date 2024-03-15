"use client";

import { usePathname, useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import { persistor, store } from "@/Store/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useLayoutEffect } from "react";
import AppBarforVendor from "@/components/VendorDashboard/TopBar/VendorHomeTopBar";

const DetailsComponent = dynamic(
  () => import("@/components/VendorDashboard/Details"),
  { ssr: false }
);
const UploadImagesComponent = dynamic(
  () => import("@/components/VendorDashboard/UploadImages"),
  { ssr: false }
);
const CreateRoomComponent = dynamic(
  () => import("@/components/VendorDashboard/CreateRoom"),
  { ssr: false }
);
const ListFacilities = dynamic(
  () => import("@/components/VendorDashboard/ListFacilities"),
  { ssr: false }
);
const UpdatePoliciesComponent = dynamic(
  () => import("@/components/VendorDashboard/UpdatePolicies"),
  { ssr: false }
);

interface AuthCheckProps {
  children: React.ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children }) => {
  const VendorID = useSelector((state: any) => state.vendor?.VendorId);
  const API = `https://api.hostelbird.com/vendor/auth/${VendorID}`;
  const router = useRouter();

  const checkAuth = async () => {
    const response = await fetch(API, {
      credentials: "include",
      mode: "cors",
    });
    if (response.status >= 400) {
      router.push("/vendor-login");
    } else {
      return true;
    }
  };

  useLayoutEffect(() => {
    checkAuth().catch((error) => {
      console.error(error.message);
      router.push("/vendor-login");
    });
  }, [router, VendorID]);

  return <>{children}</>;
};

export default function DescribeProperty() {
  const PathName = usePathname();
  let url = PathName.split("/");
  let urlEndpoint = url[3];
  let displayComponent;

  switch (urlEndpoint) {
    case "UpdateDetails":
      displayComponent = (
        <>
          <AppBarforVendor /> <DetailsComponent />
        </>
      );
      break;
    case "UploadImages":
      displayComponent = (
        <>
          <AppBarforVendor /> <UploadImagesComponent />
        </>
      );
      break;
    case "createRooms":
      displayComponent = (
        <>
          <AppBarforVendor /> <CreateRoomComponent />
        </>
      );
      break;
    case "ListFacilities":
      displayComponent = (
        <>
          <AppBarforVendor /> <ListFacilities />
        </>
      );
      break;
    case "UpdatePolicies":
      displayComponent = (
        <>
          <AppBarforVendor /> <UpdatePoliciesComponent />
        </>
      );
    default:
      break;
  }

  return (
    <>
      <AuthCheck> {displayComponent}</AuthCheck>
    </>
  );
}
