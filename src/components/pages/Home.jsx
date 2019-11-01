import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Quote from '../Quote';
import RainbowIcon from '../../images/rainbow.png';
import PlusIcon from '../../images/plus.png';
import PianoIcon from '../../images/keys.png';
import EqualsIcon from '../../images/equals.png';
import HappyIcon from '../../images/happy.png';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class Home extends Component {
    render(){
        return(
            <Element name='home' id="Home" className="container-fluid section">
                <div class="home-icons">
                    <img src={RainbowIcon} alt="rainbow icon" height='100px'/>
                    <img src={PlusIcon} alt="plus icon" height='30px'/>
                    <img src={PianoIcon} alt="piano icon" height='50px'/>
                    <img src={EqualsIcon} alt="equals icon" height='50px'/>
                    <img src={HappyIcon} alt="happy icon" height='50px'/>
                </div>
                <Quote>Best night of my life</Quote>    
            </Element>
        );
    }
}

export default Home;