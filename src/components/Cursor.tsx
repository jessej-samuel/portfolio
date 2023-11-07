// import { motion } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
import { useMeasure, useMouse, useSize } from "react-use";
import { motion } from "framer-motion";

const Cursor = () => {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);

  useEffect(() => {
    console.log(docX, docY, posX, posY, elX, elY, elW, elH);
  }, [docX, docY, posX, posY, elX, elY, elW, elH]);

  return (
    <motion.div
      ref={ref}
      className="aspect-square w-4 rounded-full bg-geist border border-geist-200 fixed pointer-events-none"
      style={{
        top: docY - 8,
        left: docX - 8,
      }}
    />
  );
};

export default Cursor;
