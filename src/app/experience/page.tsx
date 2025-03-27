import React from "react";
import "./experience.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const Experience = () => {
   return (
      <>
         <Navbar />

         <div className="animate-slide-up">

         <section className=" container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            <h2 className="w-[15rem] mt-16 bold text-[1.3rem] md:text-xl">
               <strong>EXPERIENCE</strong>
            </h2>
            <div className="w-full">
               <div className="my-10 md:my-16">
                  <div className="flex justify-between items-center flex-wrap">
                  <h3 className="md:text-xl font-semibold uppercase">
                        Front End Dev - Natura Co
                     </h3>
                     <p className="text-sm dark:text-gray">
                        Apr 2023 - Present
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <ul className="mt-3">
                     <li className="dark:text-gray">
                        ✓ Front End Dev with CMS
                     </li>
                     <li className="dark:text-gray">
                        ✓ Developing HTML & CSS code in CMS enviroments
                     </li>
                     <li className="dark:text-gray">
                        ✓ Help and training of other colleagues
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         <section className="container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            {" "}
            <h2 className="w-[15rem] none md:block bold text-xl">
               <strong></strong>
            </h2>
            <div className="w-full">
               <div>
                  <div className="flex justify-between items-center flex-wrap">
                  <h3 className="md:text-xl font-semibold uppercase">
                        Fullstack Dev Desarrollo Liebre
                     </h3>
                     <p className="text-sm dark:text-gray">
                        Nov 2020 - Present
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <ul className="mt-3">
                     <li className="dark:text-gray">
                        ✓ Developing code in accordance with appropriate design
                        and architectural rules
                     </li>
                     <li className="dark:text-gray">
                        ✓ Documenting, testing, deployment, maintenance, support
                        of platforms, applications, databases and solutions
                     </li>
                     <li className="dark:text-gray">
                        ✓ Help and training of other colleagues
                     </li>
                     <li className="dark:text-gray">
                        ✓ Others tasks connected to the nature of the job
                     </li>
                     <li className="dark:text-gray">
                        ✓ Code Improvements and Refactoring{" "}
                     </li>
                     <li className="dark:text-gray">
                        ✓ Best Practices and Rules Maintainer
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         <section className="container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            {" "}
            <h2 className="w-[15rem] md:mt-16 bold text-xl">
               <strong></strong>
            </h2>
            <div className="w-full">
               <div className="my-12">
                  <div className="flex justify-between items-center flex-wrap">
                  <h3 className="md:text-xl font-semibold uppercase">
                        Freelance Web Development with Collaborative Teams
                     </h3>
                     <p className="text-sm dark:text-gray">
                        Nov 2020 - Present
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <div className="mt-3 w-2/3">
                     <p className="dark:text-gray">
                        Currently, Im working as a freelance developer,
                        collaborating with other coders. Fixing issues in other
                        companies as a consultant Teaching technologies to other
                        collaborators when necessary
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            {" "}
            <h2 className="w-[15rem] mt-8 bold text-[1.3rem] md:text-xl">
               <strong>EDUCATION</strong>
            </h2>
            <div className="w-full">
               <div className="my-8">
                  <div className="flex justify-between items-center flex-wrap">
                     <h3 className="md:text-xl font-semibold">
                        {" "}
                        HTML - CSS - WEB DEVELOPMENT - CODERHOUSE{" "}
                     </h3>
                     <p className="text-sm dark:text-gray">
                        March 2019 - June 2019
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <ul className="mt-3">
                  <li className="dark:text-gray text-[0.8rem] md:text-xl">
                        FRONT END WEB DEVELOPMENT COURSE WITH HTML - CSS -
                        BOOTSTRAP
                     </li>
                  </ul>
               </div>
            </div>
         </section>

         <section className="container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            {" "}
            <h2 className="w-[15rem] md:mt-16 bold md:text-xl">
               <strong></strong>
            </h2>
            <div className="w-full">
               <div>
                  <div className="flex justify-between items-center flex-wrap">
                     <h3 className="text-[1rem] md:text-xl font-semibold">
                        BACKEND NEXT - UDEMY
                     </h3>
                     <p className="text-sm dark:text-gray">
                        Nov 2021 - Present
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <ul className="mt-3">
                  <li className="dark:text-gray text-[0.8rem] md:text-xl break-word break-all">
                        FULLSTACK ECOMMERCE WEB DEVELOPMENT COURSE   </li> <span>         <li className="dark:text-gray text-[0.8rem] md:text-xl ">USING REACT
                        WITH NEXT AND MONGODB AS DATABASE</li></span>
                  
                  </ul>
               </div>
            </div>
         </section>

         <section className="container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            {" "}
            <h2 className="w-[15rem] md:mt-16 bold text-xl">
               <strong></strong>
            </h2>
            <div className="w-full">
               <div className="my-6">
                  <div className="flex justify-between items-center flex-wrap">
                     <h3 className="text-[1rem] md:text-xl font-semibold">
                        REACT - CODERHOUSE
                     </h3>
                     <p className="text-sm dark:text-gray">
                        August 2019 - December 2019
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <div className="mt-3 w-2/3">
                  <p className="dark:text-gray text-[0.8rem] md:text-xl">
                        ECOMMERCE WEB DEVELOPMENT COURSE USING REACT
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            <h2 className="w-[15rem] md:mt-16 bold text-xl">
               <strong></strong>
            </h2>
            <div className="w-full">
               <div className="my-3">
                  <div className="flex justify-between items-center flex-wrap">
                     <h3 className="text-[1rem] md:text-xl  font-semibold">
                        THEME CUSTOMIZATION - UDEMY
                     </h3>
                     <p className="text-sm dark:text-gray">
                        August 2019 - December 2019
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <div className="mt-3 w-2/3">
                  <p className="dark:text-gray text-[0.8rem] md:text-xl">
                        THEME CUSTOMIZATION IN PHP USING WORDPRESS
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="pb-3 container flex flex-col md:flex-row items-start justify-between  sm:flex-row dark:text-light">
            {" "}
            <h2 className="w-[15rem] md:mt-16 bold text-xl">
               <strong></strong>
            </h2>
            <div className="w-full">
               <div className="my-6">
                  <div className="flex justify-between items-center flex-wrap">
                     <h3 className="text-[1rem] md:text-xl font-semibold">
                        JAVASCRIPT - CODERHOUSE
                     </h3>
                     <p className="text-sm dark:text-gray">
                        August 2019 - December 2019
                     </p>
                  </div>
                  <p className="text-sm mt-3 text-blue location">
                     Buenos Aires, Cap Fed, Argentina
                  </p>
                  <div className="mt-3 w-2/3">
                  <p className="dark:text-gray text-[0.8rem] md:text-xl">
                        ECOMMERCE WEB DEVELOPMENT COURSE VAINILLA JS
                     </p>
                  </div>
               </div>
            </div>
         </section>

         </div>

         <hr className="border-gray-600 shadow-none"></hr>

         <Footer />
      </>
   );
};

export default Experience;
