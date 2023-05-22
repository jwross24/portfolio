import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import Logo from "./Logo";

interface SiteLinkProps {
  href: string;
  title: string;
  className: string;
}

const SiteLink = ({ href, title, className }: SiteLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} group relative`}>
      {title}

      <span
        className={`absolute -bottom-0.5 left-0 inline-block h-[1px] bg-slate-900 transition-[width] duration-300 ease-in-out group-hover:w-full ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav>
        <SiteLink href="/" title="Home" className="mr-4" />
        <SiteLink href="/about" title="About" className="mx-4" />
        <SiteLink href="/projects" title="Projects" className="mx-4" />
        <SiteLink href="/blog" title="Blog" className="ml-4" />
      </nav>

      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href="https://twitter.com/jwross24"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mr-3 w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.github.com/jwross24"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/jwross24"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 w-6"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
