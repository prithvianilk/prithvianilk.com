import React from "react";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";

const projects = [
  {
    name: "Sublit",
    short:
      "A web platform to create, submit and evalutate programming assignments",
    description: (
      <ul>
        <li>
          - Tech Stack: React, Typescript, Node.js, MongoDB, Go, Docker and
          Heroku
        </li>
        <li>- Built an HTTP based online judge service</li>
      </ul>
    ),
    link: "https://sublit.in",
  },
  {
    name: "Flode",
    short:
      "A mobile application that teaches programming concepts through flowcharts",
    description: (
      <ul>
        <li>- Tech Stack: React Native, Expo and Typescript</li>
        <li>- Won first place in the Hashcode hackathon organized by PIL</li>
      </ul>
    ),
    link: "https://github.com/VarunMK/flode",
  },
  {
    name: "GAN",
    short: "An implementation of a GAN trained on the MNIST dataset",
    description: (
      <ul>
        <li>
          - Implemented the original Generative Adversarial Networks paper using
          PyTorch
        </li>
        <li>
          - Able to generate sample images from the same distribution as the
          MNIST dataset
        </li>
      </ul>
    ),
    link: "https://github.com/prithvianilk/gan",
  },
  {
    name: "Movie Review Sentiment Analysis",
    short: "Movie Review Sentiment Analysis on Rotten Tomatoes Dataset",
    description: (
      <ul>
        <li>
          - Implemented LSTM’s and GRU’s in Pytorch to classify movie reviews
          into 5 classes based on their sentiment
        </li>
        <li>- Achieved an accuracy of 63.54%</li>
      </ul>
    ),
    link: "https://github.com/prithvianilk/mrsa-kaggle",
  },
  {
    name: "Chip-8",
    short: "An emulator for the CHIP-8 System",
    description: (
      <ul>
        <li>
          - Implemented complete emulator and opcode handlers for the CHIP-8
          system using C++ and SDL2
        </li>
        <li>- The emulator can run ROMs of games like PONG and TETRIS</li>
      </ul>
    ),
    link: "https://github.com/prithvianilk/chip8-cpp",
  },
];

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
        <p className="font-semibold text-gray-700 text-lg my-2">{short}</p>
        <div className="text-lg">{description}</div>
      </div>
      <a
        target="_blank"
        className="mt-10 text-title-red underline font-bold"
        href={link}
      >
        Link to project
      </a>
    </animated.div>
  );
};

const Projects = () => (
  <>
    {projects.map(({ name, description, short, link }, index) => (
      <Project
        key={`project-${index}`}
        name={name}
        description={description}
        link={link}
        short={short}
      />
    ))}
  </>
);

export default Projects;
