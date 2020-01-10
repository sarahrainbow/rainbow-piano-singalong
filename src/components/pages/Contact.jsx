import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll'

class Contact extends Component {
    render(){
        return(
            <Element name="contact" id="Contact" className="section container-fluid">
                <TextArea>mark@thegreatrainbowpianosingalong.com</TextArea> 
                <Quote>I didn't realise I was alive before now</Quote>
            </Element>
        );
    }
}

export default Contact;