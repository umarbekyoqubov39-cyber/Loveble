import React from "react";
import RightArrow from "./Icons/RightArrow";
import Button from "./Button";
import { FaCalendarAlt } from "react-icons/fa";
import posts from "../../src/data/Cards";
import PostCard from "./PostCard";
function LatestPosts() {
  return (
    <section className="center my-[128px] flex flex-row flex-wrap items-center justify-center md:justify-between gap-[50px] ">
      {posts.slice(0, 3).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default LatestPosts;
