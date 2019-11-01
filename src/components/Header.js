import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import RainbowLogo from '../images/header.png';
import { Link } from 'react-scroll'

class Header extends Component {
    render() {
        // const red = {color:'#f84a4a'};
        // const yellow = {color:'#f6c329'};
        // const green = {color: '#74d44c'};
        // const blue = {color: '#4ba0d5'};
        return (
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand><img src={RainbowLogo} height="62" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</   Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About</Link>
                            <Link activeClass="active" to="pricing" spy={true} smooth={true} duration={500}>Pricing</Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        // );
        )}
}

export default Header;