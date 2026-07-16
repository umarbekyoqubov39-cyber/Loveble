import React from "react";
import PostCard from "./PostCard";
function ChoosCard({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 center my-20">
      {articles &&
        articles.map((article, i) => {
          return (
            <div>
              <PostCard article={article} key={i}></PostCard>
            </div>
          );
        })}
    </div>
  );
}

export default ChoosCard;
