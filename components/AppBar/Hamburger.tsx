import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Typography } from "@mui/material";
import { StyledBox, StyledLeftBox, UserBox } from "./hamburger.style";
import HbIcon from "@/assests/HbIcon.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const HamburgerMenu = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Vendor Login", path: "/vendor-login" },
    { label: "List Property", path: "/listProperty" },
  ];

  return (
    <StyledBox>
      <Box>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <StyledLeftBox>
            <Image
              src={HbIcon}
              alt={"Hbicon.png"}
              width={50}
              height={50}
              style={{ marginLeft: "1rem", marginTop: "1.5rem" }}
            />
            <Typography
              className={`${poppins.variable}`}
              sx={{
                fontFamily: "var(--font-poppins)",
                color: "#3D66F8",
                fontSize: "1.7rem",
                fontWeight: "800",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                width: "15rem",
                mt: "1.5rem",
                ml: "0.5rem",
              }}
            >
              Hostel Bird
            </Typography>
          </StyledLeftBox>
        </Link>
      </Box>
      <UserBox>
        <Link prefetch href={"/user/sign-in"}>
          <AccountCircleOutlinedIcon
            sx={{ cursor: "pointer", color: "#000" }}
          />
        </Link>
      </UserBox>
      <Box>
        <AppBar
          sx={{
            width: "4rem",
            height: "1rem",
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "#3D66F8",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "10rem",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
                sx={{
                  height: "100%",
                  "& .MuiIconButton-label": {
                    display: "flex",
                    flexDirection: "column",
                  },
                  mt: "0.7rem",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "20rem",
              height: "14rem",
              backgroundColor: "white",
              borderRadius: "1rem",
              marginTop: "2rem",
              marginRight: "1rem",
            },
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                sx={{
                  display: "flex",
                  textAlign: "center",
                  color: "#000",
                  height: "4rem",
                }}
                key={index}
                component="a"
                href={item.path}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </StyledBox>
  );
};

export default HamburgerMenu;
