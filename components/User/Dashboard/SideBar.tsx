import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";

const SidebarComponent = () => {
  const handleChangePassword = () => {
    console.log("Change password functionality goes here");
  };

  const handleLogout = () => {
    console.log("Logout functionality goes here");
  };
  return (
    <Paper
      component="aside"
      sx={{
        width: "20rem",
        height: "15rem",
        padding: 2,
        mr: "2rem",
        mt: "4.3rem",
      }}
      elevation={10}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="div">
            <Button fullWidth onClick={handleChangePassword}>
              Change Password
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="div">
            <Button fullWidth onClick={handleLogout}>
              Logout
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};

export default SidebarComponent;
