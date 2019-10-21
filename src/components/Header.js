import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import RainbowIcon from '../images/rainbowIcon.png';

class Header extends Component {
    render() {
        const red = {color:'#f84a4a'};
        const yellow = {color:'#f6c329'};
        const green = {color: '#74d44c'};
        const blue = {color: '#4ba0d5'};
        return (
            <div className="header">
                <h1><span style={red}>Great</span> <span style={yellow}>Rainbow</span> <span style={green}>Piano</span> <span style={blue}>Singalong</span></h1>
                
                <Navbar expand="lg">
                    <Navbar.Brand href="#home"><img src={RainbowIcon} height="40px" alt="rainbow icon"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                    
                    </Navbar>
            </div>
        );
    }
}

export default Header;