import React from "react";
import MainRoutes from "./components/MainRoutes";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
