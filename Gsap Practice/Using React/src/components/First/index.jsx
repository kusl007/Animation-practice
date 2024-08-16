import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";

import gsap from 'gsap'

const index = () => {

    const boxRef = useRef()
    const circleRef = useRef()

    const tl=gsap.timeline()
    useGSAP(()=>{
        tl.to(boxRef.current,{
            x:900,
            delay:.5,
            duration:2,
            rotate:360,
            borderRadius:"50%",
            backgroundColor:"blue"
        })
        tl.to(circleRef.current,{
            x:900,
            rotate:360,
            borderRadius:"10px",
            backgroundColor:"red",
            delay:.5,
            duration:2,
        })
    })

  return (
    <div>
        <div
        ref={boxRef}
         className="m-10 box w-32 h-32 bg-red-500 rounded-2xl "
         ></div>
        <div
        ref={circleRef}
         className="m-10 box w-32 h-32 rounded-full bg-blue-500  "
         ></div>
    </div>
  )
}

export default index