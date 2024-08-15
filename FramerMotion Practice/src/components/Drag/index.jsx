import { easeOut, motion } from "framer-motion";
import React from "react";

const index = () => {
  return (
    <div className="mt-10 p-5 h-screen">
      <motion.div
        className="w-20 h-20 bg-blue-400 rounded"
        drag
        dragConstraints={{top:0,left:0,bottom:100,right:200}}
        dragDirectionLock
        
      ></motion.div>
    </div>
  );
};

export default index;
