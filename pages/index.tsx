import React from "react";
import Head from "next/head";
import Image from "next/image";
import Project from "../components/Project";
// @ts-ignore
import profile from "../public/profilesq.jpeg";

interface indexProps {}

const projects = [
  {
    name: "Sublit",
    short:
      "A web application to create, submit and evalutate programming assignments",
    description: (
      <ul>
        <li>
          - Helped develop the entire app using React, Node.js and Typescript
        </li>
        <li>
          - Built a HTTP microservice to run and execute code in multiple
          languages using Go
        </li>
      </ul>
    ),
    link: "https://sublit.in",
  },
  {
    name: "Flode",
    short: "A mobile application that teaches programming through flowcharts",
    description: (
      <ul>
        <li>
          - Helped develop the entire app using React Native and Typescript
        </li>
        <li>
          - Our team won first place in the Hashcode hackathon organized by PIL
        </li>
      </ul>
    ),
    link: "https://github.com/VarunMK/flode",
  },
  {
    name: "GAN",
    short:
      "An implementation of the Generative Adversarial Networks paper on MNIST",
    description: (
      <ul>
        <li>
          - Implemented the original Generative Adversarial Networks paper using
          PyTorch
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
          - Implemented LSTM’s and GRU’s to classify movie reviews into 5
          classes
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
        <li>- The system can play games like PONG and TETRIS</li>
      </ul>
    ),
    link: "https://github.com/prithvianilk/chip8-cpp",
  },
];

const index: React.FC<indexProps> = () => (
  <main>
    <Head>
      <title>Prithvi Anil Kumar</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla&family=Krona+One&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="flex justify-around w-screen text-black bg-white-bg">
      <div className="lg:w-9/12 w-10/12 lg:my-24 my-16 mx-auto">
        <div className="flex justify-between mb-10">
          <div>
            <h1 className="text-6xl text-title-red my-2 font-medium font-krona">
              Prithvi Anil Kumar
            </h1>
            <div className="my-5">
              <p className="my-1 text-2xl font-karla">
                Third year CSE student at PES University
              </p>
              <p className="my-1 text-2xl font-karla">
                Co-Head of The Alcoding Club
              </p>
              <p className="my-1 text-2xl font-karla">
                Research Intern at Center of Cloud Computing & Big Data, PES
                University
              </p>
            </div>
            <div className="font-bold text-title-red">
              <div className="lg:text-xl text-lg flex lg:flex-row flex-col w-full">
                <a href="mailto:prithvianilk@gmail.com">
                  Email: prithvianilk@gmail.com
                </a>
                <a
                  href="https://drive.google.com/file/d/1e-oX0erxJK8t_txuR5RTik9j1y_flA_O/view?usp=sharing"
                  className="lg:ml-5 ml-0"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/prithvianilk"
                  className="lg:ml-5 ml-0"
                >
                  Github: @prithvianilk
                </a>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center flex-col hidden min-h-full">
            <div>
              <Image
                className="rounded-full"
                width="200px"
                height="200px"
                src={profile}
              />
            </div>
          </div>
        </div>
        <div className="mt-20 font-karla">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {projects.map(({ name, description, short, link }, index) => (
              <Project
                key={`project-${index}`}
                name={name}
                description={description}
                link={link}
                short={short}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default index;
