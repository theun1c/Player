import React from "react";
import "../styles/Card.css";
import Card from "./Card";

const CardList = ({ items }) => {
    return (
        <div>
            {items.map((item) => {
                <Card item={item}/>
            })}
        </div>
        
    );
};

export default CardList;
