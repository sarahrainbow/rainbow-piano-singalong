import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';

class Contact extends Component {
    render(){
        return(
            <div id="Contact" className="section container-fluid">
                <TextArea>mark@thegreatrainbowpianosingalong.com</TextArea> 
                <Quote><i>There is nothing better in this world</i></Quote>
            </div>
        );
    }
}

export default Contact;