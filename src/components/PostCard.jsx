import React from "react";
import Button from "./Button";
import RightArrow from "./Icons/RightArrow";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function PostCard({ article }) {
  let { id, title, created_at, content, image, updata_at, author, category } =
    article;
  let Navigate = useNavigate();
  return (
    <div
      onClick={() => Navigate(`/posts/${id}`)}
      className="rounded-xl overflow-hidden shadow-lg border bg-white"
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <div className="p-5">
        <span className="text-sm text-blue-600 font-medium">
          {category.name}
        </span>

        <p>{new Date(created_at).toLocaleDateString()}</p>

        <h2 className="text-2xl font-bold mt-2">{title}</h2>

        <p className="text-gray-600 mt-3 line-clamp-3">{content}</p>

        <div className="flex justify-between items-center mt-5 text-sm text-gray-500">
          <Link to={`/posts`}>
            <Button
              text={"Read more"}
              variant="danger"
              RightArrow={RightArrow}
            ></Button>
          </Link>

          <span>{new Date(created_at).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
