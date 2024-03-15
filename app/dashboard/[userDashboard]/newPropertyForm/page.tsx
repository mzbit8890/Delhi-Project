"use cilent";

import dynamic from "next/dynamic";

const NewPropertyFormComponent = dynamic(
  () => import("@/components/VendorDashboard/NewProperty/NewPropertyForm"),
  {
    ssr: false,
  }
);

const AppBarforVendor = dynamic(
  () => import("@/components/VendorDashboard/TopBar/VendorHomeTopBar"),
  {
    ssr: false,
  }
);

export default function NewPropertyVendor() {
  return (
    <>
      <AppBarforVendor />
      <NewPropertyFormComponent />
    </>
  );
}
