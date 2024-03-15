"use client";

import dynamic from "next/dynamic";

const AppBarforVendor = dynamic(
  () => import("@/components/VendorDashboard/TopBar/VendorHomeTopBar"),
  {
    ssr: false,
  }
);

const VendorDetails = dynamic(
  () => import("@/components/VendorDashboard/vendorDetails/main"),
  {
    ssr: false,
  }
);

export default function VendorDetailsPage() {
  return (
    <>
      <AppBarforVendor /> <VendorDetails />
    </>
  );
}
