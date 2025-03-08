import React from "react";
import { Card, Button, Col} from "react-bootstrap";
import style from './AnimeCard.module.css'

const AnimeCard = () => {
    return (
        <Col>
            <Card data-bs-theme="dark" className={style.card}>
                <Card.Img
                    variant="top"
                    src="https://steamuserimages-a.akamaihd.net/ugc/52453354080448818/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
                />
                <Card.Body>
                    <Card.Title>Название аниме</Card.Title>
                    <Card.Text>
                        Краткое описание аниме
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Button variant="primary">Смотреть</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AnimeCard;
