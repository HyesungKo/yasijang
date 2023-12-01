import Image from 'next/image'
import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
import Sidebar from './components/sidebar';


export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full font-serif">
        <Sidebar />
        <div className="flex flex-col flex-1 h-screen overflow-auto">
          <div className="relative">
            <div className="relative h-screen">
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
          <Contact />
        </div>
      </div>
    </>
  )
}
