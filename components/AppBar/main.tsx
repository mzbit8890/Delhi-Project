"use client";

import React, { useEffect, useState } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Button, useMediaQuery } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  StyledBox,
  StyledTitle,
  StyledList,
  StyledListItemButton,
} from "./index.style";
import { ListItem, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { getCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import { Poppins } from "next/font/google";
import HamburgerMenu from "./Hamburger";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function AppBar() {
  const router = useRouter();
  const pathName = usePathname();
  const currentPathName = useMemo(() => {
    return pathName.split("/")[1];
  }, [pathName]);

  const handleRedirectToSignIn = () => {
    router.push("/user/sign-in");
  };
  const UserCookie = getCookie("access_token_user");
  const session = useSession();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

    router.push("/user/dashboard");
  };

  const isLargeScreen = useMediaQuery("(min-width:1000px)");

  return !currentPathName?.includes("admin-main") ? (
    isLargeScreen ? (
      <StyledBox>
        <StyledTitle>Hostel Bird</StyledTitle>
        <StyledList>
          {["Home", "Plan a trip", "Features", "About", "Vendor Login"].map(
            (text, index) => (
              <ListItem sx={{ width: "11rem" }} key={index}>
                {text === "Vendor Login" ? (
                  <StyledListItemButton
                    onClick={() => router.push("/vendor-login")}
                  >
                    <ListItemText primary={text} />
                  </StyledListItemButton>
                ) : (
                  <StyledListItemButton onClick={() => router.push("/")}>
                    <ListItemText primary={text} />
                  </StyledListItemButton>
                )}
              </ListItem>
            )
          )}
        </StyledList>
        {UserCookie ? (
          <Box sx={{ ml: "1rem" }}>
            <Avatar
              alt="User Avatar"
              src={session?.data?.user?.image as string}
              sx={{ cursor: "pointer" }}
              aria-controls="avatar-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              id="avatar-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <AccountCircleOutlinedIcon
            onClick={handleRedirectToSignIn}
            style={{ cursor: "pointer" }}
          />
        )}
        <Button
          sx={{
            fontFamily: "var(--font-poppins)",
            backgroundColor: "black",
            marginLeft: "2rem",
            width: "13rem",
            height: "3rem",
            ":hover": { backgroundColor: "#3D66F8" },
            gap: "0rem",
          }}
          variant="contained"
          href="/listProperty"
        >
          <ApartmentIcon />
          List Property
        </Button>
      </StyledBox>
    ) : (
      <HamburgerMenu />
    )
  ) : (
    ""
  );
}

export default AppBar;
