// import { motion } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
import { useClickAway, useKey, useMeasure, useMouse, useSize } from "react-use";
import { motion } from "framer-motion";
import { useClickAnyWhere } from "usehooks-ts";

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
};

const Cursor = ({ color = "default" }) => {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);

  return (
    <motion.div
      ref={ref}
      className="aspect-square w-4 rounded-full bg-geist border border-geist-200 fixed pointer-events-none z-50"
      style={{
        top: docY - 8,
        left: docX - 8,
      }}
      variants={variants}
      animate={color}
    />
  );
};

export default Cursor;
