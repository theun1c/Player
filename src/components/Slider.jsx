import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import animeBanner from '../assets/anime_banner_1.jpg';

const Slider = () => {
    const [sliderItems, setSliderItems] = useState([]);

    const fetchSliderItems = async () => {
        try {
            const response = await fetch('https://localhost:7140/api/Slider');
            if(!response.ok){
                throw new Error('network response was not ok');
            }
            const data = await response.json();
            setSliderItems(data);
        } catch(error){
            console.error('error fetching slider items', error);
        }
    }

    useEffect(() => {
        fetchSliderItems();
    }, []);

    return (
        <div>
            <Carousel>
                { sliderItems.map((item) => (
                    <Carousel.Item style={{'height': '876px'}}>
                    <img src={animeBanner} className="d-block w-100" alt="anime_carousel"/>
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;