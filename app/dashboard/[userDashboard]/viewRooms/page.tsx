"use client";

import dynamic from "next/dynamic";

const AppBarforVendor = dynamic(
  () => import("@/components/VendorDashboard/TopBar/VendorHomeTopBar"),
  { ssr: false }
);

const ViewVendorRoomPageComponent = dynamic(
  () => import("@/components/VendorDashboard/VendorRooms/ViewRooms"),
  { ssr: false }
);

export default function VendorViewRooms() {
  return (
    <div>
      <AppBarforVendor />
      <ViewVendorRoomPageComponent />
    </div>
  );
}
