import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Box = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 1, scale: 0.8 },
  };

  const isMobileDevice = () => {
    return window.innerWidth < 1200;
  };
  useEffect(() => {
    if (isMobileDevice()) {
      return;
    }
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial={isMobileDevice() ? "visible" : "hidden"}
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default Box;
