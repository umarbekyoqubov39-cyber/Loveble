import React from "react";
import Navbar from "../../components/Navbar";
import Hiro from "../../components/Hiro";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hiro></Hiro>
        <Info></Info>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Home;
