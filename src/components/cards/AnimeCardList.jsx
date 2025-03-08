import React from "react";
import { Row } from "react-bootstrap";
import AnimeCard from "./AnimeCard";

const AnimeCardList = () => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
        </Row>
    );
};

export default AnimeCardList;
