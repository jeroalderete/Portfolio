import React from "react";
import "./about.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const About = () => {
   return (
      <>
         <Navbar />
         <div className="container animate-slide-up ">
            <div className="section-title">
               <p style={{ color: "#aaaaaa", fontSize: "1rem", fontFamily: "Poppins", }} className="pt-10 pb-4" >
                  ABOUT
               </p>
               <h1 className="py-3 text-start text-[1.7rem] md:text-[2rem]">
                  LEARN MORE ABOUT ME
               </h1>
            </div>

            <section data-aos="fade-up" data-aos-duration="800" className="flex flex-col md:flex-row items-start justify-between   dark:text-light" >
               <Image
               className="w-[250px] md:w-2/6 "
                  src={
                     "https://res.cloudinary.com/dvrc38ei4/image/upload/v1724795514/jerohd_fnn2ib.png"
                  }
                  alt={"Descripción de la imagen"}
                  width={300}
                  height={300}
               />
               <div className="img-about w-full">
                  <div className="mt-5">
                     <div className="flex  justify-between items-center flex-wrap">
                        <h2
                           style={{ color: "#18d26e", fontSize: "30px" }}
                           className="md:mx-10 text-xxl font-semibold"
                        >
                           Front-End Developer
                        </h2>
                     </div>
                     <p className="md:mx-10 mr-5 md:mr-0 italic text-md mt-3 text-white">
                        Freelance frontend developer specializing in e-commerce.
                        Proficient in React, Next.js, WordPress, PHP
                        customization. Committed to innovation, enhancing
                        product promotion, and driving sales effectiveness
                        through creative strategies.
                     </p>
                     <ul className="mt-6 lg:grid lg:grid-cols-2 gap-2">
                     <li className="mt-2 w-full md:mx-10 dark:text-gray gap-2 flex">
                           <span>City: Buenos Aires, Argentina</span>
                        </li>
                        <li className="mt-2 w-full md:mx-10 dark:text-gray gap-2 flex">
                           <span>Bussines Url: <Link href={"https://www.desarrolloliebre.com"}>Desarrollo Liebre</Link></span>
                        </li>
                        <li className="w-full md:mx-10 dark:text-gray gap-2 flex">
                           <span>Phone: +54911-67573300</span>
                        </li>
                      
                        <li className="mt-2 w-full md:mx-10 dark:text-gray gap-2 flex" >
                           <span>Email: desarrolloliebre@gmail.com</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </section>

            <div className="pt-5 section-title">
               <p
                  style={{
                     color: "#aaaaaa",
                     fontSize: "1rem",
                     fontFamily: "Poppins",
                  }}
                  className="pt-10 pb-4"
               >
                  SKILLS
               </p>
            </div>

            <div className="pt-5 flex  md:flex-row  flex-wrap gap-2 md:gap-10  text-[0.3rem]">
               {[ "HTML", "CSS", "SASS", "MONGODB", "TAILWIND", "JAVASCRIPT", "REACT", "NEXT", "PHP", "WORDPRESS", "ASTRO", "PHOTOSHOP", "GIT", "GITHUB", ] .slice(0, 7) .map((skill) => (
                     <p
                        key={skill}
                        style={{ fontSize: "0.8rem", fontWeight: "600" }}
                        className="text-white "
                     >
                        {skill}
                     </p>
                  ))}
            </div>

            <div className="pt-5 flex md:flex-row flex-wrap gap-2 md:gap-10 text-[0.3rem] pb-10">
               {[ "HTML", "CSS", "SASS", "MONGODB", "TAILWIND", "JAVASCRIPT", "REACT", "NEXT", "PHP", "WORDPRESS", "ASTRO", "PHOTOSHOP", "GIT", "GITHUB", ] .slice(6) .map((skill) => (
                     <p
                        key={skill}
                        style={{ fontSize: "0.8rem", fontWeight: "600" }}
                        className="text-white"
                     >
                        {skill}
                        <br></br>
                     </p>
                  ))}
            </div>
         </div>

         <hr className="border-gray-600 shadow-none "></hr>

         <div>
            <Footer />
         </div>
      </>
   );
};

export default About;
