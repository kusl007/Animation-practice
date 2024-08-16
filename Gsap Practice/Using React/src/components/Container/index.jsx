import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";

import gsap from 'gsap'

const index = () => {

    const boxRef = useRef()
    const circleRef = useRef()

    const tl=gsap.timeline()
    useGSAP(()=>{
        gsap.to(".box",{
            // x:900,
            delay:.5,
            duration:2,
            rotate:360,
            borderRadius:"50%",
            backgroundColor:"blue"
        })
        // tl.to(circleRef.current,{
        //     x:900,
        //     rotate:360,
        //     borderRadius:"10px",
        //     backgroundColor:"red",
        //     delay:.5,
        //     duration:2,
        // })
    } ,{scope:".container-1"})

  return (
    <div className='h-screen w-screen flex justify-center items-center gap-5 '>
       <div className="container-1 p-2  rounded-lg border-[3px]">
       <div
        ref={boxRef}
         className=" box m-10 box w-32 h-32 bg-red-500 rounded-2xl "
         ></div>
        <div
        ref={circleRef}
         className="m-10 box w-32 h-32 rounded-full bg-blue-500  "
         ></div>
       </div>
       <div className="container-2 p-2  rounded-lg border-[3px]">

       <div
        ref={boxRef}
         className=" box m-10 box w-32 h-32 bg-red-500 rounded-2xl "
         ></div>
        <div
        ref={circleRef}
         className="m-10 box w-32 h-32 rounded-full bg-blue-500  "
         ></div>
       </div>
    </div>
  )
}

export default index