import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll'
import TitleAbout from '../../images/TitleAbout.png'

class About extends Component {
    render(){
        return(
            <Element name="about" id="About" className="section container-fluid">
                    <h1>About</h1>
                <TextArea>
                    <p>Kirsty Mangan is basically the best and most talented person in the whole word. Please tremble at her feet in awe.</p>
                </TextArea>
            </Element>
        );
    }
}

export default About;