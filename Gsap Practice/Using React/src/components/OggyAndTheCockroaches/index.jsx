import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import jack from "../../assets/jack.png";
import cockroaches from "../../assets/cockroaches.png";

const index = () => {
  const jackRef = useRef(null);
  const cockroachRef = useRef(null);

  const randomX = gsap.utils.random(-550, 550, 100);
  const randomy = gsap.utils.random(-350, 350, 100);

  const [xMove, setXMove] = useState(0);
  const [yMove, setYMove] = useState(0);

 
  const moveJack = (e) => {
    gsap.to(jackRef.current, {
      x: e.clientX-1400,
      y: e.clientY-700,
    });
  };

  useGSAP(() => {
    gsap.to(
      cockroachRef.current,
      {
        x: xMove,
        y: yMove,
        duration: 0.5,
      },
     
    );
  }, [xMove, yMove]);

  return (
    <div className="min-h-screen px-5  flex items-center justify-center " on onMouseMove={(e) => moveJack(e)}>
      <img ref={jackRef} src={jack} alt="" className="absolute h-[250px] " />
      <img
        ref={cockroachRef}
        src={cockroaches}
        alt=""
        className="absolute  h-[150px]"
        onClick={() => {
          setXMove(randomX);
          setYMove(randomy);
        }}
      />
    </div>
  );
};

export default index;
