import { type AppType } from "next/dist/shared/lib/utils";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`${montserrat.variable} min-h-screen w-full bg-slate-100 font-sans`}
    >
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
};

export default MyApp;
