import { FaCalendarAlt } from "react-icons/fa";
import Button from "./Button";
import RightArrow from "./Icons/RightArrow";
import { FaArrowRight } from "react-icons/fa";

function PostCard({ post }) {
  return (
    <section>
      <div className="bg-white rounded-xl border border-gray-200 max-w-[384px] overflow-hidden shadow-sm hover:shadow-lg duration-300">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-44 object-cover hover:scale-105 duration-300"
        />

        <div className="p-5">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaCalendarAlt />
            <span>{post.date}</span>
          </div>

          <h2 className="text-2xl font-bold mt-3">{post.title}</h2>

          <p className="text-gray-500 text-sm mt-3 leading-6">
            {post.description}
          </p>

          <Button
            text="Read More"
            variant="danger"
            RightArrow={RightArrow}
            className="mt-5"
          />
        </div>
      </div>
    </section>
  );
}

export default PostCard;
