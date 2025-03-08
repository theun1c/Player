import React from "react";
import NavigationBar from "./components/navbar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimeCardList from "./components/cards/AnimeCardList";
import MainPageCarousel from "./components/carousel/MainPageCarousel";
import { Container } from "react-bootstrap";
import './index.css';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <Container className="mt-4">
                <MainPageCarousel></MainPageCarousel>
            </Container>
            <Container className="mt-4">
                <h3 style={{color: 'white'}}>Новые эпизоды</h3>
                <AnimeCardList></AnimeCardList>
            </Container>
        </div>
    );
};

export default App;