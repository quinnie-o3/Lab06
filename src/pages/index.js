import Head from "next/head";
import Link from "next/link";
import posts from "../data/data.json";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dynamic Blog</title>
        <meta name="description" content="Blog list built with Pages Router SSG." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
        <h1>Dynamic Blog System</h1>
        <p>Click a title to read the full post.</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: 8 }}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}
