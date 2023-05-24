import { type NextPage } from "next";
import Head from "next/head";

import UnderConstruction from "~/components/UnderConstruction";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jonathan Ross | Blog</title>
        <meta
          name="description"
          content="Jonathan Ross's Software Engineer Portfolio"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {process.env.NODE_ENV === "development" ? (
        <div>Blog</div>
      ) : (
        <UnderConstruction />
      )}
    </>
  );
};

export default Blog;
