import React, { useState } from "react";
import Card from "../Card/Card";

const CardsList = ({cardItems}) => {
    return (
        <div className="flex flex-wrap gap-4 overflow-visible w-full">
            {cardItems.map(item => (
                <Card item = {item}/>
            ))}
        </div>
    );
}

export default CardsList;