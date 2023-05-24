import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import AnimatedText from "~/components/AnimatedText";
import { LinkArrow } from "~/components/Icons";
import Layout from "~/components/Layout";

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
      <section className="flex min-h-screen w-full items-center text-slate-900">
        <Layout className="pt-0">
          <div className="flex w-full items-center justify-between">
            <div className="w-1/2">
              <Image
                src="/hero.png"
                width="2000"
                height="2000"
                alt="hero image"
                className="h-auto w-full"
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center">
              <AnimatedText
                text="Crafting Seamless User Experiences through Elegant Code."
                className="!text-left !text-6xl"
              />
              <p className="my-4 text-base font-medium">
                As a seasoned software developer, I bring a wealth of experience
                in building seamless user experiences. Dive into my latest
                projects, where I combine my technical skills with an eye for
                design to deliver elegant and intuitive applications.
              </p>
              <div className="mt-2 flex items-center self-start">
                <Link
                  href="/Jonathan Ross - Software Engineer 2023 Resume.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center rounded-lg border-2 border-transparent bg-slate-900 p-2.5 px-6 text-lg font-semibold text-slate-100 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-100 hover:text-slate-900"
                >
                  Résumé <LinkArrow className="ml-1 w-6" />
                </Link>
                <Link
                  href="mailto:jwross24@vt.edu"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-slate-900 underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Home;
