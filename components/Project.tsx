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
      className="bg-white text-black my-10 lg:mx-10 mx-0 p-10 lg:w-10/12 w-full border border-black rounded-lg flex flex-col justify-between"
      {...mouseHandlers}
    >
      <div>
        <div className="text-3xl font-semibold">{name}</div>
        <p className="text-gray-700 text-lg my-2">{short}</p>
        <div className="text-lg">{description}</div>
      </div>
      <a
        target="_blank"
        className="hover:text-title-red hover:font-bold"
        href={link}
      >
        Link to project
      </a>
    </animated.div>
  );
};

export default Project;
