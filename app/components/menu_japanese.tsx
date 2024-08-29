"use client" 

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BiSushi } from "react-icons/bi";
import { IoIosLeaf } from "react-icons/io";
import { GiSushis } from "react-icons/gi";


export default function MenuSushi() {

    let menuListSushi = [
        [
            {
                name: "$1,000",
                desc: "Spicy tuna, avocado, and shrimp tempura, topped with tuna and crab meat, green onion, and tobiko",
                price: 19
            },
            {
                name: "49ER's",
                desc: "Avocado, tobiko, and shiso, topped with salmon and sliced lemon",
                price: 18
            },
            {
                name: "Cherry Blossom",
                desc: "Deep fried salmon and hamachi, sliced tuna on top with tobiko",
                price: 18
            },
            {
                name: "Dragon",
                desc: "Shrimp tempura and cucumber, topped with bbq eel and avocado",
                price: 19
            },
            {
                name: "Dragon Ball",
                desc: "Salmon salad and green onions, cut into 7 pieces and deep fried",
                price: 19
            },
            {
                name: "Dynamite",
                desc: "Spicy tuna and jalapenos deep fried, topped with 3 different sauces, tobiko, and green onion",
                price: 18
            },
            {
                name: "Double Hamachi",
                desc: "Spicy yellow tail and cucumber, topped with hamachi and avocado",
                price: 19
            },
            {
                name: "Double Double",
                desc: "Shrimp tempura, crab meat and cucumber, topped with ebi and avocado",
                price: 18
            },
            {
                name: "Giant",
                desc: "Shrimp tempura, spicy tuna and SS crab topped with bbq eel and avocado, green onion, and tobiko",
                price: 22
            },
            {
                name: "Lion King",
                desc: "Crab meat and avocado, topped with salmon, covered with cream sauce and baked in oven",
                price: 18
            },
            {
                name: "Rainbow",
                desc: "Crabmeat and avocado, topped with 4 different fish",
                price: 18
            },
            {
                name: "Spider",
                desc: "Deep fried SS crab, avocado, cucumber, crab meat, tobiko, and kaiware",
                price: 19
            },
            {
                name: "Van Ness",
                desc: "Shrimp tempura and cucumber, topped with salmon and sliced lemon",
                price: 19
            },
            {
                name: "Volcano",
                desc: "Crab meat, avocado, and crunch, topped with spicy tuna and unagi",
                price: 19
            },
        ],
        [
            {
                name: "Spicy Crunch Cali",
                desc: "",
                price: 11
            },
            {
                name: "Tempura Roll",
                desc: "",
                price: 11
            },
            {
                name: "TEKKA / NEGIHAMA",
                desc: "",
                price: 8
            },
            {
                name: "California",
                desc: "",
                price: 7.5
            },
            {
                name: "Spicy Tuna",
                desc: "",
                price: 8.5
            },
            {
                name: "Alaska",
                desc: "",
                price: 11
            },
            {
                name: "Philly",
                desc: "",
                price: 12
            },
            {
                name: "Boston",
                desc: "",
                price: 12
            },
            {
                name: "Rock'N Roll",
                desc: "",
                price: 12
            },
        ],
        [
            {
                name: "Veggie Tempura Roll",
                desc: "",
                price: 14
            },
            {
                name: "Creamy Crunch",
                desc: "",
                price: 18
            },
            {
                name: "Futo Maki",
                desc: "",
                price: 11
            },
            {
                name: "Green Caterpillar",
                desc: "",
                price: 17
            },
            {
                name: "Avocado / Kappa / Oshinko / Kanpyo / Shitake",
                desc: "",
                price: 7
            },
        ],
        [
            {
                name: "Albacore",
                desc: "white tuna",
                price: "$ 7 / 14"
            },
            {
                name: "Hamachi",
                desc: "yellow tail",
                price: "$ 8 / 15"
            },
            {
                name: "Kani",
                desc: "crab meat",
                price: "$ 9 / NA"
            },
            {
                name: "Maguro",
                desc: "tuna",
                price: "$ 8 / 15"
            },
            {
                name: "Saba",
                desc: "mackerel",
                price: "$ 6 / 12"
            },
            {
                name: "Sake",
                desc: "salmon",
                price: "$ 7 / 14"
            },
            {
                name: "Tamago",
                desc: "egg cake",
                price: "$ 5 / 10"
            },
            {
                name: "Inari",
                desc: "tofu skin",
                price: "$ 5 / NA"
            },
            {
                name: "Tobiko",
                desc: "flying fish roe",
                price: "$ 7 / 14"
            },
            {
                name: "Unigi",
                desc: "bbq eel",
                price: "$ 8 / 15"
            },
            {
                name: "Toro",
                desc: "fatty tuna",
                price: "$ 18 / 30"
            },
        ]
    ]

    const [menu, setMenu] = useState(0);

    function handleMenu(cur: number) {
        setMenu(cur);
    }

    return (
        <>
            <h2 className="text-center lg:text-5xl text-5xl mt-32 pb-6 font-bold" style={{color: "#10233e"}}>Rolls & Sushi</h2>
            <div className="mb-8 mx-auto flex flex-col sm:flex-row sm:justify-center">
                <div className="mb-4 flex flex-row justify-center">
                    <button
                        className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                        style={menu == 0? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                        onClick={() => handleMenu(0)}
                    >
                        <div className="px-2 py-3">
                            <FaStar />
                        </div>
                        <h3 className="py-2 pr-2 flex">
                            <div>
                            SPECIAL
                            </div>
                            <div className="lg:block hidden">
                            &nbsp;ROLLS
                            </div>
                        </h3>
                    </button>
                    <button
                        className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                        style={menu == 1? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                        onClick={() => handleMenu(1)}
                    >
                        <div className="px-2 py-3">
                            <BiSushi />
                        </div>
                        <h3 className="py-2 pr-2 flex">
                            <div>
                                BASIC
                            </div>
                            <div className="lg:block hidden">
                                &nbsp;ROLLS
                            </div>
                            
                        </h3>
                    </button>
                </div>
                <div className="flex flex-row justify-center">
                    <button
                        className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                        style={menu == 2? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                        onClick={() => handleMenu(2)}
                    >
                        <div className="px-2 py-3">
                            <IoIosLeaf />
                        </div>
                        <h3 className="py-2 pr-2 flex">
                            <div>
                                VEGGIE
                            </div>
                            <div className="lg:block hidden">
                            &nbsp;ROLLS
                            </div>
                        </h3>
                    </button>
                    <button
                        className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                        style={menu == 3? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                        onClick={() => handleMenu(3)}
                    >
                        <div className="px-2 py-3">
                            <GiSushis />
                        </div>
                        <h3 className="py-2 pr-2 flex">
                            <div>
                                NIGIRI & SASHIMI
                            </div>
                        </h3>
                    </button>
                </div>
            </div>
            <div className="xl:mx-52 mx-5 font-sans">
                {
                    menuListSushi[menu].map((item, index) =>
                        <div key={index+1000} className="my-2">
                            {
                                menu == 3 && index == 0 && 
                                <h3 className="text-right font-semibold">
                                    2PCS NIGIRI / 4PCS SASHIMI
                                </h3>
                            }
                            <div className="flex">
                                <h4 className="lg:text-xl text-lg font-bold uppercase">
                                    {item.name}
                                </h4>
                                <div className="flex flex-auto flex-col px-1">
                                    <div className="flex-1 border-b border-black"></div>
                                    <div className="flex-1"></div>
                                </div>
                                    <div className="text-lg flex font-semibold">
                                    {
                                        typeof item.price == "number"?
                                        `$${item.price}`
                                        :
                                        item.price
                                    }
                                    </div>
                            </div>
                            <p key={index+100} className="text-gray-600 -mt-1 font-medium">
                                {item.desc}
                            </p>
                        </div>
                    )
                }
                <p className="text-sm mt-4 text-gray-500 font-bold">* Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
            </div>
        </>
    )
}