import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll'

class Contact extends Component {
    render(){
        return(
            <Element name="contact" id="Contact" className="section container-fluid">
                <TextArea>mark@thegreatrainbowpianosingalong.com</TextArea> 
                <Quote><i>There is nothing better in this world</i></Quote>
            </Element>
        );
    }
}

export default Contact;