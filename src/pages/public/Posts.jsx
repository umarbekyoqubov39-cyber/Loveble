import Input from "../../components/Input";
import posts from "../../data/Cards";
import PostCard from "../../components/PostCard";

function Posts() {
  return (
    <>
      <Input variant="primary" placeholder="   Search"></Input>
      <section className="flex flex-col justify-center items-center gap-20 sm:justify-center md:flex-row flex-wrap md:justify-between my-20 px-5 center">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
      ;
    </>
  );
}

export default Posts;
