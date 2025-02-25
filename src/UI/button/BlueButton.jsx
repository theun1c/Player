import React from "react";

const BlueBotton = (props) => {
    return (
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl hover:bg-blue-700">
            {props.text}
        </button>
    );
}

export default BlueBotton;