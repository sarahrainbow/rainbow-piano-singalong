import React, { Component } from 'react';
import { Element } from 'react-scroll';
import 'react-piano/dist/styles.css';

class Home extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(checked) {
        this.setState({ checked });
      }

      toggleMusicalTyping() {

      }

    render(){
        return(
            <Element name='home' id="Home" className="container-fluid section">

 
            </Element>
        );
    }
}

export default Home;