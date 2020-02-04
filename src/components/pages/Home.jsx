import React, { Component } from 'react';
import { Element } from 'react-scroll';
import 'react-piano/dist/styles.css';
import placeholder4 from '../../images/placeholder4.jpg';

class Home extends Component {
    render(){
        return(
            <Element name='home' id="Home" className="container-fluid section">
              <img src={placeholder4} alt="kirsty home page image" />
            </Element>
        );
    }
}

export default Home;