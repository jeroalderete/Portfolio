"use client"

import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import emailjs from "@emailjs/browser";
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const Contact = () => {

    const [errMsg, setErrMsg] = useState<any>({ message: "", success: null });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
    const [show, setShow] = useState(false);

    // Crear una referencia para el formulario
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm("service_myexixf", "template_bicr3gs", form.current, "jP9ovmSv1gBwu97Bn")
                .then(
                    () => {
                        alert("Consulta Enviada!");
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        }
    };

    return (

        <>

            <div className="animate-slide-up  flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1000" >
                <Navbar />
                <slot />

                <div className="mx-10 w-[300px] md:w-screen mb-3 p-0 border-none  relative ">

                    <div className="pt-10 modal-container animate-slide-up container" data-aos="fade-up" data-aos-duration="1000" >

                        <div className="w-full md:w-screen flex justify-center gap-10 md:gap-0  ">

                            <div className=" bg-black p-20 rounded md:w-1/4 ">
                                <h1 className="modal-title font-semibold text-center text-[1.9rem] text-white pb-5">
                                    Talk to us
                                </h1>

                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-fields flex flex-col text-black">
                                        <label className="text-white">Name</label>
                                        <input required className="border border-gray-700 p-2 rounded mb-5" type="text" name="user_name" />
                                        <label className="text-white">Email</label>
                                        <input required className="border border-gray-700 p-2 rounded mb-5" type="email" name="user_email" />
                                        <label className="text-white">Message</label>
                                        <textarea required name="message" />
                                        <div className="pt-10 flex justify-center">
                                            <Button className="submit-button text-white cursor-pointer bg-slate-900 px-10 py-6 hover:bg-slate-800" type="submit" value="Send">
                                                SEND
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

        <div className='relative top-[100px]'>
        <hr/>
        <Footer />
        </div>
   
        </>
    )
}

export default Contact