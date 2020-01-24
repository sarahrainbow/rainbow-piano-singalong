import React, { Component } from 'react';
import Quote from '../Quote';
import { Element } from 'react-scroll';
import 'react-piano/dist/styles.css';
import MyPiano from '../MyPiano';
import Switch from "react-switch";

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
                <MyPiano />
                <label id="musicalTypingSwitch">
                    <Switch onChange={this.handleChange} checked={this.state.checked} />
                    <p>Musical typing</p>
                </label>
                <Quote className="center">Best night of my life</Quote>    
            </Element>
        );
    }
}

export default Home;