import Image from "next/image";
import caraBelajar from "@/public/Cara-Belajar-Efektif.jpg";

export const metadata = {
  title: "Belajar NextJS",
  description: "HEllo World!",
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {});
  const data = await res.json();
  return data;
}
export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <section id="hero" className="hero bg-start px-20">
        <div className="container h-screen">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h1 className="text-xl font-bold text-white">Belajar</h1>
              <div className="card">
                <h1>Test</h1>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3">
              <Image src="https://www.smadwiwarna.sch.id/wp-content/uploads/2021/10/Cara-Belajar-Efektif.jpg" width={300} height={300} alt="Cara Belajar Efektif" quality={10} />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3">
              <h1>Test2</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="post" className="post bg-secondary py-[60px]">
        <div className="container px-20 mx-auto">
          <h2 className="text-white text-3xl text-center">Post: </h2>
          <div className="flex flex-wrap justify-center items-center self-center">
            {posts.map((post: any) => (
              <div className="w-full lg:w-1/3 my-2 justify-center self-center" key={post.userId}>
                <div className="card">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
