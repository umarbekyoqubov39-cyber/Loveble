import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-white shadow-md">
        <nav className="flex justify-between items-center px-10 py-5 container-custom">
          <img src="/Link.svg" alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>

            <Button text="Login" variant="primary" />
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

              <Button
                text="Login"
                variant="primary"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
