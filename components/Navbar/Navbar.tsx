"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import icon2 from "./propblack.png"
import icon from "./dblack.png"
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  LinkButton,
  LinksMainGrid,
  LogoTypography,
  MainBox,
} from "./Navbar.style";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

import bird from "@/assests/bird.png";
import Link from "next/link";
import Destinat from "@../../../components/Navbar/destination.png"
import IMGaa from "@../../../components/Navbar/dsnw.png"
// import './Navbar.css'

import { getCookie } from "cookies-next";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));
  //  #FFFFFF80
  // #0000001A
  //   console.log(pathname);

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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const router3 = useRouter();

  // Check if it's the home page
  // const isHomePage = router3.pathname === '/';
  return (
   
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
         
          <List sx={{ display: "flex", flexDirection: "column" }}>
          <Link href="">
              <LinkButton>About</LinkButton>
            </Link>
            <Link href="/destinations">
              <LinkButton>Destination</LinkButton>
            </Link>
            <Link href="/listyourproperty">
              <LinkButton>List Your Property</LinkButton>
            </Link>
            <Link href="/vendor-login">
              <LinkButton>Vendor Login</LinkButton>
            </Link>
          </List>
        </Box>
      </Drawer>

      <MainBox
        py={3}
        sx={{
          borderBottom:
            pathname === "/" ? "1px solid #FFFFFF80" : "2px solid #0000001A",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <LogoTypography
            ml={{ xs: 1, lg: 4 }}
            variant="h4"
            sx={{ color: pathname === "/" ? "white" : "black" }}
          >
            <Image
              width={40}
              height={40}
              style={{
                marginRight: "10px",
                filter: pathname === "/" ? "brightness(10)" : "brightness(0)",
              }}
              alt="Icon"
              src={bird}
            />
            Hostel Bird
          </LogoTypography>
        </Link>
        <Box mr={{ xs: 1, lg: 8 }}>
          {isLaptop ? (
            <LinksMainGrid container>
           
                {/* <Link href="/About">
                  <LinkButton
                    sx={{ color: pathname === "/" ? "white" : "black" }}
                  >
                    <LanguageIcon sx={{ marginRight: "5px" }} />
                 About
                  </LinkButton>
                </Link> */}

                <Grid px={5} item>
                <Link href="/About">
                  <LinkButton 
                   sx={{ color: pathname === "/" ? "white" : "black" }}
                  >
                   
                    About
                  </LinkButton>
                </Link>
              </Grid>


                <Divider
                orientation="vertical"
                flexItem
                sx={{
                  border: "1px solid",
                  borderColor: pathname === "/" ? "#FFFFFF80" : "#0000001A",
                }}
              />
                <Grid px={5} item>
                <Link href="/destinations">
                  <LinkButton 
                   sx={{ color: pathname === "/" ? "white" : "black" }}
                  >
                     {pathname === "/" ? (
        <Image src={IMGaa} alt="" className="w-[30px] h-[30px] mr-[10px]" />
      ) : (
        <Image src={icon} alt="" className="w-[30px] h-[30px] mr-[10px]" />
      )}
                    {/* <Image
        src={IMGaa}
        alt=""
        className={`w-[30px] h-[30px] mr-[10px] ${
          isHomePage ? 'text-white' : 'text-black'
        }`} /> */}
                    Destination
                  </LinkButton>
                </Link>
              </Grid>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  border: "1px solid",
                  borderColor: pathname === "/" ? "#FFFFFF80" : "#0000001A",
                }}
              />
              {/* <Grid px={5} item>
                <Link href="/vendor-login">
                  <LinkButton
                    sx={{
                      color: pathname === "/" ? "white" : "black",
                    }}
                  >
                    Vendor Login
                  </LinkButton>
                </Link>
              </Grid> */}
              {/* <Divider
                orientation="vertical"
                flexItem
                sx={{
                  border: "1px solid",
                  borderColor: pathname === "/" ? "#FFFFFF80" : "#0000001A",
                }}
              /> */}
              <Grid px={5} item>
                <Link href="/listyourproperty">
                  <LinkButton
                    sx={{ color: pathname === "/" ? "white" : "black" }}
                  >
                    {pathname === "/" ? (
       <Image src={Destinat} alt=""  className="mr-[10px] w-[30px] h-[30px]"/> 
      ) : (
        <Image src={icon2} alt=""  className="mr-[10px] w-[30px] h-[30px]"/> 
      )}
                    
                    List Your Property
                  </LinkButton>
                </Link>
              </Grid>
              <Grid item>
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
                  <Link href="/user/sign-in">
                    <AccountCircleRoundedIcon
                      fontSize="large"
                      sx={{ color: pathname === "/" ? "white" : "black" }}
                    />
                  </Link>
                )}
              </Grid>
            </LinksMainGrid>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/user/sign-in">
                <AccountCircleRoundedIcon
                  fontSize="large"
                  sx={{ color: pathname === "/" ? "white" : "black" }}
                />
              </Link>
              <Button onClick={toggleDrawer(true)}>
                <MenuIcon
                  fontSize="large"
                  sx={{ color: pathname === "/" ? "white" : "black" }}
                />
              </Button>
            </Box>
          )}
        </Box>
      </MainBox>
    </>
  );
};

export default Navbar;
