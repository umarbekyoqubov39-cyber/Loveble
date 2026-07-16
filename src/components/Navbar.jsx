import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <section className="bg-white shadow-md fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-white/20 z-50">
        <nav className="flex justify-between items-center px-10 py-5 container-custom center ">
          <img src="/Link.svg" alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/login">
              <Button text="Login" variant="primary" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu size={30} />
          </button>
        </nav>
      </section>

      {/* Mobile Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <IoClose size={30} />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-6 text-lg">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link to="/posts" onClick={() => setIsOpen(false)}>
                Posts
              </Link>

              <Link to="/login">
                <Button text="Login" variant="primary" />{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
