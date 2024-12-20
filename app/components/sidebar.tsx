import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";

export default function Sidebar() {
    return (
        <div style={{backgroundColor: '#c8c4b8', color: '#10233E'}} className="flex w-full flex-col justify-center sm:w-72 sm:mx-auto mx-0 px-1 h-screen">
            <div>

            </div>
            <div className="flex w-full flex-col">
                <h1 className="text-center text-3xl font-bold">YASIJANG</h1>
                <h1 className="text-center text-3xl pt-2 pb-4 font-bold">야시장</h1>
                <div className="border-y-2 my-6 py-6 text-center font-bold" style={{borderColor : '#10233e'}}>
                    <Link href="https://maps.app.goo.gl/iKTjvge2GLj52kqo6" className="w-full">
                    800 Van Ness Ave<br />San Francisco, CA 94109
                    </Link>
                </div>
                <Link href="#about" className="text-center my-6 font-semibold text-lg hover:text-xl">
                    ABOUT US
                </Link>
                <Link href="#menu" className="text-center mb-6 font-semibold text-lg hover:text-xl">
                    MENU
                </Link>
                <Link href="#happyhour" className="text-center mb-6 font-semibold text-lg hover:text-xl">
                    Happy Hour!
                </Link>
                <Link href="#gallery" className="text-center mb-6 font-semibold text-lg hover:text-xl">
                    GALLERY
                </Link>
                <a href="#contact" className="text-center mb-6 font-semibold text-lg hover:text-xl">
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
                    <table className="mx-auto mt-10 text-center">
                        <thead>
                            <tr style={{borderBottom: "1px gray dotted"}}>
                                <th className="pr-2">Days</th>
                                <th className="pl-2">Lunch</th>
                                <th className="pl-2">Dinner</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{borderBottom: "1px gray dotted"}}>
                                <td className="pr-2">MON-TUE</td>
                                <td className="pl-2">11AM-2:30PM</td>
                                <td className="pl-2">5PM-10:00PM</td>
                            </tr>
                            <tr style={{borderBottom: "1px gray dotted"}}>
                                <td className="pr-2">WED-THU</td>
                                <td className="pl-2">11AM-2:30PM</td>
                                <td className="pl-2">5PM-11:00PM</td>
                            </tr>
                            <tr style={{borderBottom: "1px gray dotted"}}>
                                <td className="pr-2">FRI</td>
                                <td className="pl-2">11AM-2:30PM</td>
                                <td className="pl-2">5PM-12:00AM</td>
                            </tr>
                            <tr style={{borderBottom: "1px gray dotted"}}>
                                <td className="pr-2">SAT</td>
                                <td className="pl-2">Closed</td>
                                <td className="pl-2">5PM-12:00AM</td>
                            </tr>
                            <tr style={{borderBottom: "1px gray dotted"}}>
                                <td className="pr-2">SUN</td>
                                <td className="pl-2">Closed</td>
                                <td className="pl-2">4PM-9PM</td>    
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