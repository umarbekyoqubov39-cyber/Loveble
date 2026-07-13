import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";

function PubliLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default PubliLayout;
