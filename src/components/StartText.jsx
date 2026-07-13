import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
function StartText() {
  return (
    <div className="flex gap-5 flex-col justify-self-start md:justify-between md:flex-row items-center center w-full">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-3xl">Latest Posts</h1>
        <p className="text-xl text-[#6B7280] ">
          Check out our most recent articles
        </p>
      </div>
      <div className="flex">
        <Button variant="secondary" text="vive card ">
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default StartText;
