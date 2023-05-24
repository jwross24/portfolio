import { motion } from "framer-motion";

const tagline = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className: string;
}

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center">
      <motion.h1
        className={`inline-block w-full text-8xl font-bold text-slate-900 ${className}`}
        variants={tagline}
        initial="hidden"
        animate="show"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
