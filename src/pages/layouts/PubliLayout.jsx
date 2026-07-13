import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
function PubliLayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default PubliLayout;
