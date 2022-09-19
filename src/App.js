import React from "react";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/Common.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
