import Link from "next/link";
import React, { useState } from "react";
import { MdOutlinePhoneIphone, MdEmail } from "react-icons/md";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Flip} from 'react-toastify';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const contact = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mrgwggqr");
  if (state.succeeded) {
    setTimeout(() => {
      toast.success('Message sent successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })  
    }, 1000);
  }
  return (
    <div className="pt-20">
      <div className="flex items-center bg-cream h-64 justify-center">
        <Fade top isvisible> 
        <h1 className="flex items-center justify-start text-brown text-5xl font-acme text-center">
          <Zoom top cascade isvisible>
          Contact me
          </Zoom>
        </h1>
        </Fade>
      </div>

      <div className="bg-white h-auto w-auto py-24 flex flex-col gap-y-12 justify-center">
        <div className="flex justify-center">
          <Zoom cascade isvisible>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center gap-y-8 text-center bg-cream w-64 h-auto py-6 px-6 rounded-lg transition ease-in-out duration-300 hover:scale-100 shadow-xl hover:shadow-2xl shadow-gray-300">
              <div className="w-full flex justify-center">
                <div className="flex justify-center items-center h-24 w-24 bg-gray-100 rounded-full">
                  <MdOutlinePhoneIphone className="text-5xl text-brown text-center" />
                </div>
              </div>
              
              <div className="flex flex-col gap-y-2">
                <Zoom cascade invisible delay={500}>
                <h3 className="text-brown text-lg leading-6 font-medium uppercase">
                  Contact Number
                </h3>
                </Zoom>
                <Zoom cascade invisible delay={500}>
                <p className="text-brown cursor pointer">+918103620490</p>
                </Zoom>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-y-8 text-center bg-cream w-64 h-auto py-6 px-5 rounded-lg transition ease-in-out duration-300 hover:scale-100 shadow-xl hover:shadow-2xl shadow-gray-300">
              <div className="w-full flex justify-center">
                <div className="flex justify-center items-center h-24 w-24 bg-gray-100 rounded-full">
                  <MdEmail className="text-5xl text-brown text-center" />
                </div>
              </div>

              <div className="flex flex-col gap-y-2">
              <Zoom cascade invisible delay={500}>
                <h3 className="text-brown text-lg leading-6 font-medium uppercase">
                  Email Address
                </h3>
              </Zoom>
              <Zoom cascade invisible delay={500}> 
                <p className="text-brown cursor pointer">
                  itsavinashgupta01@gmail.com
                </p>
                </Zoom>
              </div>
            </div>
          </div>
          </Zoom>
        </div>

        
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-center items-center sm:px-48 px-6">
        <Zoom left isvisible>
          <div className="lg:h-auto xl:h-[34.35rem] 2xl:h-[34.35rem] w-auto rounded-l-lg transition ease-in-out duration-300 hover:scale-100 shadow-xl hover:shadow-2xl shadow-gray-300">
            <Image
              className="w-auto h-auto md:w-auto md:h-[34.35rem] rounded-l-lg"
              src={"/contact.jpeg"}
              height={768}
              width={576}
              alt="error"
            ></Image>
          </div>
        </Zoom>

        <Zoom right isvisible>
          <div className="w-full sm:w-full md:w-[46rem] lg:w-[46rem] xl:px-0 xl:w-[24rem] 2xl:w-[26rem] rounded-r-lg transition ease-in-out duration-300 hover:scale-100 shadow-xl hover:shadow-2xl shadow-gray-300">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 text-neutral-400 p-12"
            >
              <div className="mb-4">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-white text-black cursor-text text-[0.94rem] leading-5 h-12 py-1.5 px-3
                w-full border border-gray-300 border-solid rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-white text-black cursor-text text-[0.94rem] leading-5 h-12 py-1.5 px-3 w-full border border-gray-300 border-solid rounded-lg"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="bg-white text-black cursor-text text-[0.94rem] leading-5 h-12 py-1.5 px-3 w-full border border-gray-300 border-solid rounded-lg"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  className="bg-white text-black cursor-text text-[0.94rem] leading-5 h-44 break-words py-1.5 px-3 resize-y w-full border border-gray-300 border-solid rounded-lg"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="items-start bg-white text-brown cursor-pointer inline-block text-xs font-semibold h-12 py-4 px-12 text-center uppercase align-middle w-52 border border-brown border-solid rounded-lg transition ease-in-out hover:scale-95 hover:bg-brown hover:text-cream focus:scale-95 focus:text-cream focus:bg-brown"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Zoom>
        </div>
      </div>
    </div>
  );
};

export default contact;
