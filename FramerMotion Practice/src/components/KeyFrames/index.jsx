import { easeOut, motion } from "framer-motion";
import React from "react";

const index = () => {
  return (
    <div className="mt-10 p-5 h-screen">
      <motion.div
        className="w-20 h-20 bg-blue-400 rounded"
        animate={{
          x: [0,1000,1000,0,0],
          y: [0,0,300,300,0],
          rotate:[0,360,720,360,0],
          // y:300,
          rotate: 360,
        }}
        
        transition={{
          duration: 2,
          delay: 0.4,
          ease: "easeOut",
        }}
      ></motion.div>
    </div>
  );
};

export default index;
