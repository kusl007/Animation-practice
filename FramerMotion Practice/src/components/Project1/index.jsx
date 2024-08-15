import { easeOut, motion } from 'framer-motion'
import React from 'react'

const index = () => {
    
  return (
    <div className='mt-10 p-5 h-screen'>
    <motion.div 
    animate={
        {
            x:1000,
            y:300,
            rotate:360
        }
    }
    initial={{
        x:0,
        y:0,
        rotate:0
    }}
    transition={{
        duration:1,
        delay:.4,
        ease:"easeOut"
    }}
    className='w-20 h-20 bg-blue-400 rounded'></motion.div>
    </div>
  )
}

export default index