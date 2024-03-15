import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { InputBase, IconButton, Avatar } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FlutterDashOutlinedIcon from "@mui/icons-material/FlutterDashOutlined";

const drawerWidth = "25%";

export default function SideBarComponentAdmin() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          height: "7rem",
          color: "#fff",
          width: "75%",
          backgroundColor: "#101F33",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1.7rem",
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Welcome Admin
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InputBase
              placeholder="Search"
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid",
                borderRadius: "0.5rem",
                borderColor: "lightgrey",
                color: "#fff",
              }}
            />
            <IconButton color="inherit">
              <SearchOutlinedIcon sx={{ marginRight: "1rem" }} />
            </IconButton>

            <Avatar sx={{ bgcolor: "secondary.main" }}></Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          overflow: "auto",
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#101F33",
            color: "#fff",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            marginTop: "2rem",
            marginBottom: "-2.5rem",
            marginLeft: "1rem",
          }}
        >
          <FlutterDashOutlinedIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#fff",
              width: "3rem",
              height: "3rem",
              marginRight: "0.5rem",
            }}
          />{" "}
          Hostel Bird
        </Typography>
        <Toolbar />
        <Box sx={{ overflow: "scroll", color: "#fff", marginTop: "1rem" }}>
          <List>
            {["Properties", "Get All Users", "Get All Vendors", "Add Location","Get All Locations"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    href={`/admin-main/dashboard-restricted/${text
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <InboxIcon sx={{ color: "#fff" }} />
                      ) : (
                        <MailIcon sx={{ color: "#fff" }} />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider sx={{ backgroundColor: "#fff" }} />

          <List>
            {[
              "New Property Verifications",
              "New Property Details Verifications",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  href={`/admin-main/dashboard-restricted/${text
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <InboxIcon sx={{ color: "#fff" }} />
                    ) : (
                      <MailIcon sx={{ color: "#fff" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
