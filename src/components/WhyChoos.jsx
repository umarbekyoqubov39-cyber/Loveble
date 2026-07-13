import React from "react";
import ChoosCard from "./ChoosCard";
import { features } from "../product";
import Button from "../components/Button";
function WhyChoos() {
  return (
    <>
      <section className="my-[130px] flex flex-col gap-20 ">
        <div className="center flex flex-col items-center">
          <div className="flex flex-col items-center gap-[10px] text-center">
            <h1 className="text-4xl font-bold">Why Choose Blogify?</h1>
            <p className="text-[#6B7280] text-1xl">
              Built with modern technologies and best practices to provide the
              best blogging <br /> experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 center">
          {features.map((item, index) => (
            <ChoosCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyChoos;
