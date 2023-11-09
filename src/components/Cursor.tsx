// import { motion } from "framer-motion";
import { useRef } from "react";
import { useMouse } from "react-use";
import { motion } from "framer-motion";

const variants = {
  github: {
    backgroundColor: "#33333399",
    scale: 3,
    border: "none",
  },
  twitter: {
    backgroundColor: "#1DA1F299",
    scale: 3,
    border: "none",
  },
  spotify: {
    backgroundColor: "#1DB95499",
    scale: 3,
    border: "none",
  },
  discord: {
    backgroundColor: "#7289DA99",
    scale: 3,
    border: "none",
  },
  linkedin: {
    backgroundColor: "#0A66C299",
    scale: 3,
    border: "none",
  },
  default: {
    backgroundColor: "#ffffff00",
    border: "1px solid #fff",
    scale: 1,
  },
  hidden: {
    scale: 0.4,
    backgroundColor: "#000",
  },
  down: {
    scale: 0.4,
    backgroundColor: "#fff",
    outline: "2px solid #f0f0f0",
  },
  outLink: {
    scale: 0.4,
    backgroundColor: "#000",
  },
  stats: {
    border: "1px solid black",
    backgroundColor: "transparent",
  },
};

const Cursor = ({ state = "default" }) => {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  return (
    <motion.div
      ref={ref}
      className="aspect-square w-4 rounded-full bg-geist border border-geist-200 fixed pointer-events-none z-50"
      style={{
        top: docY - 8,
        left: docX - 8,
      }}
      variants={variants}
      animate={state}
    />
  );
};

export default Cursor;
