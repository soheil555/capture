import React, { useState } from "react";
import { motion } from "framer-motion";

const Collapse = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      layout
      className="question"
      onClick={() => setToggle((toggle) => !toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>

      {toggle && <div className="answer">{children}</div>}

      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Collapse;
