import React from "react";
import Navbar from "../../components/Navbar";
import Hiro from "../../components/Hiro";
import WhyChoos from "../../components/WhyChoos";
import LatestPosts from "../../components/LatestPosts";

function Home() {
  return (
    <>
      <header></header>
      <main>
        <Hiro></Hiro>
        <WhyChoos></WhyChoos>
        <LatestPosts></LatestPosts>
      </main>
    </>
  );
}

export default Home;
