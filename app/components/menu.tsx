"use client"

import { useState } from "react";
import { PiBowlFood } from "react-icons/pi";
import { LuSoup } from "react-icons/lu";
import { FaCookieBite } from "react-icons/fa";

export default function Menu() {
    let menuList = [
        [
            {
                name: "Al Bop",
                price: 9,
                desc: "Stir-fried kimchi, daikon radish, cucumber, pickles, tobiko, and quail eggs over rice in a stone pot"
            },
            {
                name: "Bulgogi Nacho",
                price: 11,
                desc: "A plate of tortilla chips, fresh pico de gallo, nacho cheese sauce and bulgogi"
            },
            {
                name: "Bulgogi Taco",
                price: 9,
                desc: "Taco made with bulgogi (2pcs)"
            },
            {
                name: "Bossam",
                price: 14,
                desc: "Boiled pork belly served with radish kimchi and ssamjang (5pcs)"
            },
            {
                name: "Corn Cheese",
                price: 10,
                desc: "Creamy sweet corn with cheese on Hot plate"
            },
            {
                name: "Creamy Croquet",
                price: 7,
                desc: "Creamy potatoes, breaded and fried (2pcs)"
            },
            {
                name: "Garlic Edamame",
                price: 8,
                desc: "Pan Sauted garlic and Edamame"
            },
            {
                name: "Garlic fry",
                price: 9,
                desc: "Roasted garlic on top of fried potatoes"
            },
            {
                name: "Hwa Chae",
                price: 13,
                desc: "K-style of fruit punch made with watermelon, cruit cocktail and sweet soda"
            },
            {
                name: "Mini Jeon",
                price: 10,
                desc: "Korean-style pancakes with assorted vegetables and squid and shrimp (2pcs)"
            },
            {
                name: "Mini Kimchi Stew",
                price: 11,
                desc: "Pork in a kimchi based broth, a stewed dish served in mug"
            },
            {
                name: "Rainbow Nigiri",
                price: 14,
                desc: "Tuna, Salmon, Hamachi and Daily fresh (4pcs)"
            },
            {
                name: "Spicy Tuna Tower",
                price: 12,
                desc: "Spicy tuna piled high on an Kappa(cucumber) maki base"
            },
            {
                name: "Sashimi",
                price: 17,
                desc: "6 slices of fresh fish"
            },
            {
                name: "Sotteok Sotteok",
                price: 6,
                desc: "Sausage and rice cakes skewered, deep-fried, and topped with sauce(1pcs)"
            },
            {
                name: "Spoonable Potato",
                price: 11,
                desc: "Cheesy hash brown casserole, mixed vegetables with chees on top"
            },
            {
                name: "Spam Roulette",
                price: 10,
                desc: "There is a wasabi trap in one of the six small mini musubis. Who will eat it?"
            },
            {
                name: "Tako Wasabi",
                price: 12,
                desc: "Wasabi seasoned octopus served with fried rice paper"
            },
            {
                name: "Truffle Bosot Fry",
                price: 9,
                desc: "Deep fried enoki mushrooms with truffle salt"
            }
        ],
        [
            {
                name: "Bibimbap",
                price: 19,
                desc: [
                    "Various vegetables over rice, fried egg, and gochujang",
                    "+$4 Bulgogi  +$3 Tofu"
                ]
            },
            {
                name: "BulJokbal",
                price: 20,
                desc: "Braised bone-in pork feet with house made spicy sauce"
            },
            {
                name: "Dooboo Jorim",
                price: 19,
                desc: [
                    "Braised tofu in a spicy & savory sauce",
                    "+$4 Bulgogi  +$4 Spam"
                ]
            },
            {
                name: "Fried Basket",
                price: 24,
                desc: "Onion Rings, Garlic Fries, and 4 pcs of Fried Chicken"
            },
            {
                name: "K-Fried Chicken",
                price: 19,
                desc: [
                    "K-style twice-fried crispy chicken (8pcs)",
                    "+$2 Sweet & Spicy   +$2 Soy Garlic"
                ]
            },
            {
                name: "Kimchi Fried Rice",
                price: 14,
                desc: "Primarily made with kimchi and rice, fried egg on top"
            },
            {
                name: "Pork BangBang",
                price: 19,
                desc: "Stir-fry the pork with the bean sprouts"
            },
            {
                name: "Jeyuk Bokkeum",
                price: 18,
                desc: "Thin sliced pork meat marinated in a spicy, sweet and savory gochujang"
            },
        ],
        [
            {
                name: "Boodaejjigae",
                price: 31,
                desc: [
                    "Army Stew... spicy broth with ham, sausage, rice cakes, and tofu",
                    "+$3 Cheese"
                ] 
            },
            {
                name: "HongHop Tang",
                price: 17,
                desc: "Boiled mussels in a clear broth"
            },
            {
                name: "KRAKEN",
                price: 32,
                desc: "Spicy broth with an assortment of seafood, whole squid, and noodles"
            },
            {
                name: "Nagasaki Champon",
                price: 25,
                desc: "Nagasaki style spicy white broth with seafood and noodles"
            },
            {
                name: "Odeng Tang",
                price: 20,
                desc: "Various types of odeng simmered in a light savory broth"
            },
            {
                name: "Juksuk Tteok bokki",
                price: 27,
                desc: [
                    "Thin rice cakes simmered with fish cakes, deep fried mandu, green onions, a boiled egg, Gochujang broth",
                    "+$3 Cheese"
                ], 
            },
        ],
        [
            {
                name: "Stairway to Heaven",
                price: 0,
                desc: [
                    "YASIAJANG's signature sushi & sashimi served on a 12-step staircase-shaped plate",
                    "$69 (For 1-2) 12pcs Nigiri, 8pcs Sashimi and Spicy Tuna Tower",
                    "$95 (For 2-3) 16pcs Nigiri, 8pcs Sashimi, Futo Maki and Tako Wasabi",
                    "$160 (For 3-4) 24pcs Nigiri, 12pcs Sashimi, HWE MUCHIM"
                ]
            },
            {
                name: "Kimbap",
                price: 9,
                desc: [
                    "Seasoned rice with various vegetables, and choice of meat",
                    "+$2 Bulgogi   +$2 Albacore Salad"
                ]
            },
            {
                name: "K-Poke",
                price: 22,
                desc: "Thinly sliced sashimi tossed with K-style gochujang seasoning and vegetables"
            },
        ]
    ]

    const [menu, setMenu] = useState(0);

    function handleMenu(cur: number) {
        setMenu(cur);
    } 
    return (
        <div id="menu" className="container mx-auto" style={{backgroundColor: "#c8c4b8"}}>
            <h2 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold" style={{color: "#10233e"}}>Menu</h2>
            <div className="mb-8 mx-auto flex justify-center">
                <button
                    className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                    style={menu == 0? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                    onClick={() => handleMenu(0)}
                >
                    <div className="px-2 py-3">
                        <FaCookieBite />
                    </div>
                    <h3 className="py-2 pr-2 flex">
                        <div>
                        TAPAS
                        </div>
                        <div className="lg:block hidden">
                        &nbsp;- Small Bite
                        </div>
                    </h3>
                </button>
                <button
                    className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                    style={menu == 1? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                    onClick={() => handleMenu(1)}
                >
                    <div className="px-2 py-3">
                        <PiBowlFood />
                    </div>
                    <h3 className="py-2 pr-2 flex">
                        <div>
                            MAIN
                        </div>
                        <div className="lg:block hidden">
                            &nbsp;DISHES
                        </div>
                         
                    </h3>
                </button>
                <button
                    className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                    style={menu == 2? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                    onClick={() => handleMenu(2)}
                >
                    <div className="px-2 py-3">
                        <LuSoup />
                    </div>
                    <h3 className="py-2 pr-2 flex">
                        <div>
                            TANG
                        </div>
                        <div className="lg:block hidden">
                        &nbsp;- Soup
                        </div>
                    </h3>
                </button>
                <button
                    className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                    style={menu == 3? {backgroundColor: '#10233e', color: 'white', borderColor: '#10233e'}: {borderColor: '#10233e'}}
                    onClick={() => handleMenu(3)}
                >
                    <div className="pl-2 py-3">
                    </div>
                    <h3 className="py-2 pr-2 flex">
                        <div>
                            YASIJANG
                        </div>
                        <div className="lg:block hidden">
                        &nbsp;SPECIAL
                        </div>
                    </h3>
                </button>
            </div>
            <div className="xl:mx-52 mx-5 font-sans">
                {
                    menuList[menu].map((item, index) => 
                        <div key={index+1000} className="my-2">
                            <div className="flex">
                                <h4 className="lg:text-xl text-lg font-bold uppercase">
                                    {item.name}
                                </h4>
                                <div className="flex flex-auto flex-col px-1">
                                    <div className="flex-1 border-b border-black"></div>
                                    <div className="flex-1"></div>
                                </div>
                                {
                                    item.price != 0 &&
                                    <div className="text-lg flex">
                                        {
                                            `$${item.price}`
                                        }
                                    </div>
                                }
                            </div>
                            {typeof item.desc != 'string'?
                                item.desc.map((desc, index) =>
                                    <p key={index+100} className="text-gray-700 font-medium">
                                        {desc}
                                    </p>
                                )
                            :
                                <p key={index+100} className="text-gray-600 -mt-1 font-medium">
                                    {item.desc}
                                </p>
                            }
                        </div>
                    )
                }
            </div>
          </div>
    )
}