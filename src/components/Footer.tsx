import Link from "next/link";

import Layout from "./Layout";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  let yearText = currentYear.toString();

  if (currentYear > 2023) {
    yearText = "2023-" + yearText;
  }

  return (
    <footer className="w-full border-t-2 border-slate-900 text-lg font-medium">
      <Layout className="flex items-center justify-between py-8">
        <span>Copyright &copy; {yearText}. All Rights Reserved.</span>
        <div className="flex items-center">
          Built with{" "}
          <span className="px-1 text-2xl text-blue-700">&#9825;</span> by
          Jonathan Ross
        </div>
        <Link href="/" target="_blank" className="underline underline-offset-2">
          Say hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
