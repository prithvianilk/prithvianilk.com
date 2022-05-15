import React from 'react';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

const projects = [
  {
    name: 'Sublit',
    short:
      'A web platform to create, submit and evalutate programming assignments',
    description: (
      <ul>
        <li>
          - I touched all parts of the stack, from building{' '}
          <span className="italic"> pretty </span> React Components to deploying
          our backend services on AWS
        </li>
      </ul>
    ),
    link: 'https://sublit.in',
  },
  {
    name: 'Laddoo',
    short:
      'A web application providing analytics and meal recommendations based on Swiggy order data',
    description: (
      <ul>
        <li>
          - Our project won first place in the "Dotslash" Hackathon, Aatmatrisha
          2022
        </li>
      </ul>
    ),
    link: 'https://github.com/prithvianilk/laddoo',
  },
  {
    name: 'RDFS',
    short: 'A reliable, distributed file system inspired by HDFS',
    description: (
      <ul>
        <li>
          - Implemented a reliable, distributed file system based on HDFS's
          (Hadoop) architecture
        </li>
      </ul>
    ),
    link: 'https://github.com/prithvianilk/rdfs',
  },
  {
    name: 'Flode',
    short:
      'A mobile application that teaches programming concepts through flowcharts',
    description: (
      <ul>
        <li>
          - Our project won first place in the "Hashcode" Hackathon 2021
          organized by PES Innvovation Lab
        </li>
      </ul>
    ),
    link: 'https://github.com/VarunMK/flode',
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
