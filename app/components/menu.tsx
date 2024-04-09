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
                name: "Bulgogi Taco",
                price: 8,
                desc: "Taco made with bulgogi (2pcs)"
            },
            {
                name: "Cheesy Mandu",
                price: 8,
                desc: "Cheese topping for pan-seared beef dumplings (5pcs)"
            },
            {
                name: "Corn Dog",
                price: 6,
                desc: "Sausage buns with buttery bread and cheese"
            },
            {
                name: "Corn Cheese",
                price: 9,
                desc: "Creamy sweet corn with cheese on Hot plate"
            },
            {
                name: "Dak Chicken Slider",
                price: 8,
                desc: "Chicken sandwich on a small brioche bun with savory Dak Chicken sauce (2pcs)"
            },
            {
                name: "Grilled Onigiri",
                price: 7,
                desc: "Grilled rice balls with Chamchi – Albacore - mayo salad inside"
            },
            {
                name: "Garlic Edamame",
                price: 7,
                desc: "Pan Sauted garlic and Edamame"
            },
            {
                name: "Garlic fry",
                price: 7,
                desc: "Roasted garlic on top of fried potatoes"
            },
            {
                name: "Mini Jeon",
                price: 8,
                desc: "Korean-style pancakes with assorted vegetables and squid and shrimp (2pcs)"
            },
            {
                name: "Rainbow Nigiri",
                price: 13,
                desc: "Tuna, Salmon, Hamachi and Daily fresh (4pcs)"
            },
            {
                name: "Suyook(aka Bossam)",
                price: 13,
                desc: "Pork belly boiled for 2 hours and served with radish kimchi and ssamjang (5pcs)"
            },
            {
                name: "Kimbap",
                price: 8,
                desc: [
                    "Seasoned rice with various vegetables, and choice of meat",
                    "+$2 Bulgogi   +$2 Albacore Salad"
                ]
            },
            {
                name: "Creamy Croquet",
                price: 6,
                desc: "Creamy potatoes, breaded and fried (2pcs)"
            },
            {
                name: "Spicy Tuna Tower",
                price: 10,
                desc: "Spicy tuna piled high on an Kappa maki base"
            },
            {
                name: "Sashimi",
                price: 16,
                desc: "6 slices of fresh fish"
            },
            {
                name: "Sotteok Sotteok",
                price: 6,
                desc: "Sausage and rice cakes skewered, deep-fried, and topped with hot sauce"
            },
            {
                name: "Spam Roulette",
                price: 13,
                desc: "One of the six spam MUSUBIs contained wasabi. Who would eat it? (6pcs)"
            },
            {
                name: "Tako Wasabi",
                price: 12,
                desc: "Serve tacos wasabi and fried rice papers"
            },
        ],
        [
            {
                name: "Stairway to Heaven",
                price: 0,
                desc: [
                    "YASIAJANG's signature sushi and sashimi served on a 12-step staircase-shaped plate",
                    "$65 (For 1-2) 12pcs Nigiri, 8pcs Sashimi and Spicy Tuna Tower",
                    "$89 (For 2-3)  16pcs Nigiri, 8pcs Sashimi, Futo Maki and Tako Wasabi",
                    "$150 (For 3-4) 24pcs Nigiri, 12pcs Sashimi, Hwe Muchim"
                ]
            },
            {
                name: "Bibimbap",
                price: 18,
                desc: [
                    "Rice topped with sauteed vegetables, fried egg",
                    "+$4 Bulgogi"
                ]
            },
            {
                name: "BulJokbal",
                price: 19,
                desc: "Bone-in pork feet stir-fried with Korean spicy seasoning over high heat."
            },
            {
                name: "Dak Fried Chicken",
                price: 18,
                desc: [
                    "Korean-style twice-fried crispy chicken (8pcs)",
                    "+$2 Sweet & Spicy   +$2 Soy Garlic"
                ]
            },
            {
                name: "Fried Basket",
                price: 24,
                desc: "Onion Rings, Garlic Fries, and 4 pcs of Fried Chicken"
            },
            {
                name: "Hwe Moochim",
                price: 22,
                desc: "Thinly sliced sashimi tossed with Korean-style gochujang seasoning and vegetables"
            },
            {
                name: "Kimchi Fried Rice",
                price: 14,
                desc: "Kimchi and Spam fried rice, served with fried egg on top"
            },
            {
                name: "Pork BangBang",
                price: 18,
                desc: "Stir-fry the pork with the bean sprouts"
            },
        ],
        [
            {
                name: "KRAKEN",
                price: 30,
                desc: "Spicy broth with an assortment of seafood and whole squid"
            },
            {
                name: "Boodae Jjigae",
                price: 30,
                desc: "Army Stew... spicy broth with ham, sausage, rice cakes, and tofu"
            },
            {
                name: "Hong Hop Tang",
                price: 17,
                desc: "Hot pot with mussels in a clear broth"
            },
            {
                name: "Kimchi jjigae",
                price: ["Mug", 10, "Pot", 32],
                desc: "Pork in a kimchi-based broth, a stewed dish made with a hangover"
            },
            {
                name: "Nagasaki Chanpon",
                price: 22,
                desc: "Nagasaki style white broth Chanpon"
            },
            {
                name: "Odeng Tang",
                price: ["Small", 20, "Large", 36],
                desc: "Hot pot with assorted fish cakes in a clear broth"
            },
            {
                name: "Spicy Tofu Jeongol",
                price: 18,
                desc: [
                    "Nagasaki style white broth Chanpon",
                    "+$5 Pork   +$5 Bulgogi   +$5 Seafood"
                ]
            },
            {
                name: "Tteok bokki Jeongol",
                price: 26,
                desc: "Thin rice cakes simmered with fish cakes, green onions, eggs, Gochujang and broth"
            },
        ]
    ]

    const [menu, setMenu] = useState(0);

    function handleMenu(cur: number) {
        setMenu(cur);
    } 
    return (
        <div id="menu" className="container mx-auto">
            <h2 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold">Menu</h2>
            <p className="w-100 xl:mx-60 mx-5 text-center">
              {/* On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue */}
            </p>
            <div className="my-12 mx-auto flex justify-center">
                <button
                    className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                    style={menu == 0? {backgroundColor: '#10233e', color: 'white'}: {}}
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
                    style={menu == 1? {backgroundColor: '#10233e', color: 'white'}: {}}
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
                    style={menu == 2? {backgroundColor: '#10233e', color: 'white'}: {}}
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
                                        {typeof item.price != 'number'?
                                            item.price.map((price, index) =>
                                                typeof price == 'number'?
                                                    <div key={index+10} className={index !== 0? "ml-1":"ml-0"}>
                                                        ${price}
                                                    </div>
                                                    :
                                                    <div key={index+10} className={index !== 0? "ml-1":"ml-0"} style={{fontWeight: "500"}}>
                                                        {price}
                                                    </div>
                                                
                                            )   
                                        :
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