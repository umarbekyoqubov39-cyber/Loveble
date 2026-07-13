import React from "react";
import RightArrow from "./Icons/RightArrow";
import Button from "./Button";
import { FaCalendarAlt } from "react-icons/fa";
function LatestPosts() {
  return (
    <section className="center my-[128px] flex flex-col gap-[50px]">
      <div className=" flex flex-col justify-between items-start md:flex-row md:items-center gap-4  ">
        <div className="flex flex-col">
          <h1>Latest Posts</h1>
          <p>Check out our most recent articles</p>
        </div>
        <div>
          <Button
            variant="secondary"
            text="wive card"
            RightArrow={RightArrow}
          ></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg duration-300">
          <img
            src="/K.svg"
            alt=""
            className="w-full h-44 object-cover  hover:scale-105 duration-300"
          />

          <div className="p-5">
            <p className="text-gray-400 text-sm mt-4">
              <FaCalendarAlt></FaCalendarAlt> Nov 20, 2025
            </p>

            <h2 className="text-2xl font-bold mt-3">
              The Future of Web Development
            </h2>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              Exploring the latest trends and technologies shaping the future of
              web development in 2024.
            </p>

            <button className="mt-5 text-blue-600 font-medium hover:underline">
              <Button
                text="Read more "
                variant="danger"
                onClick={() => {}}
                RightArrow={RightArrow}
              ></Button>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg duration-300">
          <img
            src="/v.svg"
            alt=""
            className="w-full h-44 object-cover  hover:scale-105 duration-300"
          />

          <div className="p-5">
            <p className="text-gray-400 text-sm mt-4">
              <FaCalendarAlt></FaCalendarAlt> Nov 18, 2025
            </p>

            <h2 className="text-2xl font-bold mt-3">Mastering Productivity</h2>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              Proven strategies and tools to boost your productivity and achieve
              your goals faster.
            </p>

            <button className="mt-5 text-blue-600 font-medium hover:underline">
              <Button
                text="Read more "
                variant="danger"
                onClick={() => {}}
                RightArrow={RightArrow}
              ></Button>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg duration-300">
          <img
            src="/C.svg"
            alt=""
            className="w-full h-44 object-cover hover:scale-105 duration-300"
          />

          <div className="p-5">
            <p className="text-gray-400 text-sm mt-4">
              <FaCalendarAlt></FaCalendarAlt> Nov 15, 2025
            </p>

            <h2 className="text-2xl font-bold mt-3">
              Design Principles That Matter
            </h2>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              Essential design principles every creator should know to build
              stunning user experiences.
            </p>

            <button className="mt-5 text-blue-600 font-medium hover:underline">
              <Button
                text="Read more "
                variant="danger"
                onClick={() => {}}
                RightArrow={RightArrow}
              ></Button>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
