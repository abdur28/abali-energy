'use client'

import { useState } from "react";
import ExpandButton from "./ExpandButton";
import { motion } from "framer-motion";

const DropDownBox = ({ title, description }: { title: string; description: string }) => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="flex flex-col p-3  w-full border-gray-700 rounded-lg border"
      onClick={() => setOpen(!open)}
      animate={open ? "open" : "closed"}
      initial="closed"
    >
      <div className="flex flex-row justify-between">
        <div className="md:text-lg font-Satoshi font-semibold">
          {title}
        </div>
        <div>
          <ExpandButton setOpen={setOpen} />
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={variants}
        className="overflow-hidden"
      >
        <div className="md:text-lg mt-3 font-Satoshi">
          {description}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DropDownBox;
