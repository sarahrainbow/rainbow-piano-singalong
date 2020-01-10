import React, { Component } from 'react';
import Quote from '../Quote';
import { Element } from 'react-scroll';
import 'react-piano/dist/styles.css';
import MyPiano from '../MyPiano';

class Home extends Component {
    render(){
        return(
            <Element name='home' id="Home" className="container-fluid section">
                <MyPiano />
                <Quote className="center">Best night of my life</Quote>    
            </Element>
        );
    }
}

export default Home;