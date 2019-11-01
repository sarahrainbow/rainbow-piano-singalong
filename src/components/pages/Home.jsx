import React, { Component } from 'react';
import Quote from '../Quote';
import happyEquation from '../../images/happyEquation.png';
import piano from '../../images/rainbowPiano.jpg';
import { Element, animateScroll } from 'react-scroll'



class Home extends Component {
    render(){
        return(
            <Element name='home' id="Home" className="container-fluid section">
                <img src={happyEquation} className="center"/>
                <Quote className="center">Best night of my life</Quote>    
                <img src={piano} className="center"/>
            </Element>
        );
    }
}

export default Home;