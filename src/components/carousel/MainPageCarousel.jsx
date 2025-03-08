import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./MainPageCarousel.module.css";

const MainPageCarousel = () => {
    return (
        <Carousel className={style.carousel}>
            <Carousel.Item>
                <img
                    className={`d-block w-100 ${style.carousel__img} `}
                    src="https://sun9-79.userapi.com/fzUYb1f4MJ7fHHWxxDtrKJBCoheUOdpW6vUd9Q/ZSJBeKyfzJo.jpg"
                    alt=""
                />
                <Carousel.Caption className="d-flex flex-column justify-content-center align-items-start h-100">
                    <h3>Наименование</h3>
                    <p>Описание</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`d-block w-100 ${style.carousel__img}`}
                    src="https://sun9-79.userapi.com/fzUYb1f4MJ7fHHWxxDtrKJBCoheUOdpW6vUd9Q/ZSJBeKyfzJo.jpg"
                    alt=""
                />
                <Carousel.Caption className="d-flex flex-column justify-content-center align-items-start h-100">
                    <h3>Наименование</h3>
                    <p>Описание</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`d-block w-100 ${style.carousel__img}`}
                    src="https://sun9-79.userapi.com/fzUYb1f4MJ7fHHWxxDtrKJBCoheUOdpW6vUd9Q/ZSJBeKyfzJo.jpg"
                    alt=""
                />
                <Carousel.Caption className="d-flex flex-column justify-content-center align-items-start h-100">
                    <h3>Наименование</h3>
                    <p>Описание</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default MainPageCarousel;
