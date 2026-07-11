import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function footer() {
  return (
    <footer className="border-t-2 border-[#E5E7EB] py-5 px-10">
      <div className="flex items-center center justify-between ">
        <div className="flex flex-col gap-2 items-start w-[300px]">
          <img src="/Link.svg" alt="" />
          <p className="text-[#6B7280]">
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="text-2xl">Quick Links</h1>
          <Link to="/">Home</Link>
          <Link to="/posts/:id">Postdetail</Link>
          <Link to="/posts">Posts</Link>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="text-2xl">Connect</h1>
          <div className="flex gap-10 items-center">
            <img src="/GitHub.svg" alt="" />
            <img src="/Twitter.svg" alt="" />
            <img src="/LinkedIn.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
