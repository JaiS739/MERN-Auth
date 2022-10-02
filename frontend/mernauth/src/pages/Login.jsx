import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login_user = {
        email: inputs.email,
        password: inputs.password,
      };

      await axios.post("http://localhost:5100/user/login", login_user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Typography textAlign={"center"} variant="h2">
        Login
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

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
