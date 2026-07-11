import React from "react";
import Button from "./Button";
function Hiro() {
  return (
    <section className=" px-5 py-2 rounded-md  my-1 bg-[#F1F1FE]">
      <div className="flex justify-between items-center gap-10 center ">
        <div className="flex flex-col gap-5">
          <h1 className="text-8xl">
            Creat Read
            <span className="text-[#4346EF]"> Inspire.</span>
          </h1>
          <p>
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="flex gap-5">
            <Button
              text="Explore posts"
              variant="primary"
              onClick={() => {}}
            ></Button>
            <Button
              text="Get started"
              variant="secondary"
              onClick={() => {}}
            ></Button>
          </div>
        </div>
        <div className="">
          <img src="/Hiro.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hiro;
