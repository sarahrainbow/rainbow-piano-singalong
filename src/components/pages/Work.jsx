import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll';

class Pricing extends Component {
    render(){
        return(
            <Element name="work" className="section container-fluid" id="Work">
                <h1>Work</h1>
                <TextArea>
                    £1500
                </TextArea>      
            </Element>
        );
    }
}

export default Pricing;