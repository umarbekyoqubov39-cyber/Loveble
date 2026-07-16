import React from "react";
import Navbar from "../../components/Navbar";
import Hiro from "../../components/Hiro";
import WhyChoos from "../../components/WhyChoos";
import LatestPosts from "../../components/LatestPosts";
import StartText from "../../components/StartText";

import { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(BASE_URL);
function Home() {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch(`${BASE_URL}/articles/`);

        if (!res.ok) {
          throw new Error("Xatolik yuz berdi");
        }

        const data = await res.json();
        setArticles(data.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getPosts();
  }, []);
  return (
    <>
      <header></header>
      <main>
        <Hiro></Hiro>
        <WhyChoos></WhyChoos>
        <StartText></StartText>
        <LatestPosts articles={articles}></LatestPosts>
       
      </main>
    </>
  );
}

export default Home;
