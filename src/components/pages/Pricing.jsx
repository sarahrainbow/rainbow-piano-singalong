import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Pricing extends Component {
    render(){
        return(
            <Element name="pricing" className="section container-fluid" id="Pricing">
                <TextArea>
                    £1500
                </TextArea>      
                <Quote><i>‘Worth every penny and so much more’</i></Quote>
            </Element>
        );
    }
}

export default Pricing;