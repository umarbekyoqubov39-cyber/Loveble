import React from "react";
import PostCard from "./PostCard";

function LatestPosts({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 center my-20">
      {articles.map((item) => (
        <PostCard key={item.id} article={item} />
      ))}
    </div>
  );
}

export default LatestPosts;
