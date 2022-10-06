import React, { useContext, useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  const [value, setValue] = useState();

  const { loggedIn } = useContext(AuthContext);
  console.log("loggedIn", loggedIn);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {}
          <Typography variant="h4">MERN Auth</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs
              // indicatorColor="secondary"
              onChange={(e, val) => setValue(val)}
              value={value}
              textColor="inherit"
            >
              <Tab LinkComponent={Link} to="/" label="Home" />
              {loggedIn == false && (
                <>
                  <Tab LinkComponent={Link} to="/login" label="Login" />
                  <Tab LinkComponent={Link} to="/register" label="Register" />
                </>
              )}

              {loggedIn == true && (
                <>
                  <Tab LinkComponent={Link} to="/customer" label="Customer" />

                  <LogoutBtn />
                </>
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
