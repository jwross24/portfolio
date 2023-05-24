import { type NextPage } from "next";
import Head from "next/head";

import AnimatedText from "~/components/AnimatedText";
import UnderConstruction from "~/components/UnderConstruction";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jonathan Ross | About</title>
        <meta
          name="description"
          content="Jonathan Ross's Software Engineer Portfolio"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {process.env.NODE_ENV === "development" ? (
        <section>
          <AnimatedText text="" className="" />
        </section>
      ) : (
        <UnderConstruction />
      )}
    </>
  );
};

export default About;
