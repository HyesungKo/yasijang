"use client"

import React, { useState } from "react";
import { Miltonian } from "next/font/google";

const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "TAPAS" },
    { id: 3, name: "MAIN" },
    { id: 4, name: "TANG" },
  ];
  
  const images = [
    { id: 1, src: "img/tapa1.jpg", category: "TAPAS", name: "GRILLED ONIGIRI" },
    { id: 2, src: "img/tapa2.jpg", category: "TAPAS", name: "SPICY TUNA TOWER" },
    // { id: 3, src: "img/tapa3.jpg", category: "TAPAS", name: "CREAMY CROQUET" },
    { id: 4, src: "img/tapa4.jpg", category: "TAPAS", name: "AL BOB" },
    { id: 5, src: "img/tapa5.jpg", category: "TAPAS", name: "GARLIC EDAMAME" },
    { id: 6, src: "img/tapa6.jpg", category: "TAPAS", name: "CORN CHEESE" },
    { id: 7, src: "img/tapa7.jpg", category: "TAPAS", name: "TAKO WASABI" },
    { id: 8, src: "img/tapa8.jpg", category: "TAPAS", name: "KIMCHI JJIGAE - MUG" },
    // { id: 9, src: "img/tapa9.jpg", category: "TAPAS", name: "SPICY TOFU" },
    { id: 10, src: "img/main1.jpg", category: "MAIN", name: "SUYUK" },
    { id: 11, src: "img/main2.jpg", category: "MAIN", name: "RAINBOW NIGIRI - 4PCS" },
    { id: 12, src: "img/main3.jpg", category: "MAIN", name: "SASHIMI - 6PCS" },
    // { id: 13, src: "img/main4.jpg", category: "MAIN", name: "" },
    { id: 14, src: "img/main5.jpg", category: "MAIN", name: "KIMCHI FRIED RICE" },
    { id: 15, src: "img/main6.jpg", category: "MAIN", name: "STAIRWAY TO HEAVEN" },
    { id: 16, src: "img/tang1.jpg", category: "TANG", name: "BOODAE JJIGAE" },
    { id: 17, src: "img/tang2.jpg", category: "TANG", name: "ODEN TANG" },
    { id: 18, src: "img/tang3.jpg", category: "TANG", name: "TTEOK BOKKI JEONGOL" },
    { id: 19, src: "img/tang4.jpg", category: "TANG", name: "KIMCHI JJIGAE - POT" },
  ];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredImages =
    selectedCategory === "All"
        ? images
        : images.filter((image) => image.category === selectedCategory);

    return (
        <>
            <div id="gallery" className="container mx-auto">
                <h2 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold">Gallery</h2>
            </div>
            <p className="w-100 xl:mx-60 mx-5 text-center">
            {/* On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue */}
            </p>
            <div className="container mx-auto px-4 py-4">
                <div className="mt-3 mb-8 mx-auto flex justify-center">
                    {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.name)}

                        className="text-xl flex font-medium border-solid border-2 rounded mx-1 h-12"
                        style={selectedCategory === category.name ? {backgroundColor: '#10233e', color: 'white'}: {}}
                    >
                        <h3 className="p-2 flex">
                            {category.name}
                        </h3>
                        
                    </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {filteredImages.map((image) => (
                    <div key={image.id} className="relative">
                        <img
                        src={image.src}
                        alt={image.category}
                        className="w-full h-64 object-cover rounded-md"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2 rounded-b-md">
                        <p className="text-sm font-semibold text-white text-center">
                            {image.name}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}