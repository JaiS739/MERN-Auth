import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    verifyPassword: "",
  });

  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const new_user = {
        email: inputs.email,
        password: inputs.password,
        passwordverify: inputs.verifyPassword,
      };

      await axios.post("http://localhost:8080/user/signup", new_user);
      alert("signed up successfull");
      getLoggedIn();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Typography textAlign={"center"} variant="h2">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={300}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItem="center"
        >
          <TextField
            name="email"
            varient="outline"
            type={"email"}
            margin={"normal"}
            placeholder="enter email"
            value={inputs.email}
            autoFocus
            onChange={handleChange}
          />

          <TextField
            name="password"
            type={"password"}
            margin={"normal"}
            placeholder="enter password"
            value={inputs.password}
            onChange={handleChange}
          />

          <TextField
            name="verifyPassword"
            varient="outline"
            type={"password"}
            margin={"normal"}
            placeholder="verify password"
            value={inputs.verifyPassword}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
