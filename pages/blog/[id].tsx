import Head from "next/head";
import Prism from "prismjs";
import { getAllPostIds, getPostData } from "../../lib/blogs";
import { useEffect } from "react";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: any) {
  useEffect(() => {
    Prism.highlightAll();
  }, [postData]);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="title" content={postData.title} />
        <meta name="description" content={postData.description} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="twitter:title" content={postData.title} />
        <meta property="twitter:description" content={postData.description} />
      </Head>
      <article className="markdown">
        <div className="markdown-header">
          <h1>{postData.title}</h1>
          <p>{new Date(postData.date).toLocaleDateString("en-IN")}</p>
        </div>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}
