import Input from "../../components/Input";
import posts from "../../data/Cards";
import PostCard from "../../components/PostCard";

function Posts() {
  return (
    <>
      <Input variant="primary" placeholder="   Search"></Input>
      <section className="center flex flex-wrap justify-center  md:grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 center my-20 ">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
      ;
    </>
  );
}

export default Posts;
