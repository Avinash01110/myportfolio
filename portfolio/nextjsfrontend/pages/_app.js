import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import AnimatedCursor from "react-animated-cursor"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Flip} from 'react-toastify';
import Fade from 'react-reveal/Fade';

export default function App({ Component, pageProps }) {
  return <div className='min-h-screen bg-white text-black'>
  <Navbar/>
  <ToastContainer transition={Flip}/>
  <Component {...pageProps} />
  <Footer/>
  </div>
}
