import { AnimatePresence, motion,  } from "framer-motion";
import React, { useState } from "react";

const index = () => {

    const [clicked, setClicked] = useState(false)
    

  return (
    <div className="min-h-screen p-10">
       <AnimatePresence>
       <motion.div
        layout
        className={`${clicked ? " h-[100px] w-[100px] ":" h-60 w-60 " }rounded-2xl bg-red-500`}>

        </motion.div>
        <button className="bg-emerald-500 font-bold rounded  mt-4 px-6 py-2 text-white active:scale-95"
        onClick={()=>setClicked(!clicked)}>Click Me</button>
       </AnimatePresence>
    </div>
  );
};

export default index;

//animatePresence & layout  used for memory management
