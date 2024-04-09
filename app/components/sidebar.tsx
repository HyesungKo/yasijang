import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";

export default function Sidebar() {
    return (
        <div style={{backgroundColor: '#c8c4b8', color: '#10233e'}} className="flex w-full flex-col justify-center sm:w-72 sm:mx-auto mx-0 px-5 h-screen">
            <div>

            </div>
            <div className="flex w-full flex-col">
                <h1 className="text-center text-3xl">YASIJANG</h1>
                <h1 className="text-center text-3xl pt-2 pb-4">야시장</h1>
                <div className="border-y-2 my-6 py-6 text-center font-bold" style={{borderColor : '#10233e'}}>
                    <Link href="https://maps.app.goo.gl/iKTjvge2GLj52kqo6" className="w-full">
                    800 Van Ness Ave<br />San Francisco, CA 94109
                    </Link>
                </div>
                <Link href="#about" className="text-center my-6 font-semibold text-lg hover:text-xl">
                    ABOUT US
                </Link>
                <Link href="#menu" className="text-center mb-6 font-semibold text-lg">
                    MENU
                </Link>
                <Link href="#gallery" className="text-center mb-6 font-semibold text-lg">
                    GALLERY
                </Link>
                <a href="#contact" className="text-center mb-6 font-semibold text-lg">
                    CONTACT US
                </a>
                {/* <a className="hover:bg-gray-100 text-center mb-10 font-semibold text-lg">
                    ORDER ONLINE
                </a> */}
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
                                <td className="pr-2">MON - THU</td>
                                <td className="pl-2">11AM - 11PM</td>
                            </tr>
                            <tr>
                                <td className="pr-2">FRI</td>
                                <td className="pl-2">11AM - 1AM</td>
                            </tr>
                            <tr>
                                <td className="pr-2">LUNCH BREAK</td>
                                <td className="pl-2">2:30PM - 5PM</td>
                            </tr>
                            <tr>
                                <td className="pr-2">SAT</td>
                                <td className="pl-2">5PM - 1AM</td>
                            </tr>
                            <tr>
                                <td className="pr-2">SUN</td>
                                <td className="pl-2">Closed</td>
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