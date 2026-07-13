import React from "react";
import Navbar from "../../components/Navbar";
import Hiro from "../../components/Hiro";
import WhyChoos from "../../components/WhyChoos";
import LatestPosts from "../../components/LatestPosts";
import StartText from "../../components/StartText";
function Home() {
  return (
    <>
      <header></header>
      <main>
        <Hiro></Hiro>
        <WhyChoos></WhyChoos>
        <StartText></StartText>
        <LatestPosts></LatestPosts>
      </main>
    </>
  );
}

export default Home;
