import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";

export default function Sidebar() {
    return (
        <div className="flex w-full flex-col justify-center sm:w-72 sm:mx-auto mx-0 px-5 h-screen bg-yellow-200">
            <div>

            </div>
            <div className="flex w-full flex-col">
                <h1 className="text-center text-3xl font-black">YASIJANG</h1>
                <h1 className="text-center text-3xl font-black pt-2 pb-4">야시장</h1>
                <div className="border-y-2 my-6 py-6 border-black text-center font-bold">
                    <Link href="https://maps.app.goo.gl/V56i4bfX5EpBY65U6" className="w-full">
                    800 Van Ness Ave<br />San Francisco, CA 94109
                    </Link>
                </div>
                <Link href="#about" className="hover:bg-gray-100 text-center my-6 font-semibold text-lg">ABOUT US</Link>
                <Link href="#menu" className="hover:bg-gray-100 text-center mb-6 font-semibold text-lg">MENU</Link>
                <a href="#contact" className="hover:bg-gray-100 text-center mb-6 font-semibold text-lg">
                    CONTACT US
                </a>
                <a className="hover:bg-gray-100 text-center mb-10 font-semibold text-lg">
                    ORDER ONLINE
                </a>
                <div className="mx-auto flex mb-10">
                    <a href="tel:415-775-5800" className="text-xl mx-2">
                        <PiPhoneCallBold />
                    </a>
                    <a href="/" className="text-xl mx-2">
                        <FaInstagram />
                    </a>
                    <a href="/" className="text-lg mx-2">
                        <FaFacebook />
                    </a>
                </div>
                <div>
                    <table className="mt-10 mx-auto text-center">
                        <thead>
                            <tr>
                            <th className="pr-2">Days</th>
                            <th className="pl-2">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="pr-2">MON - FRI</td>
                            <td className="pl-2">11AM - 10PM</td>
                            </tr>
                            <tr>
                            <td className="pr-2">SAT</td>
                            <td className="pl-2">11AM - 10PM</td>
                            </tr>
                            <tr>
                            <td className="pr-2">SUN</td>
                            <td className="pl-2">11AM - 10PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}