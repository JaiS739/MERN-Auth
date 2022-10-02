import React from "react";
import { Route, Routes } from "react-router";
import Customer from "../pages/Customer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "./Navbar";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
