import React from "react";

function Button({ text, variant, onClick, LeftArrow, RightArrow }) {
  const variants = {
    primary:
      "bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:scale-105 transition-transform duration-300 ease-in-out",
    secondary:
      "bg-white text-[#333] cursor-pointer px-5 py-2 rounded-md border border-[#E5E7EB] flex items-center gap-5  hover:text-[#4346EF] hover:scale-105 transition-transform duration-300 ease-in-out",
    danger:
      "bg-transparent text-[#4346EF] flex items-center gap-5 hover:gap-8 cursor-pointer",
  };

  return (
    <button className={`${variants[variant]}`}>
      {LeftArrow && <LeftArrow />}
      <span>{text}</span>

      {RightArrow && <RightArrow />}
    </button>
  );
}

export default Button;
