import Image from "next/image";
import React from "react";
import { AiFillFolder,AiOutlineGithub } from "react-icons/ai";
import {PiBinocularsFill} from "react-icons/pi";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link";
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

const clientconfig = ({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET_NAME,
  title: process.env.NEXT_PUBLIC_TITLE,
  apiVersion: process.env.NEXT_PUBLIC_API_V,
  useCdn: false
})

const projects = ({projects}) => {
  const builder = imageUrlBuilder(clientconfig)
  
  return (
    <div>
        
      <div className="flex h-auto px-16 md:pt-16 py-14 sm:pb-20 lg:pt-16 bg-cream">
        <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between h-auto w-full gap-x-4">
        <Zoom left isvisible>
          <div className="lg:w-full xl:w-1/2 h-auto pb-14 pt-20">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} interval={1800} showStatus={false}>
          <Image
            className="flex lg:h-auto lg:w-[35rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
            src={"/projects.jpg"}
            alt="error"
            height={768}
            width={576}
          ></Image>

          <Image
            className="flex lg:h-auto lg:w-[35rem] xl:h-[25rem] xl:w-[35rem] rounded-xl"
            src={"/project1.png"}
            alt="error"
            height={768}
            width={576}
          ></Image>
          </Carousel>
          </div>
        </Zoom>
        <Zoom right isvisible>
          <div className="w-auto h-auto lg:w-1/2 flex flex-col justify-end gap-y-6 lg:pb-36 lg:pt-24 xl:py-48">
            <Zoom right cascade isvisible>
            <h1 className="flex justify-center text-center text-5xl sm:text-7xl font-bagel text-brown">
              Projects
            </h1>
            </Zoom>
            <Zoom right isvisible>
            <h2 className="flex justify-center text-xl font-acme text-brown text-center">
              My projects makes use of vast variety of latest technology tools.
              My best experience is to create Data Science projects and deploy
              them to web applications using cloud infrastructure.
            </h2>
            </Zoom>
          </div>
        </Zoom>
        </div>
      </div>


      <div className="flex flex-col gap-y-28 h-auto px-16 py-80 bg-brown relative overflow-hidden">
      <Bounce right isvisible duration={2000}>
        <div className="absolute left-0 -top-1 bg-cream h-64 w-8 sm:w-16 md:w-24 border border-cream"></div>
      </Bounce>
      <Zoom cascade isvisible>
        <div className="flex flex-col justify-center items-center xl:px-32 2xl:px-64 xl:grid xl:grid-cols-2 gap-x-14 gap-y-28">

          {projects.map((item)=>{return <div key={item.slug.current} className="flex flex-col gap-y-6 items-center shadow-lg shadow-black h-auto w-[18rem] sm:w-[28rem] bg-cream rounded-lg py-4 hover:shadow-xl hover:shadow-black transition ease-in-out duration-300 hover:scale-100">
            
            <div className="flex items-center w-[16rem] sm:w-[26rem] h-auto rounded-lg">
              <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2200} showStatus={false} showIndicators={false} transitionTime={1200}>
              {(item.projectimage).map((k,key)=>{return <Image key={key} className="w-auto h-auto rounded-lg" src={builder.image(k).url()} height={3240} width={5400} alt="error"></Image>})}
              </Carousel>            
            </div>

            <div className="flex flex-col gap-4 w-full px-6">

                <span className="h-auto w-auto flex flex-wrap flex-row gap-4 justify-center text-brown text-xl font-acme">
                <Zoom cascade isvisible delay={500}>
                {(item.logo).map((k,key)=>{return <Image key={key} className="w-8 h-auto" src={builder.image(k).url()} height={512} width={512} alt="error"></Image>})}
                </Zoom>
                </span>
                
                <Zoom cascade isvisible delay={500}>
                <span className="flex justify-center text-brown text-xl font-acme">{item.title}</span>
                </Zoom>

                <span className="flex flex-row justify-end gap-y-2 gap-x-6">
                <Link href={`${item.giturl}`}>
                <AiOutlineGithub className="hover:scale-125 transition ease-in-out duration-300 text-brown text-3xl"/>
                </Link>
                <Link href={`${item.weburl}`}>
                <PiBinocularsFill className="hover:scale-125 transition ease-in-out duration-300 text-brown text-3xl"/>
                </Link>
                </span>

                {/* <span className="flex justify-center text-justify text-brown text-xl font-acme">{item.description}</span> */}

            </div>
          </div>})}

        </div>
      </Zoom>
        <Bounce left isvisible duration={2000}>
        <div className="absolute right-0 -bottom-1 bg-cream h-64 w-8 sm:w-16 md:w-24 border border-cream"></div>
        </Bounce>
      </div>

      {/* <div className="flex flex-col gap-y-28 h-auto py-24 bg-cream">
        <div className="h-auto w-full px-20 relative">
            <Image className="h-auto w-full" src="/imac.jpg" alt="error" height={1563} width={1563}>
            </Image>
            <div className="flex flex-col justify-center items-center top-40 right-44 absolute cursor-pointer">
            <AiFillFolder className="text-[#FF6666] text-6xl "/>
            <span className="text-[#FF6666] font-semibold text-base font-sans">inotebook</span>
            </div>
        </div>

      </div> */}

    </div>
  );
};

export default projects;

export async function getServerSideProps(context) {
  // Fetch data from external API

  const query = '*[_type == "projects"] | order(index asc)';
  const projects = await client.fetch(query);
  // Pass data to the page via props
  return { props: { projects } }
}