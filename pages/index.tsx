import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Prithvi Anil Kumar</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Limelight&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex justify-center w-full h-screen text-white bg-ocean">
        <div className="sm:w-8/12 w-10/12 my-auto mx-auto">
          <h1 className="text-6xl font-medium font-limelight">
            Yo, I'm Prithvi!
          </h1>
          <p className="sm:text-2xl text-xl my-2 font-mono">
            I learn about computers at PES University and write code at
            sublit.in
          </p>
          <div className="my-2 font-mono">
            <p className="sm:text-2xl text-xl">Check out some of my stuff</p>
            <div className="my-2 sm:text-xl text-lg flex w-full">
              <a href="https://sublit.in" className="hover:text-red-500">
                Sublit
              </a>
              <a
                href="https://drive.google.com/file/d/1e-oX0erxJK8t_txuR5RTik9j1y_flA_O/view?usp=sharing"
                className="hover:text-green-500 ml-5"
              >
                Resume
              </a>
              <a
                href="https://github.com/prithvianilk"
                className="hover:text-blue-600 ml-5"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
