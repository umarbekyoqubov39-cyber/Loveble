import React from "react";
import Button from "./Button";
import RightArrow from "./Icons/RightArrow";
function Hiro() {
  return (
    <section className=" px-5 py-2 rounded-md  my-1 bg-[#F1F1FE]">
      <div className="flex justify-between items-center   gap-20 center py-18  md:flex-col items-center lg:flex-row items-center">
        <div className="flex flex-col gap-[24px] max-w-[584px] ">
          <h1 className="text-6xl font-bold">
            <div className="flex-row items-center gap-0.5"> Create, Read,</div>
            <div className="bg-gradient-to-r from-purple-700 to-purple-950 bg-clip-text text-transparent">
              Inspire.
            </div>
          </h1>
          <p className="text-[#6B7280] text-2xl">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="flex gap-5 flex-col md:flex-row items-start">
            <Button
              text="Explore posts"
              variant="primary"
              onClick={() => {}}
              RightArrow={RightArrow}
            ></Button>
            <Button
              text="Get started"
              variant="secondary"
              onClick={() => {}}
            ></Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img className="max-w-584" src="/Hiro.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hiro;
