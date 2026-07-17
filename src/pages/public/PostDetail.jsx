import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useState, useEffect } from "react";

function PostDetail({}) {
  let { id } = useParams();
  console.log(id);
  let Navigate = useNavigate();
  let [posts, setPosts] = useState(null);
  console.log(posts);

  useEffect(() => {
    async function getPost() {
      try {
        const res = await fetch(`${BASE_URL}/articles/${id}/`);

        if (!res.ok) {
          throw new Error("Muammo");
        }

        const data = await res.json();
        setPosts(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getPost();
  }, [id]);
  if (!posts) {
    return <h2>Loading...</h2>;
  }
  return (
    <div
      onClick={() => Navigate("/posts")}
      className="max-w-5xl mx-auto my-[200px] flex flex-col gap-10 overflow-hidden center"
    >
      <img
        src={posts.image}
        alt={posts.stitle}
        className="w-full h-[450px] object-cover"
      />

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
            {posts.category.name}
          </span>

          <span className="text-gray-500 text-sm">
            {new Date(posts.created_at).toLocaleDateString()}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{posts.title}</h1>

        <p className="text-gray-700 leading-8 text-lg mb-8">{posts.content}</p>

        <div className="border-t pt-6 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">
              {posts.author.first_name || "Admin"}
            </h3>

            <p className="text-gray-500">{posts.author.email}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Last Update</p>

            <p className="font-medium">
              {new Date(posts.updated_at).toLocaleDateString()}
            </p>
            <Link to="/posts">
              <Button
                variant={"primary"}
                text={" Back to posts"}
                className="mx-10"
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
