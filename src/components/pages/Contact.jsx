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
                <img src={TitleContact} className="title" alt="Title for contact section" />
                <TextArea><img src={mailIcon} id="mailIcon" alt="mail icon"/><span id='contactEmail'>mark@thegreatrainbowpianosingalong.com</span></TextArea> 
                <Quote>I didn't realise I was alive before now</Quote>
            </Element>
        );
    }
}

export default Contact;