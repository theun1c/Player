import React from "react";
import NavigationBar from "./components/navbar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimeCardList from "./components/cards/AnimeCardList";
import { Container } from "react-bootstrap";
import './index.css';

const App = () => {
    return (
        <div>
            <NavigationBar />
            <Container className="mt-4">
                <AnimeCardList />
            </Container>
        </div>
    );
};

export default App;