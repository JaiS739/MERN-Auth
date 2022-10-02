import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {}
          <Typography variant="h4">MERN Auth</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs
              indicatorColor="secondary"
              onChange={(e, val) => setValue(val)}
              value={value}
              textColor="inherit"
            >
              <Tab LinkComponent={Link} to="/" label="Home" />
              <Tab LinkComponent={Link} to="/customer" label="Customer" />
              <Tab LinkComponent={Link} to="/login" label="Login" />
              <Tab LinkComponent={Link} to="/register" label="Register" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
