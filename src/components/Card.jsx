import React from "react";
import "../styles/Card.css";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.item.image} alt={props.item.name} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <div>
                <button>Перейти</button>
            </div>
        </div>
    );
};

export default Card;
