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
        <li>- Tech Stack: React, Node.js, MongoDB and Typescript</li>
        <li>- Built an HTTP based online judge microservice in Go</li>
      </ul>
    ),
    link: "https://sublit.in",
  },
  {
    name: "Flode",
    short: "A mobile application that teaches programming through flowcharts",
    description: (
      <ul>
        <li>- Tech Stack: React Native and Typescript</li>
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
    <div className="w-full text-black bg-white-bg">
      <div className="w-10/12 lg:my-24 my-16 mx-auto">
        <div className="flex justify-between">
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
              <div className="xl:text-xl text-lg flex xl:flex-row flex-col w-full">
                <p>
                  Phone: <span>+91 7406776698</span>
                </p>
                <p className="xl:ml-5 ml-0">
                  Email:{" "}
                  <a href="mailto:prithvianilk@gmail.com" className="underline">
                    prithvianilk@gmail.com
                  </a>
                </p>
                <p className="xl:ml-5 ml-0">
                  Github:{" "}
                  <a
                    href="https://github.com/prithvianilk"
                    className="underline"
                  >
                    @prithvianilk
                  </a>
                </p>
                <a
                  href="https://drive.google.com/file/d/1e-oX0erxJK8t_txuR5RTik9j1y_flA_O/view?usp=sharing"
                  className="xl:ml-5 ml-0 underline"
                >
                  Resume
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
      <div className="my-10">
        <p className="text-center font-karla text-xl font-bold">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤
          </span>
          ️ in Bengaluru{" "}
          <span role="img" aria-label="indian flag">
            🇮🇳
          </span>
        </p>
      </div>
    </div>
  </main>
);

export default index;
