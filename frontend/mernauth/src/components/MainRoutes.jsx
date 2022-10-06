import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import AuthContext from "../context/AuthContext";
import Customer from "../pages/Customer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "./Navbar";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <>
          <Route path="/customer" element={<Customer />} />
        </>

        <>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </>
      </Routes>
    </>
  );
};

export default MainRoutes;
