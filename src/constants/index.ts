import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "~/components/Icons";

const siteLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/projects", title: "Projects" },
  { path: "/blog", title: "Blog" },
];

const socialLinks = [
  { path: "https://linkedin.com/in/jwross24", renderIcon: LinkedInIcon },
  { path: "https://github.com/jwross24", renderIcon: GithubIcon },
  { path: "https://twitter.com/jwross24", renderIcon: TwitterIcon },
  { path: "/", renderIcon: PinterestIcon },
  { path: "/", renderIcon: DribbbleIcon },
];

export { siteLinks, socialLinks };
