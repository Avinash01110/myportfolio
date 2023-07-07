import Image from "next/image";
import Link from "next/link";
import React from "react";
import {MdOutlinePhoneIphone,MdEmail} from "react-icons/md";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <div className="flex-auto items-end bg-cream">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:zitems-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          
          <div className="flex-grow flex justify-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <Fade isvisible>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bagel text-brown tracking-wide text-2xl mb-3">
                Links
              </h2>
              <nav className="list-none mb-10">
                <li className="group">
                  <Link href={'/home'} className="text-brown font-acme text-lg relative">Home
                  <hr className="bg-brown h-1 w-full absolute top-5 left-1 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                  </Link>
                </li>
                <li className='group'>
                  <Link href={'/education'} className="text-brown font-acme text-lg relative">Education<hr className="bg-brown h-1 w-full absolute top-5 left-2 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /></Link>
                </li>
                <li className='group'>
                  <Link href={'/projects'} className="text-brown font-acme text-lg relative">Projects<hr className="bg-brown h-1 w-full absolute top-5 left-1 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /></Link>
                </li>
                <li className='group'>
                  <Link href={'/resume'} className="text-brown font-acme text-lg relative">Resume<hr className="bg-brown h-1 w-full absolute top-5 left-1 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /></Link>
                </li>
                <li className='group'>
                  <Link href={'/myblog'} className="text-brown font-acme text-lg relative">My Blog<hr className="bg-brown h-1 w-full absolute top-5 left-1 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /></Link>
                </li>
                <li className='group'>
                  <Link href={'/contact'} className="text-brown font-acme text-lg relative">Contact<hr className="bg-brown h-1 w-full absolute top-5 left-1 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /></Link>
                </li>
              </nav>
            </div>
            </Fade>
            <Fade isvisible>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bagel text-brown tracking-wide text-2xl mb-3">
                Services
              </h2>
              <nav className="list-none mb-10">
                <li className="group">
                  <Link href={'/projects'} className="text-brown text-lg font-acme relative">Web Development<hr className="bg-brown h-1 w-full absolute top-5 left-4 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /></Link>
                </li>
                <li className="group">
                  <Link href={'/projects'} className="text-brown text-lg font-acme relative">Search Engine<hr className="bg-brown h-1 w-full absolute top-5 left-6 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /> Optimization</Link>
                </li>
                <li className="group">
                  <Link href={'/projects'} className="text-brown text-lg font-acme relative">Data Analysis<hr className="bg-brown h-1 w-full absolute top-5 left-3 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" /></Link>
                </li>
              </nav>
            </div>
            </Fade>
            <Fade isvisible>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bagel text-brown tracking-wide text-2xl mb-3">
                Have a Question?
              </h2>
              <nav className="list-none mb-10 flex flex-col sm:items-center md:items-start justify-center">
                <li className="flex flex-row justify-start items-center gap-x-2">
                  <MdOutlinePhoneIphone className="inline-flex text-brown text-lg font-acme" />
                  <span className="text-brown font-acme text-lg">8103620490</span>
                </li>
                <li className="flex flex-row flex-wrap justify-start items-center gap-x-2">
                <MdEmail className="inline-flex text-brown text-lg font-acme" />
                  <span className="text-brown font-acme text-lg">itsavinashgupta01@gmail.com</span>
                </li>
               
              </nav>
            </div>
            </Fade>
          </div>
        </div>
        <div className="bg-brown">
          <div className="container mx-auto py-4 px-5 flex justify-center flex-wrap flex-col sm:flex-row">
            <p className="text-cream text-sm text-center sm:text-left">
              © 2023 —
              <Link
                href={'/home'}
                rel="noopener noreferrer"
                className="text-cream ml-1"
                target="_blank"
              >
                @Made by Avinash
              </Link>
            </p>
            {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;