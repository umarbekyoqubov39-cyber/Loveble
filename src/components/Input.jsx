import React from "react";

function Input({ variant = "primary", placeholder }) {
  const variants = {
    primary:
      "w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",

    secondary:
      "w-full h-12 px-4 border-2 border-black rounded-lg focus:outline-none",

    search:
      "w-full h-12 pl-12 pr-4 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300",
  };

  return (
    <section className="center">
      <div className="flex flex-col gap-5 items-center text-center">
        <h1 className="text-7xl">Explore Our Posts</h1>

        <div className="w-full max-w-xl mt-8">
          <input
            type="text"
            className={variants[variant]}
            placeholder={placeholder}
          />
        </div>
      </div>
    </section>
  );
}

export default Input;
