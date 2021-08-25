import React from "react";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";

interface ProjectProps {
  name: string;
  short: string;
  description: any;
  link: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  short,
  description,
  link,
}) => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
    <animated.div
      ref={ref}
      style={{
        ...style,
      }}
      className="bg-white text-black my-10 sm:mx-10 mx-0 p-10 sm:w-1/3 w-full border border-black rounded-md"
      {...mouseHandlers}
    >
      <a className="text-3xl font-semibold hover:text-title-red" href={link}>
        {name}
      </a>
      <p className="text-gray-700 text-lg my-2">{short}</p>
      <div className="text-md">{description}</div>
    </animated.div>
  );
};

export default Project;
