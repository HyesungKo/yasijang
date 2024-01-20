export default function Contact() {
    return (
        <>
            <div id="contact" className="container mx-auto py-18">
                <h2 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold">Contact Us</h2>
                <p className="w-100 xl:mx-60 mx-5 text-center">
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue
                </p>
                <div className="flex flex-row justify-center w-100">
                    <div id="form-container" className="lg:p-5 font-Encode-Sans">
                        <div>
                            <form method="POST" action="">
                                <div className="mx-auto rounded-xl max-w-3xl">
                                    <div className="flex flex-col label">
                                        <div className="flex flex-col md:flex-row">
                                            <label htmlFor="name" className="block border-b py-1 m-3">
                                                <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Name*"
                                                className="
                                                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker uppercase font-bold text-xl"
                                                />
                                            </label>

                                            <label htmlFor="email" className="block border-b py-1 m-3">
                                                <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Email*"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                required
                                                className="
                                                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-xl"
                                                />
                                            </label>
                                        </div>
                                        <div className="flex flex-col md:flex-row">
                                            <label htmlFor="phone" className="block border-b py-1 m-3">
                                                <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone*"
                                                required
                                                className="
                                                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-xl"
                                                />
                                            </label>
                                            <label htmlFor="company" className="block border-b py-1 m-3">
                                                <input
                                                id="company"
                                                name="company"
                                                type="text"
                                                placeholder="Company"
                                                required
                                                className="
                                                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-xl"
                                                />
                                            </label>
                                        </div>

                                        <label className="block border-b m-3">
                                            <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required={false}
                                            placeholder="Tell us a little more about it!*"
                                            className="
                                            appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-xl font-bold
                                            "
                                            ></textarea>
                                        </label>
                                        <div className="text-center mx-3">
                                            <button
                                            type="submit"
                                            className="uppercase text-sm font-bold tracking-wide bg-yellow-300 text-balck hover:bg-yellow-100 hover:text-neutral-800 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                            >
                                            Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-16">
                <h2 className="w-full text-center text-3xl font-black pb-5">Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.296995735987!2d-122.42319122368876!3d37.78307901168089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858097107352ad%3A0xe0e45cb298687dfa!2s800%20Van%20Ness%20Ave%2C%20San%20Francisco%2C%20CA%2094109!5e0!3m2!1sen!2sus!4v1701717540537!5m2!1sen!2sus" style={{border: 0, width: "100%", height: 350}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}