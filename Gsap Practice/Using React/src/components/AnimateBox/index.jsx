import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const index = () => {
  const [xMove, setXMove] = useState(0);
  const [rotate, setRotate] = useState(0)
  const random = gsap.utils.random(-600,600,100)
  const randomRotate = gsap.utils.random(-360,360,90)
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xMove,
      rotate:rotate
    });
  }, [xMove,rotate]); //here xMove is dependency

  return (
    <div
      className="min-h-screen px-5 flex gap-10 flex-col  justify-center items-center "
      onClick={() => {
        setXMove(random)
        setRotate(randomRotate)

      }}
    >
      <button className="bg-green-400 w-fit p-3  rounded-2xl font-bold active:scale-95">
        Animate Box
      </button>
      <div ref={boxRef} className="w-32 h-32 bg-red-400 rounded-lg"></div>
    </div>
  );
};

export default index;
