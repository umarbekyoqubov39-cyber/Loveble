import React from "react";
import { Outlet } from "react-router-dom";
import footer from "../../components/footer";
import LoginPage from "../auth/LoginPage";
import Navbar from "../../components/Navbar";
function AuthLaout() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default AuthLaout;
