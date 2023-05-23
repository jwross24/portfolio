import { siteLinks, socialLinks } from "~/constants";

import Logo from "./Logo";
import SiteLink from "./SiteLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav>
        {siteLinks.map(({ path, title }, index) => {
          const margin =
            index === 0
              ? "mr-4"
              : index === siteLinks.length - 1
              ? "ml-4"
              : "mx-4";

          return (
            <SiteLink
              key={index}
              href={path}
              title={title}
              className={margin}
            />
          );
        })}
      </nav>

      <nav className="flex flex-wrap items-center justify-center">
        {socialLinks.map(({ path, renderIcon }, index) => {
          const margin =
            index === 0
              ? "mr-3"
              : index === socialLinks.length - 1
              ? "ml-3"
              : "mx-3";

          return (
            <SocialLink
              key={index}
              href={path}
              className={margin}
              renderIcon={renderIcon}
            />
          );
        })}
      </nav>

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
