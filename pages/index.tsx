import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
// @ts-ignore
import profile from '../public/profilesq.jpeg';
import Projects from '../components/Projects';
import { NextPage } from 'next';

const index: NextPage = () => (
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

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
    <div className="w-full my-14 text-white">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between flex-col-reverse lg:flex-row">
          <div>
            <h1 className="text-6xl text-title-green my-2 font-medium font-krona">
              Prithvi Anil Kumar
            </h1>
            <div className="my-4 font-karla text-xl xl:text-2xl w-full xl:w-3/4">
              <p className="my-4">Fourth year CSE student @ PES University</p>
              <p className="my-4">
                Backend Intern (May - July, 2022) @{' '}
                <a
                  target="_blank"
                  href="https://groww.in/"
                  className="font-bold text-link-pink underline"
                >
                  Groww
                </a>
              </p>
              <div className="my-4">
                <p className="mb-2">
                  Core developer @{' '}
                  <a
                    target="_blank"
                    href="https://sublit.in"
                    className="font-bold text-link-pink underline"
                  >
                    Sublit
                  </a>
                  {', '} where we are helping 2000+ students and 50+ teachers
                  design, code and auto-evaluate programming assignments
                </p>
                <p className="mt-2">
                  It has been shortlisted among the top 10 ideas by Cisco and
                  NASSCOM foundation's ThinQbator Program to receive a Seed
                  Grant of Rs. 5,00,000
                </p>
              </div>
              <p className="my-4">
                Co-Head of{' '}
                <a
                  target="_blank"
                  href="https://thealcodingclub.vercel.app/"
                  className="font-bold text-link-pink underline"
                >
                  The Alcoding Club
                </a>
                {', '} the official Competitive Programming Club of PES
                University
              </p>
            </div>
            <div className="font-bold text-link-pink">
              <div className="xl:text-xl text-lg flex xl:flex-row flex-col w-full">
                <p>Phone: +91 7406776698</p>
                <p className="xl:ml-5 ml-0">
                  Email:{' '}
                  <a href="mailto:prithvianilk@gmail.com" className="underline">
                    prithvianilk@gmail.com
                  </a>
                </p>
                <p className="xl:ml-5 ml-0">
                  Github:{' '}
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
          <div className="flex justify-center flex-col min-h-full mb-10">
            <div className="flex justify-center">
              <Image
                priority
                quality={100}
                src={profile}
                width="240px"
                height="240px"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-14 mb-3 font-karla">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Projects />
          </div>
        </div>
        <div>
          <p className="text-center font-karla text-xl font-bold">
            Made with{' '}
            <span role="img" aria-label="heart">
              💚
            </span>{' '}
            in Bengaluru
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default index;
