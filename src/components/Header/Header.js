import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { useHistory } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const history = useHistory();

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
                        user?.email &&
                        <Nav.Link className="text-center nav-btn" as={HashLink} to="/home">{user.displayName}</Nav.Link>
                    }{
                        (user?.email && window.innerWidth >= 776) &&
                        <>|</>
                    }

                    {
                        user?.email ?
                            <button className="text-center nav-btn nav-logout" onClick={() => logout(location.pathname + location.hash, history)} >Log Out</button>
                            :
                            <Nav.Link className="text-center nav-btn" as={HashLink} to="/login">Log In</Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;