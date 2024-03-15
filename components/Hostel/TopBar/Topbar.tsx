import HbIcon from "@/assests/HbIcon.png";
import Image from "next/image";
import SearchBoxComponentHostel from "../SearchBox/search";
import { MainBox } from "./Topbar.style";
import { Avatar, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
export default function TopBarListProperties() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isBig = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <MainBox>
        <SearchBoxComponentHostel />
      </MainBox>
    </>
  );
}
