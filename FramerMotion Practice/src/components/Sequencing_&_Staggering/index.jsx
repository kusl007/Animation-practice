import { easeOut, motion } from 'framer-motion'
import React from 'react'

const index = () => {
    const ParentVariants={
        visible:{opacity:1, transition:{
            staggerChildren:0.2,
            delayChildren:0.5
        }},
        hidden:{opacity:0},
       
    }
    const ChildVariants={
        hidden:{y:40,opacity:0},
        visible:{opacity:1,y:0}
    }
    const arr=[1,2,3,4,5,6,7,8,9,0,1,2]
    
  return (
    <div className='mt-10  h-[60vh] w-[80vw]p-5  bg-blue-900 p-4 rounded '>
    <motion.div 
  
    variants={ParentVariants}
    animate="visible"
    initial="hidden"
    transition={{
        duration:1,
        delay:.4,
        ease:"easeOut"
    }}
    className='w-full h-full  bg-slate-400 p-3  flex gap-5 flex-wrap'>
            {arr.map((item,indx)=>(<motion.div key={indx}
            variants={ChildVariants} className='flex justify-center items-center font-bold bg-amber-400 rounded-2xl h-32 w-40 ' >
                <p className=''>Child {indx+1}</p>
                </motion.div>))}
        
    </motion.div>
    
    </div>
  )
}

export default index