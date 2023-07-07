import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, [])

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta rel="icon" href="favicon.ico" />
      </Head>
      
      <style global jsx>{`
      Navbar{
        display: none;
      }
      Footer{
        display: none;
      }
      `}</style>
    </div>
    
  );
}
