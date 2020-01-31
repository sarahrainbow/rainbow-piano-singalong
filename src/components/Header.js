import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import RainbowLogo from '../images/header.png';
import { Link } from 'react-scroll'

class Header extends Component {
    render() {
        return (
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand>Kirsty Mouse</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</   Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About</Link>
                            <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>Work</Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        // );
        )}
}

export default Header;