import React from "react";
import Head from "next/head";
import Image from "next/image";
// @ts-ignore
import profile from "../public/profilesq.jpeg";
import Projects from "../components/Projects";

interface indexProps {}

const index: React.FC<indexProps> = () => (
  <main>
    <Head>
      {/* open graph data */}
      <title>Prithvi Anil Kumar</title>
      <meta
        name="description"
        content="Third Year CSE student at PES University"
      />
      <meta property="og:title" content="Prithvi Anil Kumar" />
      <meta
        property="og:description"
        content="Third Year CSE student at PES University"
      />
      <meta property="og:url" content="https://prithvianilk.com/" />
      <meta property="og:type" content="website" />

      {/* google fonts */}
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
                <p>Phone: +91 7406776698</p>
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
                  href="https://docs.google.com/document/d/14SndIZS_gtnX0tghJybiKR2XlcwbY2-9qoUigCcwPlw/edit?usp=sharing"
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
                priority
                quality={100}
                src={profile}
                width="200px"
                height="200px"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 font-karla">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Projects />
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
