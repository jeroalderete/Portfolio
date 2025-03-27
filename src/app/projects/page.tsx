import React from "react";
import Image from "next/image";
import "./projects.css";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />

      {/*Project 1 */}

      <div className="animate-slide-up container grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
        {/* Project 4 */}

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://github.com/jeroalderete/Poral-S.A.C.I"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
            <Link
              href={"https://finanflix-trading.vercel.app"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <Link href={"https://finanflix-trading.vercel.app"} target="_blank">
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1731886152/1_jpjqe7.jpg"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">Finanflix</h3>
          </div>
        </article>

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://elargento.infinityfreeapp.com/"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />c
              </svg>
            </Link>
          </div>
          <Link href={"https://elargento.infinityfreeapp.com/"} target="_blank">
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724628343/argento_v3w7nu.png"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">El Argento Eventos</h3>
          </div>
        </article>

        {/* Project 2 */}

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://github.com/jeroalderete/UX-Snowboards"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
            <Link
              href={"https://ux-snowboard.vercel.app/"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <Link href={"https://ux-snowboard.vercel.app/"} target="_blank">
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724629452/snow_dxnltj.png"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">Ux Boards</h3>
          </div>
        </article>

        {/* Project 3 */}

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://fundacionrenebaron.org"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <Link href={"https://fundacionrenebaron.org"} target="_blank">
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724629803/fbr_w71u1x.png"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">Fundación René Barón</h3>
          </div>
        </article>

        {/* Project 5 */}

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://plantamade.com/"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <Link href={"https://plantamade.com/"} target="_blank">
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724630226/plantamdae_zdkxaq.png"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">PLANTA MADE</h3>
          </div>
        </article>

        {/* Project 6 */}

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://github.com/jeroalderete/El-Oraculo-App"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
            <Link
              href={"https://mechidumas.com/"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <Link href={"https://mechidumas.com/"} target="_blank">
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724630518/oraculo2_hn7txz.png"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">EL ORÁCULO DE HÁBITOS</h3>
          </div>
        </article>

        {/* Project 7 */}

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://guruia.com/"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <Link href={"https://guruia.com/"} target="_blank">
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724631256/guru_swcucp.png"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">GURUIA</h3>
          </div>
        </article>
        {/* Project 8 */}

        <article className="px-3 md:px-0 w-full max-h-[30rem] overflow-hidden relative group">
          <div className="flex items-center absolute right-4 top-4 z-10">
            <Link
              href={"https://github.com/jeroalderete/Black-Records"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
            <Link
              href={"https://jeroalderete.github.io/Black-Records/"}
              className="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1"
              aria-label="Social Media"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <Link
            href={"https://jeroalderete.github.io/Black-Records/"}
            target="_blank"
          >
            <Image
              src={
                "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724631389/black_bvwy1d.png"
              }
              className="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]"
              loading="lazy"
              width={350}
              height={350}
              alt={"featureImage"}
            />
          </Link>

          <div className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
            <h3 className="mr-2 text-xl">BLACK RECORDS</h3>
          </div>
        </article>
      </div>

      <hr className="border-gray-600 shadow-none "></hr>

      <Footer />
    </>
  );
};

export default Projects;
