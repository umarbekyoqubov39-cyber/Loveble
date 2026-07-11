import React from "react";

function Button({ text, variant, onClick }) {
  const variants = {
    primary: "bg-[#4346EF] text-white px-5 py-2 rounded-md",
    secondary: "bg-[#F0F0F0] text-[#333] px-5 py-2 rounded-md",
    danger: "bg-[#FF6B6B] text-white px-5 py-2 rounded-md",
  };
  return (
    <>
      <button className={`${variants[variant]}`}>{text}</button>
    </>
  );
}

export default Button;
