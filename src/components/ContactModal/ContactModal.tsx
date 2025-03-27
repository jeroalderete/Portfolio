"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Button } from "../ui/button";

export function ContactModal() {
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
        <Popover open={show} onOpenChange={setShow}>
            {/* Background Blur */}
            {show && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
            )}
            <PopoverTrigger
                asChild
                className="rounded-full relative bottom-[10px]  md:top-0 cursor-pointer"
            >
                <div
                    className={`bg-black p-4 rounded-full flex`}
                    onClick={() => setShow(!show)}
                >
                    <div >
                        <div >
                            {!show ? (
                                <div className="flex">
                                    Contact
                                </div>
                            ) : (
                                <X size={22} />
                            )}
                        </div>
                    </div>
                </div>
            </PopoverTrigger>

            <div className="animate-slide-up container" data-aos="fade-up" data-aos-duration="1000" >


                <slot />

                <PopoverContent className="mx-10 w-[750px] mb-3 p-0 border-none bg-black relative md:right-[500px] md:p-10">

                    <div className="modal-container animate-slide-up container" data-aos="fade-up" data-aos-duration="1000" >


                        <div className="flex justify-center gap-10 py-10">
                            <Image src={'https://res.cloudinary.com/dvrc38ei4/image/upload/v1724636157/handsreverted_cvapjz.png'} alt={"Hands"} width={300} height={200} />

                            <div className="pt-20 form-container bg-black p-2 rounded w-72">
                                <h1 className="modal-title font-semibold text-center text-[1.5rem] text-white pb-5">
                                    Talk to us
                                </h1>

                                <form ref={form} className="form-container" onSubmit={sendEmail}>
                                    <div className="form-fields flex flex-col text-black">
                                        <label className="text-white">Name</label>
                                        <input required className="border border-gray-700 p-2 rounded mb-5" type="text" name="user_name" />
                                        <label className="text-white">Email</label>
                                        <input required className="border border-gray-700 p-2 rounded mb-5" type="email" name="user_email" />
                                        <label className="text-white">Message</label>
                                        <textarea required name="message" />
                                        <div className="pt-5 flex justify-center">
                                            <Button className="submit-button text-white cursor-pointer bg-slate-900 px-10 py-6 hover:bg-slate-800" type="submit" value="Send">
                                                SEND
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>




                </PopoverContent>
            </div>
        </Popover>
    );
}
