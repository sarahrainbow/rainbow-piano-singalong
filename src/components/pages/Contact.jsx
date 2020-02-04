import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll'
import TitleContact from '../../images/TitleContact.png';
import mailIcon from '../../images/MailIcon.png';

class Contact extends Component {
    render(){
        return(
            <Element name="contact" id="Contact" className="section container-fluid">
                <h1>Contact</h1>
                <TextArea>
                    <img src={mailIcon} id="mailIcon" alt="mail icon"/><span id='contactEmail'>kirsty@kirstyviolin.com</span>
                </TextArea> 
            </Element>
        );
    }
}

export default Contact;