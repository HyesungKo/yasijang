export default function Contact() {
    return (
        <>
            <div id="contact" className="container mx-auto py-18">
                <h2 className="w-full text-center text-3xl font-black mb-5">Contact Us</h2>
                <div className="flex flex-row justify-center w-100 xl:mx-48">
                    <div className=" m-5 w-72 text-center">
                        <p className="mb-10">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment
                        </p>
                        <h3 className="text-xl my-1">
                            Phone: <a href="tel:415-775-5800">415-775-5800</a>
                        </h3>
                        <h3 className="text-xl my-1">
                            EMAIL: <a href="mailto:">abcdef@gmail.com</a>
                        </h3>

                    </div>
                    {/* <div className="flex-1">
                        dfasd
                    </div> */}
                </div>
            </div>
            <div className="container mx-auto pt-16">
                <h2 className="w-full text-center text-3xl font-black pb-5">Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.296995735987!2d-122.42319122368876!3d37.78307901168089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858097107352ad%3A0xe0e45cb298687dfa!2s800%20Van%20Ness%20Ave%2C%20San%20Francisco%2C%20CA%2094109!5e0!3m2!1sen!2sus!4v1701717540537!5m2!1sen!2sus" style={{border: 0, width: "100%", height: 350}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}