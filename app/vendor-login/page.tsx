"use client";

import LoginVendorAccountComponent from "@/components/VendorLogin/main";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
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
    if (response.status >= 200 && response.status <= 400) {
      return true;
    } else {
      return false;
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
export default function VendorLoginPage() {
  return (
    <>
      <AuthCheck>
        <LoginVendorAccountComponent />
      </AuthCheck>
    </>
  );
}
