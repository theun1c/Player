import React from "react";
import { Card, Button, Col} from "react-bootstrap";
import style from './AnimeCard.module.css'

const AnimeCard = () => {
    return (
        <Col>
            <Card data-bs-theme="dark" className={style.card}>
                <Card.Img
                    variant="top"
                    src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_669e4836d650e65cc3b79a07_669f5775ef9cc462933c2513/scale_1200"
                />
                <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Text>
                        Краткое описание
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
