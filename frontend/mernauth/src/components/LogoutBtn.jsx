import { Button, Tab, Tabs } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LogoutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  let logout = async () => {
    await axios.get("http://localhost:8080/user/logout");
    await getLoggedIn();
    navigate("/login");
  };

  return (
    <>
      <Tabs onClick={logout} indicatorColor="secondary" textColor="inherit">
        <Tab LinkComponent={Link} to="/login" label="Logout" />
      </Tabs>
    </>
  );
};

export default LogoutBtn;
