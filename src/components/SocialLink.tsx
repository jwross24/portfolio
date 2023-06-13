import { motion } from "framer-motion";
import { type ReactElement } from "react";

interface SocialLinkProps {
  href: string;
  renderIcon: () => ReactElement;
}

const SocialLink = ({ href, renderIcon }: SocialLinkProps) => {
  const icon = renderIcon();

  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6"
    >
      {icon}
    </motion.a>
  );
};

export default SocialLink;
