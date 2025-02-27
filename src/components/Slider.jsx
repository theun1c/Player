import React from "react";
import { Carousel } from "react-bootstrap";
import animeBanner from '../assets/anime_banner_1.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{'height': '876px'}}>
                    <img src={animeBanner} className="d-block w-100" alt="anime_carousel"/>
                    <Carousel.Caption>
                        <h3>Anime test slider</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum? Mollitia, corporis.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '876px'}}>
                    <img src={animeBanner} className="d-block w-100" alt="anime_carousel"/>
                    <Carousel.Caption>
                        <h3>Anime test slider</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum? Mollitia, corporis.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '876px'}}>
                    <img src={animeBanner} className="d-block w-100" alt="anime_carousel"/>
                    <Carousel.Caption>
                        <h3>Anime test slider</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum? Mollitia, corporis.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;