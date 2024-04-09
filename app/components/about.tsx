import { GoMoon } from "react-icons/go";

export default function About() {
    return (
        <div className="relative container mx-auto lg:top-80 top-48 text-white">
            {/* <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
            >
                
            </motion.div> */}
                <h2 className="w-full text-center px-5 text-4xl font-black pb-3">
                    Welcome to Yasijang!
                </h2>
                <div className="flex justify-center text-3xl pb-3 text-yellow-300">
                    <GoMoon />
                    <GoMoon />
                </div>

                <p className="w-100 xl:mx-60 px-5 text-center text-lg font-semibold pb-3">
                    Yasijang is the best place to enjoy delicious Korean night food in San Francisco! Whether you are looking for a casual dinner with friends, a romantic date night, or a fun party with your family, we have something for everyone. Our menu features a variety of dishes that are perfect for night cravings. Don&apos;t forget to pair your meal with some refreshing drinks, such as soju and beer. Come and experience the authentic flavors of Korea at Yasijang, where every night is a celebration!
                </p>

                <div className="flex justify-center text-3xl pb-3 text-yellow-300">
                    <GoMoon />
                    <GoMoon />
                </div>
        </div>
    )
}