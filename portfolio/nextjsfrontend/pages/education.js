import { createClient } from "next-sanity";
import Image from "next/image";
import React, { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET_NAME,
  title: process.env.NEXT_PUBLIC_TITLE,
  apiVersion: process.env.NEXT_PUBLIC_API_V,
  useCdn: false
})

const education = ({certificates,certificatesimage}) => {
  
  return (
    <div>
      <div className="flex h-auto px-16 md:pt-16 py-14 sm:pb-20 lg:pt-16 bg-cream">
        <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between h-auto w-full">
          <Zoom left isvisible>
          <div className="lg:w-full xl:w-1/2 h-auto pb-14 pt-20">
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} interval={1800} showStatus={false}>
          <Image
            className="flex lg:h-auto lg:w-[35rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
            src={"/education.jpeg"}
            alt="error"
            height={768}
            width={576}
          ></Image>
          
          <Image
            className="flex lg:h-auto lg:w-[35rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
            src={"/education1.png"}
            alt="error"
            height={768}
            width={576}
          ></Image>

          </Carousel>
          </div>
          </Zoom>
          <Zoom right isvisible>
          <div className="w-auto h-auto lg:w-1/2 flex flex-col justify-end gap-y-6 lg:pb-36 lg:pt-24 xl:py-48">
            <h1 className="flex justify-center text-5xl sm:text-7xl font-bagel text-brown">
            <Zoom right cascade isvisible>
              Education
            </Zoom>
            </h1>
            <h2 className="flex justify-center items-center text-center text-2xl sm:text-4xl font-acme text-brown">
            <Zoom right cascade isvisible>
              Basic Qualification and Certification
            </Zoom>
            </h2>
            <div className="flex flex-row justify-center">
              {/* <span className="text-xl font-acme text-brown">Logo</span> */}
            </div>
          </div>
          </Zoom>
        </div>
      </div>

      <div className="flex flex-col gap-y-28 h-auto pt-36 pb-80 bg-white relative overflow-hidden">
        <h2 className="flex justify-center text-center font-acme text-brown text-6xl ">
          <Zoom top cascade isvisible>
          Degrees
          </Zoom>
        </h2>
        <Bounce right isvisible duration={2000}>
        <div className="absolute left-0 -top-1 bg-cream h-64 w-8 sm:w-16 md:w-24 border border-cream"></div>
        </Bounce>
        <div className="flex justify-center">
          <div className="flex h-auto items-center px-4 xl:flex-row flex-col gap-6">
          <Zoom left isvisible>
            <div className="h-52 w-52 shadow-xl hover:shadow-2xl shadow-gray-300  rounded-full bg-white border border-gray-300 transition ease-in-out duration-300 hover:scale-100">
              <Image
                className="flex justify-center items-center h-52 w-52 bg-center"
                src={"/mits_logobg.png"}
                alt="error"
                height={224}
                width={225}
              ></Image>
            </div>
          </Zoom>
          <Zoom right isvisible>
            <div className="h-auto rounded-lg lg:w-[55rem] bg-white shadow-xl hover:shadow-2xl shadow-gray-300 border border-gray-300 transition ease-in-out duration-300 hover:scale-100">

              <div className="flex flex-col lg:flex-row lg:justify-between px-6 py-7 bg-gray-100">

                <div className="flex justify-start flex-col gap-y-2">
                  <h3 className="text-brown font-wide font-bagel text-3xl">
                  <Zoom right cascade isvisible>
                    Madhav Institute Of Technology & Science, Gwalior
                  </Zoom>
                  </h3>
                  <h4 className="text-brown font-wide font-acme text-xl">
                  <Zoom right cascade isvisible>
                    B.tech in Artificial intelligence & Machine learning
                  </Zoom>
                  </h4>
                </div>

                <div className="flex justify-start pt-2">
                  <span className="text-brown text-lg font-bold">
                  <Zoom right cascade isvisible>
                    2021 - 2025
                  </Zoom>
                  </span>
                </div>

              </div>

              <div className="flex items-start justify-center flex-col gap-y-6 px-6 py-4">

                <div className="group flex flex-row items-center gap-x-2">
                  <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-brown text-xl" />
                  <span className="font-acme text-xl text-brown tracking-wider">
                  <Zoom right cascade isvisible>
                  I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, ML etc.
                  </Zoom>
                  </span>
                </div>
                <div className="group flex flex-row items-center gap-x-2">
                  <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-brown text-xl" />
                  <span className="font-acme text-xl text-brown tracking-wider">
                  <Zoom right cascade isvisible>
                  Apart from this, I have gained skills like Full Stack Development, SEO, Data Analysis.
                  </Zoom>
                  </span>
                </div>
                <div className="group flex flex-row items-center gap-x-2">
                  <BsPencilFill className="group-hover:scale-125 transition ease-in-out duration-300 text-brown text-xl" />
                  <span className="font-acme text-xl text-brown tracking-wider">
                  <Zoom right cascade isvisible>
                    Also done some projects on these respective skills.
                  </Zoom>
                  </span>
                </div>

              </div>
            </div>
          </Zoom>
          </div>
        </div>
        <Bounce left isvisible duration={2000}>
        <div className="absolute right-0 -bottom-1 bg-brown h-64 w-8 sm:w-16 md:w-24 border border-brown"></div>
        </Bounce>
      </div>

      <div className="flex flex-col gap-y-32 h-auto bg-brown pt-36 pb-80 relative overflow-hidden">
      <Zoom top cascade isvisible>
        <h2 className="flex justify-center text-center font-acme text-cream text-6xl ">
          Certifications
        </h2>
      </Zoom>
      <Zoom cascade isvisible>
        <div className="lg:px-48 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:items-center xl:px-40 xl:grid-cols-3 gap-14">

          {certificates.map((item,key)=>{return <div key={item.slug.current}> 
          <div className="flex flex-col gap-y-4 h-[25rem] w-80 bg-cream rounded-lg shadow-lg shadow-black hover:shadow-xl hover:shadow-black transition ease-in-out duration-300 hover:scale-100">
            <div className="w-auto h-auto rounded-lg bg-gray-100">
              <Image className="rounded-lg" src={certificatesimage[key].imageUrl} height={item.image.height} width={item.image.width} alt={`${item.image.caption}`}></Image>
            </div>
            <div className="flex flex-col gap-y-2 justify-center ">
            <span className="flex justify-center text-brown text-xl font-acme">{item.title}</span>
            <span className="flex justify-center text-justify text-brown px-5 pb-3 text-lg font-acme">{item.description}</span>
            </div>
          </div>

          </div>})}

        </div>
      </Zoom>
        <Bounce right isvisible duration={2000}>
        <div className="absolute left-0 -bottom-1 bg-cream h-64 w-8 sm:w-16 md:w-24 border border-cream"></div>
        </Bounce>

      </div>

    </div>
  );
};

export default education;

export async function getServerSideProps(context) {
  // Fetch data from external API

  const query = '*[_type == "certificates"] | order(index asc)';
  const imageQuery = '*[_type == "certificates"] | order(index asc) {"imageUrl": image.asset->url}'
  const certificates = await client.fetch(query);
  const certificatesimage = await client.fetch(imageQuery);
  
  // Pass data to the page via props
  return { props: { certificates,certificatesimage } }
}