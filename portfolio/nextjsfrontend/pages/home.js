import Image from "next/image";
import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import { TypeAnimation } from "react-type-animation";
import { BsPencilFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import ProgressBar from "@ramonak/react-progress-bar";
import { createClient } from "next-sanity";

// color cream : #FFEFAE

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET_NAME,
  title: process.env.NEXT_PUBLIC_TITLE,
  apiVersion: process.env.NEXT_PUBLIC_API_V,
  useCdn: false
})

const home = ({skills}) => {
  return (
    <div>
      <div className="ct1 flex xl:flex-row xl:justify-between flex-col justify-center gap-y-40 xl:gap-y-0 items-center px-7 sm:px-10 md:px-10 py-44 sm:py-64 xl:px-10 2xl:px-40 xl:py-72 2xl:py-80 h-auto w-full bg-cream">
        <Zoom left isvisible>
          <div className="flex flex-col items-center gap-y-4 pt-48 sm:py-44 xl:py-0">
            <span className="w-full text-2xl text-start font-acme text-brown">
              <Zoom left cascade isvisible>
                Hello!
              </Zoom>
            </span>
            <div className="flex flex-row gap-x-3 md:gap-x-6 lg:gap-x-6 xl:gap-x-6 2xl:gap-x-6">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-acme text-brown">
                <Zoom left cascade isvisible>
                  I'm
                </Zoom>
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-7xl font-bagel text-brown">
                <Zoom left cascade>
                  Avinash Gupta
                </Zoom>
              </span>
            </div>
            <div className="w-full text-start">
              <span className="font-acme text-brown">
                <Zoom left cascade>
                  <TypeAnimation
                    className="text-2xl md:text-4xl 2xl:text-4xl"
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "A Web Developer",
                      1000,
                      "A Freelance Web Developer",
                      1000,
                      "A Web Designer",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    omitDeletionAnimation={true}
                  />
                </Zoom>
              </span>
            </div>
          </div>
        </Zoom>
        <Zoom right isvisible>
          <div className="flex lg:w-full xl:w-[35rem] xl:h-auto xl:px-0 justify-center items-center rounded-xl">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              interval={1800}
              showStatus={false}
            >
              <Image
                className="flex lg:h-auto lg:w-[35rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
                src={"/cover.jpg"}
                alt="error"
                height={768}
                width={576}
              ></Image>

              <Image
                className="flex lg:h-auto lg:w-[35rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
                src={"/cover3.jpg"}
                alt="error"
                height={768}
                width={576}
              ></Image>

              <Image
                className="flex lg:h-auto lg:w-[35rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
                src={"/cover2.jpg"}
                alt="error"
                height={768}
                width={576}
              ></Image>
            </Carousel>
          </div>
        </Zoom>
      </div>

      <div className="bg-white h-auto pt-36 pb-44 relative overflow-hidden">
        <h2 className="flex flex-col sm:flex-col md:flex-row 2xl:flex-row gap-3 justify-center items-center font-acme text-brown text-6xl text-center px-2">
            <span><Zoom top cascade isvisible>Coding</Zoom></span>
            <span><Zoom top cascade isvisible>Skills</Zoom></span>
        </h2>
        <Bounce right isvisible duration={2000}>
        <div className="absolute left-0 -top-1 bg-cream h-64 w-8 sm:w-16 md:w-24 border border-cream"></div>
        </Bounce>

        <div className="py-28 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
        <Zoom top cascade isvisible>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 w-full h-auto bg-gray-100  border border-gray-300 px-7 py-7 rounded-lg shadow-xl hover:shadow-2xl shadow-gray-300 transition ease-in-out duration-300 hover:scale-100">


            {skills.map((item)=>{return <div key={item.slug.current} className="flex flex-col w-auto h-auto gap-y-2">
              <span className="text-brown text-lg tracking-wide font-acme px-2">
                {item.skillname}
              </span>
              <div className="w-full h-4 rounded-full">
                <ProgressBar
                  className="h-4 rounded-full"
                  bgColor="#670000"
                  completed={item.completed}
                  maxCompleted={100}
                  labelColor="#FFEFAE"
                  labelAlignment="center"
                  transitionTimingFunction="ease-in-out"
                  transitionDuration="2s"
                  animateOnRender={true}
                />
                {/* <div className="flex items-start justify-center w-0 h-4 bg-brown rounded-full absolute group-hover:scale-x-75"></div> */}
              </div>
            </div>
          })}

          </div>
        </Zoom>
        </div>
        
        <Bounce left isvisible duration={2000}>
        <div className="absolute right-0 -bottom-1 bg-brown h-64 w-8 sm:w-16 md:w-24 border border-brown"></div>
        </Bounce>
      </div>

      <div className="ct2 bg-brown h-auto pt-36 pb-72 relative overflow-hidden">
          <Zoom top cascade isvisible>
        <h2 className="flex justify-center text-center font-acme text-cream text-6xl ">
            What I do?
        </h2>
          </Zoom>
        <div className="flex flex-col gap-y-44 py-32">
          <div className="flex xl:flex-row flex-col justify-between gap-16 xl:px-12 2xl:px-44">
            <Zoom left cascade isvisible>
              <div className="w-auto flex justify-center h-auto rounded-xl">
                <Image
                  className="flex px-6 sm:px-16 md:px-28 lg:px-0 xl:h-[25rem] xl:w-[35rem] rounded-xl"
                  src={"/fullstack.png"}
                  alt="error"
                  height={1024}
                  width={768}
                ></Image>
              </div>
            </Zoom>
            <Zoom right cascade isvisible>
              <div className="w-auto px-6 sm:px-16 md:px-28 lg:px-0 flex flex-col items-center justify-center gap-y-10">
                  <Zoom right isvisible>
                <h2 className="md:w-[35rem] flex justify-center items-center font-acme text-cream text-4xl">
                    Full Stack Development
                </h2>
                  </Zoom>
                <div className="md:w-[35rem] flex flex-col gap-y-6 text-justify">
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom right isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Building responsive front end websites using React,
                        Nextjs.
                    </span>
                      </Zoom>
                  </div>
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom right isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Using Mongodb atlas or compass as a database.
                    </span>
                      </Zoom>
                  </div>
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom right isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Creating backend of websites in Node, Expressjs.
                    </span>
                      </Zoom>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>

          <div className="flex xl:flex-row flex-col justify-between gap-16 xl:px-12 2xl:px-44">
            <Zoom left cascade isvisible>
              <div className="w-auto px-6 sm:px-16 md:px-28 lg:px-0 flex flex-col items-center justify-center gap-y-10">
                  <Zoom left isvisible>
                <h2 className="md:w-[35rem] flex justify-center items-center font-acme text-cream text-4xl">
                    Search Engine Optimization (SEO)
                </h2>
                  </Zoom>
                <div className="md:w-[35rem] flex flex-wrap flex-col gap-y-6 text-justify">
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom left isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Making optimize content with strategic keyword
                        placement.
                    </span>
                      </Zoom>
                  </div>
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom left isvisible>
                      {/* w-auto group-hover:scale-125 transition ease-in-out duration-300 text-cream text-base  md:text-xl 2xl:text-xl */}
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Creating informative and engaging content.
                    </span>
                      </Zoom>
                  </div>
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom left isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Optimizing website loading speed to provide seamless and
                        intuitive website experience.
                    </span>
                      </Zoom>
                  </div>
                </div>
              </div>
            </Zoom>
            <Zoom right cascade isvisible>
              <div className="w-auto flex justify-center h-auto rounded-xl">
                <Image
                  className="flex px-6 sm:px-16 md:px-28 lg:px-0 xl:h-[25rem] xl:w-[35rem] rounded-xl"
                  src={"/seo.png"}
                  alt="error"
                  height={1024}
                  width={768}
                ></Image>
              </div>
            </Zoom>
          </div>

          <div className="flex xl:flex-row flex-col justify-between gap-16 xl:px-12 2xl:px-44">
            <Zoom left cascade isvisible>
              <div className="w-auto flex justify-center h-auto rounded-xl">
                <Image
                  className="flex px-6 sm:px-16 md:px-28 lg:px-0 xl:h-[25rem] xl:w-[35rem] rounded-xl"
                  src={"/data.png"}
                  alt="error"
                  height={1024}
                  width={768}
                ></Image>
              </div>
            </Zoom>
            <Zoom right cascade isvisible>
              <div className="w-auto px-6 sm:px-16 md:px-28 lg:px-0 flex flex-col items-center justify-center gap-y-10">
                  <Zoom right isvisible>
                <h2 className="md:w-[35rem] flex justify-center items-center font-acme text-cream text-4xl">
                    Data Analysis
                </h2>
                  </Zoom>
                <div className="md:w-[35rem] flex flex-col gap-y-6 text-justify">
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom right isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Performing Exploratory Data Analysis(EDA) on dataset.
                    </span>
                      </Zoom>
                  </div>
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom right isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Providing dataset to various Machine learning models.
                    </span>
                      </Zoom>
                  </div>
                  <div className="group flex flex-row items-center gap-x-2">
                      <Zoom right isvisible>
                    <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-cream text-xl" />
                    <span className="font-acme text-xl text-cream text-justify tracking-wider">
                        Deriving insigts from test dataset based on models.
                    </span>
                      </Zoom>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
        <Bounce right isvisible duration={2000}>
          <div className="absolute -bottom-1 left-0 bg-cream h-64 w-8 sm:w-16 md:w-24 border border-cream"></div>
        </Bounce>
      </div>
    </div>
  );
};

export default home;

export async function getServerSideProps(context) {
  // Fetch data from external API

  const query = '*[_type == "skills"] | order(index asc)';
  const skills = await client.fetch(query);
  // Pass data to the page via props
  return { props: { skills } }
}
