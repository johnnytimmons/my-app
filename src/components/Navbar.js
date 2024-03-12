import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MySwipeableDrawer from "./SwipeableDrawer"; // Import the SwipeableDrawer component
import SignIn from "./Sign-In"; // Import the SignIn component
import App from "../App";

export default function Navbar({ baseValues, handleStatChange }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-[#4e3629] flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Use Button to open/close the SwipeableDrawer */}
          <Button color="inherit" onClick={toggleDrawer}>
            SKILLS
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PATHFINDER 1E CHARACTER MANAGER
          </Typography>
          {/* Toggle between "Login" and "Close" based on loginOpen state */}
          <Button color="inherit" onClick={toggleLogin}>
            {loginOpen ? "Close" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Pass the state and toggle function to the SwipeableDrawer component */}
      <MySwipeableDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        baseValues={baseValues}
        handleStatChange={handleStatChange}
      />
      {/* Display the login form if loginOpen is true */}
      {loginOpen && <SignIn />}
    </Box>
  );
}
