import React from "react";
import { Outlet } from "react-router-dom";
import footer from "../../components/footer";

import Navbar from "../../components/Navbar";
function AuthLaout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default AuthLaout;
