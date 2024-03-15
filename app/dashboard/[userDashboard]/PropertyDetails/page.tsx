"use client";

import dynamic from "next/dynamic";

const VendorPropertyDetailsPage = dynamic(
  () =>
    import(
      "@/components/VendorDashboard/PropertyDetails/VendorPropertyDetails"
    ),
  { ssr: false }
);

const AppBarforVendor = dynamic(
  () => import("@/components/VendorDashboard/TopBar/VendorHomeTopBar"),
  { ssr: false }
);

export default function VendorPropPage() {
  return (
    <div>
      <AppBarforVendor />
      <VendorPropertyDetailsPage />
    </div>
  );
}
