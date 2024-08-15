import { easeOut, motion } from "framer-motion";
import React from "react";

const index = () => {
  return (
    <div className="mt-10 p-5 h-screen">
      <motion.div
        className="w-20 h-20 bg-blue-400 rounded"
        drag
       whileHover={{
        scale:1.2,
        backgroundColor:"red",
       }}
       whileTap={{
        scale:0.9,
       }}
        
      ></motion.div>
    </div>
  );
};

export default index;
