import Image from 'next/image'
import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import Sidebar from './components/sidebar';
import { LiaCopyright } from "react-icons/lia";
import Gallery from './components/gallery';


export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full font-serif">
        <Sidebar />
        <div className="flex flex-col flex-1 h-screen overflow-auto">
          <div className="relative">
            <div id="about" className="relative h-screen">
              <Image
                priority
                src="/main.jpg"
                fill
                alt="Main Cover"
                className="blur-sm -z-10 brightness-50 p-3"
                style={{objectFit: "cover"}}
              />
              <About />
            </div>
          </div>
          <Menu />
          <Gallery /> 
          <Contact />
          <div className="p-1 h-10 md:bg-white bg-slate-300 flex justify-center">
            <div className="p-1">
              <LiaCopyright />
            </div>
            <p className="font-sans flex justify-center">
              {new Date().getFullYear()} YA-SI-JANG
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
