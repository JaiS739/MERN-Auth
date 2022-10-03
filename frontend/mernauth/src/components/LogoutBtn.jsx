import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router";

const LogoutBtn = () => {
  const { getLoggedIn } = useContext();
  const navigate = useNavigate();

  let logout = async () => {
    await axios.get("http://localhost:5100/user/logout");
    await getLoggedIn();
    navigate("/");
  };

  return (
    <>
      <Button onClick={logout}>Log out</Button>
    </>
  );
};

export default LogoutBtn;
