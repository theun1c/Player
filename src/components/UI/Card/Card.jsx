import React, { useState } from "react";

const Card = ({ item }) => {
    console.log(item);
    return (
        <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden w-40 flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <img
                src={item.cardImgUrl}
                alt={item.title}
                className=" w-full h-40 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-white">{item.title}</h2>
                <h3 className="text-xl font-bold mb-2 text-white">{item.subtitle}</h3>
                <p className="text-gray-300">{item.description}</p>
            </div>
        </div>
    );
};

export default Card;
