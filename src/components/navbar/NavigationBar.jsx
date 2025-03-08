import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import style from './NavigationBar.module.css'

const NavigationBar = () => {
    return (
        <Navbar sticky="top" data-bs-theme="dark" className={style.navbar}>
            <Container>
                <Navbar.Brand href="#home">AnimeHosting</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Главная</Nav.Link>
                    <Nav.Link href="#">Каталог</Nav.Link>
                    <Nav.Link href="#">Популярное</Nav.Link>
                    <Nav.Link href="#">Новинки</Nav.Link>
                </Nav>
                <Form className={`d-flex`}>
                    <Form.Control 
                        type="search"
                        placeholder="Найти"
                        className={`me-2 ${style.navbar__search}  border   `}


                    />
                    <Button variant="primary">Поиск</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
