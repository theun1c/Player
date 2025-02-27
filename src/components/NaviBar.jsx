import React from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const NaviBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Animeshka</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" as={Link}>
                            Home
                        </NavLink>
                        <NavLink to="/profile" as={Link}>
                            Profile
                        </NavLink>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="me-2">
                            Sign In{" "}
                        </Button>
                        <Button variant="primary">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NaviBar;
