import React from 'react';
import Head from 'next/head';
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

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
    <div className="w-full my-10  text-white">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between flex-col-reverse lg:flex-row">
          <div>
            <h1 className="text-6xl text-title-green my-2 font-medium font-krona">
              Prithvi Anil Kumar
            </h1>
            <div className="font-bold text-link-pink">
              <div className="xl:text-xl text-lg flex xl:flex-row flex-col w-full">
                <p>
                  Github:{' '}
                  <a
                    href="https://github.com/prithvianilk"
                    className="underline"
                  >
                    @prithvianilk
                  </a>
                </p>
                <p className="xl:ml-5 ml-0">
                  Email:{' '}
                  <a href="mailto:prithvianilk@gmail.com" className="underline">
                    prithvianilk@gmail.com
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
            <div className="my-4 font-karla text-xl xl:text-2xl w-full xl:w-3/4">
              <p className="mb-4">
                Everything tech @{' '}
                <a
                  target="_blank"
                  href="https://sublit.in"
                  className="font-bold text-link-pink underline"
                >
                  Sublit
                </a>{' '}
                (May 2021 - May 2022), where we helped 3000+ students and 70+
                teachers design, code and auto-evaluate programming assignments
                <br />
                It was shortlisted among the top 10 ideas by Cisco and NASSCOM
                foundation's ThinQbator Program 2021 to receive a seed grant of
                Rs. 5,00,000
              </p>
              <p className="my-4">
                Backend Intern @{' '}
                <a
                  target="_blank"
                  href="https://groww.in/"
                  className="font-bold text-link-pink underline"
                >
                  Groww
                </a>{' '}
                (May - July, 2022)
              </p>
              <p className="my-4">
                Finna build excellent software and eat great pizza (Dec 2022 -
                present)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default index;
