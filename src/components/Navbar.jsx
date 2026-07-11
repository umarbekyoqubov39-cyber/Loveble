import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <section className=" bg-white shadow-md ">
        <nav className="flex justify-between items-center px-10 py-5 center">
          <img src="/Link.svg" alt="" />
          <div className="flex gap-10 items-center">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>

            <Button text="login" variant="primary" onClick={() => {}}></Button>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
