import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <>
      <section className=" bg-white shadow-md ">
        <nav className="flex justify-between items-center px-10 py-5 center container-custom">
          <img src="/Link.svg" alt="" />
          <div className=" hidden flex gap-10 items-center  md:flex ">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>

            <Button text="login" variant="primary" onClick={() => {}}></Button>
          </div>
          <div className="md:hidden">
            <RxHamburgerMenu size={30} />
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
