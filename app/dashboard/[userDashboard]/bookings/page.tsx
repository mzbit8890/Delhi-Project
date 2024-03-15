"use client";

import dynamic from "next/dynamic";

const BookingSection = dynamic(
  () => import("@/components/VendorDashboard/Bookings"),
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

export default function BookingPageVendor() {
  return (
    <>
      <AppBarforVendor />
      <BookingSection />
    </>
  );
}
