import { motion, useScroll } from "framer-motion";
import React from "react";

const index = () => {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);
  return (
    <div className="overflow-x-hidden">
      <motion.div
        className="bg-red-500 h-1 w-full fixed  origin-left -mt-16 "
        style={{scaleX:scrollYProgress}}
      ></motion.div>
      <div className="min-h-screen px-60 py-20 text-justify  ">
        <h2 className="text-5xl text-center font-bold m-5">
          kushal Animations
        </h2>
        <p className="font-medium  py-16 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio
          nisi eveniet vitae temporibus atque illo ipsam repellat magnam fugiat
          iusto hic, aspernatur aliquid minus dignissimos dolorem tempora nulla
          laborum velit sapiente voluptatem reprehenderit? Sed fugit ducimus ex
          explicabo dolorem distinctio sapiente necessitatibus, aspernatur
          dolorum illo mollitia impedit obcaecati ipsum magni praesentium dicta
          totam eos doloribus at sunt laudantium. Quisquam numquam deserunt
          maxime, quasi minima sunt eaque ea, repellat soluta est rerum, nam
          culpa incidunt atque ipsa ipsam. Odio rerum consectetur recusandae
          temporibus repellendus aliquam sapiente in corrupti officiis autem
          perferendis molestias, totam repellat, placeat earum ratione fuga
          harum nobis aperiam tempore quo atque dolor facere modi. Sequi
          voluptate optio tempora culpa autem adipisci officia consequuntur
          deleniti in sit. Ipsa, laboriosam corrupti. Ea, ullam tempore est vel,
          provident esse minus voluptas, ab nesciunt tempora eum ut
          necessitatibus? Et laudantium aut expedita quia autem magni esse
          optio! Beatae, sequi asperiores. Ex dolorum quia perferendis. Incidunt
          beatae velit unde dicta ullam neque molestias pariatur doloremque
          accusantium hic iure veritatis voluptas quam, minus in quis esse
          commodi vero eligendi sed recusandae. Pariatur dolore veniam
          doloremque maxime aspernatur dolores quo quidem excepturi dignissimos,
          doloribus obcaecati iure, molestias ab deleniti sint voluptatem
          repellendus eum aliquid!
        </p>
      </div>
      <div className="min-h-screen px-60 py-20 text-justify ">
        <h2 className="text-5xl text-center font-bold m-5">
          kushal Animations
        </h2>
        <p className="font-medium  py-16 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio
          nisi eveniet vitae temporibus atque illo ipsam repellat magnam fugiat
          iusto hic, aspernatur aliquid minus dignissimos dolorem tempora nulla
          laborum velit sapiente voluptatem reprehenderit? Sed fugit ducimus ex
          explicabo dolorem distinctio sapiente necessitatibus, aspernatur
          dolorum illo mollitia impedit obcaecati ipsum magni praesentium dicta
          totam eos doloribus at sunt laudantium. Quisquam numquam deserunt
          maxime, quasi minima sunt eaque ea, repellat soluta est rerum, nam
          culpa incidunt atque ipsa ipsam. Odio rerum consectetur recusandae
          temporibus repellendus aliquam sapiente in corrupti officiis autem
          perferendis molestias, totam repellat, placeat earum ratione fuga
          harum nobis aperiam tempore quo atque dolor facere modi. Sequi
          voluptate optio tempora culpa autem adipisci officia consequuntur
          deleniti in sit. Ipsa, laboriosam corrupti. Ea, ullam tempore est vel,
          provident esse minus voluptas, ab nesciunt tempora eum ut
          necessitatibus? Et laudantium aut expedita quia autem magni esse
          optio! Beatae, sequi asperiores. Ex dolorum quia perferendis. Incidunt
          beatae velit unde dicta ullam neque molestias pariatur doloremque
          accusantium hic iure veritatis voluptas quam, minus in quis esse
          commodi vero eligendi sed recusandae. Pariatur dolore veniam
          doloremque maxime aspernatur dolores quo quidem excepturi dignissimos,
          doloribus obcaecati iure, molestias ab deleniti sint voluptatem
          repellendus eum aliquid!
        </p>
      </div>
      <div className="min-h-screen px-60 py-20 text-justify ">
        <h2 className="text-5xl text-center font-bold m-5">
          kushal Animations
        </h2>
        <p className="font-medium  py-16 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio
          nisi eveniet vitae temporibus atque illo ipsam repellat magnam fugiat
          iusto hic, aspernatur aliquid minus dignissimos dolorem tempora nulla
          laborum velit sapiente voluptatem reprehenderit? Sed fugit ducimus ex
          explicabo dolorem distinctio sapiente necessitatibus, aspernatur
          dolorum illo mollitia impedit obcaecati ipsum magni praesentium dicta
          totam eos doloribus at sunt laudantium. Quisquam numquam deserunt
          maxime, quasi minima sunt eaque ea, repellat soluta est rerum, nam
          culpa incidunt atque ipsa ipsam. Odio rerum consectetur recusandae
          temporibus repellendus aliquam sapiente in corrupti officiis autem
          perferendis molestias, totam repellat, placeat earum ratione fuga
          harum nobis aperiam tempore quo atque dolor facere modi. Sequi
          voluptate optio tempora culpa autem adipisci officia consequuntur
          deleniti in sit. Ipsa, laboriosam corrupti. Ea, ullam tempore est vel,
          provident esse minus voluptas, ab nesciunt tempora eum ut
          necessitatibus? Et laudantium aut expedita quia autem magni esse
          optio! Beatae, sequi asperiores. Ex dolorum quia perferendis. Incidunt
          beatae velit unde dicta ullam neque molestias pariatur doloremque
          accusantium hic iure veritatis voluptas quam, minus in quis esse
          commodi vero eligendi sed recusandae. Pariatur dolore veniam
          doloremque maxime aspernatur dolores quo quidem excepturi dignissimos,
          doloribus obcaecati iure, molestias ab deleniti sint voluptatem
          repellendus eum aliquid!
        </p>
      </div>
      <div className="min-h-screen px-60 py-20 text-justify ">
        <h2 className="text-5xl text-center font-bold m-5">
          kushal Animations
        </h2>
        <p className="font-medium  py-16 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio
          nisi eveniet vitae temporibus atque illo ipsam repellat magnam fugiat
          iusto hic, aspernatur aliquid minus dignissimos dolorem tempora nulla
          laborum velit sapiente voluptatem reprehenderit? Sed fugit ducimus ex
          explicabo dolorem distinctio sapiente necessitatibus, aspernatur
          dolorum illo mollitia impedit obcaecati ipsum magni praesentium dicta
          totam eos doloribus at sunt laudantium. Quisquam numquam deserunt
          maxime, quasi minima sunt eaque ea, repellat soluta est rerum, nam
          culpa incidunt atque ipsa ipsam. Odio rerum consectetur recusandae
          temporibus repellendus aliquam sapiente in corrupti officiis autem
          perferendis molestias, totam repellat, placeat earum ratione fuga
          harum nobis aperiam tempore quo atque dolor facere modi. Sequi
          voluptate optio tempora culpa autem adipisci officia consequuntur
          deleniti in sit. Ipsa, laboriosam corrupti. Ea, ullam tempore est vel,
          provident esse minus voluptas, ab nesciunt tempora eum ut
          necessitatibus? Et laudantium aut expedita quia autem magni esse
          optio! Beatae, sequi asperiores. Ex dolorum quia perferendis. Incidunt
          beatae velit unde dicta ullam neque molestias pariatur doloremque
          accusantium hic iure veritatis voluptas quam, minus in quis esse
          commodi vero eligendi sed recusandae. Pariatur dolore veniam
          doloremque maxime aspernatur dolores quo quidem excepturi dignissimos,
          doloribus obcaecati iure, molestias ab deleniti sint voluptatem
          repellendus eum aliquid!
        </p>
      </div>
    </div>
  );
};

export default index;
