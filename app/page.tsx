import Image from 'next/image'
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col w-72 pt-40 px-7 h-screen">
          <h1 className="text-center text-3xl font-black">YA-SI-JANG</h1>
          <h1 className="text-center text-3xl font-black pt-2 pb-4">야시장</h1>
          <div className="border-y-2 my-6 py-6 border-black">
            <p className="text-center font-bold font-serif">
            800 Van Ness Ave<br />San Francisco, CA 94109
            </p>
          </div>
          <a href="#menu" className="text-center my-6 font-semibold text-lg">
            ABOUT US
          </a>
          <a href="#menu" className="text-center mb-6 font-semibold text-lg">
            MENU
          </a>
          <a href="#contact" className="text-center mb-6 font-semibold text-lg">
            CONTACT
          </a>
          <div className="mx-auto flex mb-10">
            <a href="/" className="text-xl mx-2">
              <FaInstagram />
            </a>
            <a href="/" className="text-lg mx-2">
              <FaFacebook />
            </a>
          </div>
          <div>
            <table className="table-auto text-center mx-auto">
              <thead>
                <th>Days</th>
                <th>Hours</th>
              </thead>
              <tbody>
                <tr>
                  <td>MON - FRI</td>
                  <td>11AM - 10PM</td>
                </tr>
                <tr>
                  <td>SAT</td>
                  <td>11AM - 10PM</td>
                </tr>
                <tr>
                  <td>SUN</td>
                  <td>11AM - 10PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative flex flex-col flex-1 fw h-screen overflow-auto">
          <Image
            src="/main.jpg"
            fill
            objectFit='cover'
            alt="Main Cover"
            className="fixed blur-sm -z-10 brightness-75 p-3"
          />
          {/* <h1 className="text-white text-5xl font-black text place-self-center pt-60 tracking-wide">Welcome to YASIJANG!</h1> */}
          <p className="w-full text-xl pt-80 px-20 text-white font-medium text-center">
          Welcome to Yasijang, the best place to enjoy delicious Korean night food in San Francisco! Whether you are looking for a casual dinner with friends, a romantic date night, or a fun party with your family, we have something for everyone. Our menu features a variety of dishes that are perfect for night cravings. Don't forget to pair your meal with some refreshing drinks, such as soju, beer, or tea. Come and experience the authentic flavors of Korea at Yasijang, where every night is a celebration!
          </p>
        </div>
      </div>
    </>
  )
}
