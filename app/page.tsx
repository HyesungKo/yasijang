import Image from 'next/image'
import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import Sidebar from './components/sidebar';
import { LiaCopyright } from "react-icons/lia";
import Gallery from './components/gallery';
import HappyHour from './components/happyhours';
import MenuSushi from './components/menu_japanese';


export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full font-serif" >
        <Sidebar />
        <div className="flex flex-col flex-1 h-screen overflow-auto">
          <div className="relative">
            <div id="about" className="relative h-screen">
              <Image
                priority
                src="/main.jpg"
                fill
                alt="Main Cover"
                className="blur-sm -z-10 brightness-50"
                style={{objectFit: "cover"}}
              />
              <About />
            </div>
          </div>
          <div style={{backgroundColor: "#c8c4b8"}}>
            <Menu />
            <MenuSushi />
            <HappyHour />
            <Gallery /> 
            <Contact />
          </div>
          <div className="p-1 h-10 flex justify-center" style={{backgroundColor: "#c8c4b8"}}>
            <div className="p-1">
              <LiaCopyright />
            </div>
            <p className="font-sans flex justify-center">
              {new Date().getFullYear()} YASIJANG
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
