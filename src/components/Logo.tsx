import Link from "next/link";

import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="mt-2 flex items-center justify-center rounded-full bg-slate-900"
      whileHover={{
        backgroundColor: [
          "#121212",
          "rgba(131,58,180,1)",
          "rgba(253,29,29,1)",
          "rgba(252,176,69,1)",
          "rgba(131,58,180,1)",
          "#121212",
        ],
        transition: { duration: 1, repeat: Infinity },
      }}
    >
      <Link
        href="/"
        className="flex h-16 w-16 items-center justify-center text-2xl font-bold text-slate-100"
      >
        JR
      </Link>
    </motion.div>
  );
};

export default Logo;
