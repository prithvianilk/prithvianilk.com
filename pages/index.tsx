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
      "A web application to create, submit and automatically evalutate programming assignments",
    description: (
      <ul>
        <li>
          - I helped develop the entire app using React, Node.js and Typescript
        </li>
        <li>
          - I built a HTTP microservice to run and execute code in multiple
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
        <li>- I helped develop flode using React Native and Typescript</li>
        <li>
          - Our team won first place the Hashcode hackathon organized by PIL
        </li>
      </ul>
    ),
    link: "https://github.com/VarunMK/flode",
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
    <div className="flex justify-around min-h-screen w-full text-black bg-white-bg">
      <div className="flex flex-col justify-between sm:w-9/12 w-10/12 sm:my-24 my-16 mx-auto">
        <div className="flex justify-between mb-10">
          <div>
            <h1 className="text-6xl text-title-red font-medium font-krona">
              Prithvi Anil Kumar
            </h1>
            <p className="sm:text-2xl text-2xl my-2 font-karla">
              Third year CSE student at PES University
            </p>
          </div>
          <div className="sm:block hidden">
            <Image
              className="rounded-full"
              width="100%"
              height="100%"
              src={profile}
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center">Projects</h1>
          <div className="sm:flex-row flex flex-col justify-evenly font-karla">
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
        <div className="font-bold font-karla text-title-red">
          <div className="sm:text-xl text-lg flex sm:flex-row flex-col w-full">
            <a href="mailto:prithvianilk@gmail.com">
              Email: prithvianilk@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/1e-oX0erxJK8t_txuR5RTik9j1y_flA_O/view?usp=sharing"
              className="sm:ml-5 ml-0"
            >
              Resume
            </a>
            <a href="https://github.com/prithvianilk" className="sm:ml-5 ml-0">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default index;
