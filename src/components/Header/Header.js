import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar fixed='top' bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/home"><h4>MediCare</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/home">Home</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/home#services">Services</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/doctors">Doctors</Nav.Link>

                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/aboutus">About Us</Nav.Link>

                    {
                        user?.email ?
                            <Nav.Link className="text-center nav-btn" as={HashLink} onclick={logOut} to="/home">Log Out</Nav.Link>
                            :
                            <Nav.Link className="text-center nav-btn" as={HashLink} to="/login">Log In</Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;