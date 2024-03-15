"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const VendorDashboardComponent = dynamic(
  () => import("@/components/VendorDashboard/main"),
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
export default function VendorDashboard() {
  return (
    <AuthCheck>
      <VendorDashboardComponent />
    </AuthCheck>
  );
}
