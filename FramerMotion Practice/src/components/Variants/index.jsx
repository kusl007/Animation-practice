import { easeOut, motion } from 'framer-motion'
import React from 'react'

const index = () => {
    const Variants={
        visible:{opacity:1,x:500},
        hidden:{opacity:0}
    }
    
  return (
    <div className='mt-10 p-5 h-screen'>
    <motion.div 
    animate={
       Variants.visible
    }
    initial={Variants.hidden}
    transition={{
        duration:1,
        delay:.4,
        ease:"easeOut"
    }}
    className='w-20 h-20 bg-blue-400 rounded'></motion.div>
    <motion.div 
    animate={
       Variants.visible
    }
    initial={Variants.hidden}
    transition={{
        duration:1,
        delay:.4,
        ease:"easeOut"
    }}
    className='w-20 h-20 bg-emerald-400 rounded'></motion.div>
    </div>
  )
}

export default index