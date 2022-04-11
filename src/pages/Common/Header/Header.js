import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ChevronDown, Globe } from 'react-feather';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky="top" className="py-4 nav-menu" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#">Ecosystem</Nav.Link>
                        <Nav.Link href="#">Buy</Nav.Link>
                        <Nav.Link href="#">What is AKO?</Nav.Link>
                        <Nav.Link href="#">Learn</Nav.Link>
                        <Nav.Link href="#">Community</Nav.Link>
                        <Nav.Link href="#">
                            <Globe width="28" height="28" />
                            <ChevronDown width="16" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
