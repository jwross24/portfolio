import { type NextPage } from "next";
import Head from "next/head";
import UnderConstruction from "~/components/UnderConstruction";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jonathan Ross | Portfolio</title>
        <meta
          name="description"
          content="Jonathan Ross's Software Engineer Portfolio"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {process.env.NODE_ENV === "development" ? (
        <div>Dev Mode BAYBEE</div>
      ) : (
        <UnderConstruction />
      )}
    </>
  );
};

export default Home;
