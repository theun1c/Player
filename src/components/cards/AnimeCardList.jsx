import React from "react";
import { Row } from "react-bootstrap";
import AnimeCard from "./AnimeCard";

const AnimeCardList = () => {
    return (
        <Row xs={2} sm={3} md={4} lg={5} className="g-4">
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
        </Row>
    );
};

export default AnimeCardList;
