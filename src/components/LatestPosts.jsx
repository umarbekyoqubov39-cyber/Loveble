import React from "react";
import RightArrow from "./Icons/RightArrow";
import Button from "./Button";
import { FaCalendarAlt } from "react-icons/fa";
import posts from "../../src/data/Cards";
import PostCard from "./PostCard";
function LatestPosts() {
  return (
    <section className="center flex flex-wrap justify-center  md:grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 center my-20 ">
      {posts.slice(1, 4).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default LatestPosts;
