import { useRouter } from "next/navigation";
import Dashboard from "./Dashboard";
import SideBarComponentAdmin from "./SideBar";
import { useLayoutEffect } from "react";
import { GeTAdmin } from "../Auth/Auth";

export default function AdminDashboard() {
  const router = useRouter();
  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = await GeTAdmin();

        if (!isAuthenticated) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <SideBarComponentAdmin />
      <Dashboard />
    </>
  );
}
