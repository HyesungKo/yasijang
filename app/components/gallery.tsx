"use client"

import React, { useState } from "react";
import { PiBowlFood } from "react-icons/pi";
import { LuSoup } from "react-icons/lu";
import { FaCookieBite } from "react-icons/fa";


const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "TAPAS" },
    { id: 3, name: "MAIN" },
    { id: 4, name: "TANG" },
  ];
  
  const images = [
    { id: 1, src: "sample.jpg", category: "TAPAS" },
    { id: 2, src: "sample.jpg", category: "TAPAS" },
    { id: 3, src: "sample.jpg", category: "TAPAS" },
    { id: 4, src: "sample.jpg", category: "MAIN" },
    { id: 5, src: "sample.jpg", category: "MAIN" },
    { id: 6, src: "sample.jpg", category: "TANG" },
    { id: 7, src: "sample.jpg", category: "TANG" },
    { id: 8, src: "sample.jpg", category: "TANG" },
    { id: 9, src: "sample.jpg", category: "TAPAS" },
    { id: 10, src: "sample.jpg", category: "TAPAS" },
    { id: 11, src: "sample.jpg", category: "TAPAS" },
    { id: 12, src: "sample.jpg", category: "MAIN" },
    { id: 13, src: "sample.jpg", category: "MAIN" },
    { id: 14, src: "sample.jpg", category: "TANG" },
    { id: 15, src: "sample.jpg", category: "TANG" },
    { id: 16, src: "sample.jpg", category: "TANG" },
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
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue
            </p>
            <div className="container mx-auto px-4 py-4">
                <div className="mt-3 mb-8 mx-auto flex justify-center">
                    {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.name)}

                        className="text-xl flex font-medium border-solid border-2 border-orange-700 rounded mx-1 h-12"
                        style={selectedCategory === category.name ? {backgroundColor: 'rgb(194 85 80 / var(--tw-border-opacity))'}: {}}
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
                        <p className="text-lg font-semibold text-white text-center">
                            {image.category}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}