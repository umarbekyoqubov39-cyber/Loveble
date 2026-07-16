import React from "react";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import AllCards from "../../components/AllCards";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Posts() {
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
      <Input variant={"primary"} placeholder={"search"}></Input>

      <AllCards articles={articles}></AllCards>
    </>
  );
}

export default Posts;
