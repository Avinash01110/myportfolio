import Link from "next/link";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";


const Navbar = () => {
  const [menu, setMenu] = useState("invisible")

  const togglemenu = () => {
    if (menu === "invisible") {
      setMenu("visible")
    } else {
        setMenu("invisible")
    }
  }

  return (
    <div>

      <div className="lg:visible invisible text-neutral-800 px-16 w-full bg-cream fixed z-10">
        <div className="px-3.5">
          <div className="content-center items-center flex flex-wrap justify-between">

            <div className="flex flex-row justify-between items-center h-20 w-full">
            <Link href={"/home"}>
            <div className="flex items-center text-brown text-4xl font-bagel font-light">
              Avinash
            </div>
            </Link>
              <div>
                <ul className="flex flex-row list-none gap-6">
                  <Link href={"/home"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        Home
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link>
                  <Link href={"/education"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        Education
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link>
                  
                  <Link href={"/projects"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        Projects
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link>
                  
                  <Link href={"/resume"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        Resume
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link>
                  {/* <Link href={"/services"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        Services
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link> */}
                  {/* <Link href={"/skills"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        Skills
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link> */}
                  
                  <Link href={"/myblog"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        My Blog
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link>
                  <Link href={"/contact"}>
                    <div className="group">
                      <li className="flex justify-center items-center hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-brown rounded-xl py-2 px-4 group-hover:text-cream text-brown text-lg font-acme cursor-pointer relative">
                        Contact
                        <hr className="bg-brown h-1 w-full absolute top-14 scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100" />
                      </li>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>

            {/* <div>
              <Link
                href="https://themewagon.github.io/#"
                // style="background-image: linear-gradient(to left, rgb(103, 0, 0), rgb(136, 7, 7), rgb(103, 0, 0)); background-position: 100% 50%; background-size: 200%;"
                className="text-white cursor-pointer inline-block py-5 pl-8 pr-16 text-center capitalize align-middle"
              >
                Let's Talk <i className="left-[1.63rem] right-[-1.63rem]"></i>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:invisible visible flex flex-row items-center justify-between h-20 w-full bg-cream fixed z-10 px-16">
        <Link href={"/home"}>
        <div className="flex items-center justify-center text-center text-brown text-4xl font-bagel font-light">
              Avinash
        </div>
        </Link>
        {menu == "invisible" ? 
        <TiThMenu onClick={togglemenu} className="text-center text-xl text-brown"/>:
        <RiCloseLine onClick={togglemenu} className="text-center text-3xl text-brown"/>
        }

        <div className={`${menu} h-auto w-full absolute top-[4.5rem] left-0 bg-cream rounded-lg shadow-lg shadow-brown ${menu == 'invisible'?"transition ease-out duration-200 opacity-0 translate-y-1":"transition ease-in duration-600 opacity-100 translate-y-0"}`}>
          <div className="flex flex-col justify-center py-2 divide-y-2 divide-brown">

            <Link onClick={togglemenu} className="w-full flex items-center justify-center" href={'/home'}><span className="py-2 flex justify-center text-3xl text-brown font-acme">Home</span></Link>
            <Link onClick={togglemenu} className="w-full flex items-center justify-center" href={'/education'}><span className="py-2 flex items-center justify-center text-3xl text-brown font-acme">Education</span></Link>
            <Link onClick={togglemenu} className="w-full flex items-center justify-center" href={'/projects'}><span className="py-2 flex justify-center text-3xl text-brown font-acme">Projects</span></Link>
            <Link onClick={togglemenu} className="w-full flex items-center justify-center" href={'/resume'}><span className="py-2 flex justify-center text-3xl text-brown font-acme">Resume</span></Link>
            <Link onClick={togglemenu} className="w-full flex items-center justify-center" href={'/myblog'}><span className="py-2 flex justify-center text-3xl text-brown font-acme">My Blog</span></Link>
            <Link onClick={togglemenu} className="w-full flex items-center justify-center" href={'/contact'}><span className="py-2 flex justify-center text-3xl text-brown font-acme">Contact</span></Link>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
