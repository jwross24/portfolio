import { siteLinks, socialLinks } from "~/constants";

import Logo from "./Logo";
import SiteLink from "./SiteLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium">
      <nav className="space-x-8">
        {siteLinks.map(({ path, title }, index) => (
          <SiteLink key={index} href={path} title={title} />
        ))}
      </nav>

      <nav className="flex flex-wrap items-center justify-center space-x-6">
        {socialLinks.map(({ path, renderIcon }, index) => (
          <SocialLink key={index} href={path} renderIcon={renderIcon} />
        ))}
      </nav>

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
