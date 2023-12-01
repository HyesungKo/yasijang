import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="flex w-full flex-col sm:w-72 sm:mx-auto mx-0 pt-32 px-5 h-screen">
            <h1 className="text-center text-3xl font-black">YA-SI-JANG</h1>
            <h1 className="text-center text-3xl font-black pt-2 pb-4">야시장</h1>
            <div className="border-y-2 my-6 py-6 border-black">
                <p className="text-center font-bold">
                800 Van Ness Ave<br />San Francisco, CA 94109
                </p>
            </div>
            <Link href="#about" className="text-center my-6 font-semibold text-lg">ABOUT US</Link>
            <Link href="#menu" className="text-center mb-6 font-semibold text-lg">MENU</Link>
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
    )
}