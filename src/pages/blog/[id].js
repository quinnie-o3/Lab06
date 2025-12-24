import Head from "next/head";
import { useRouter } from "next/router";
import posts from "../../data/data.json";

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p style={{ padding: 16 }}>Loading...</p>;
  }

  if (!post) {
    return <p style={{ padding: 16 }}>Post not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
      </Head>
      <main style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((item) => item.id === params.id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
}
