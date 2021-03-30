import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll';
class Pricing extends Component {
    render(){
        return(
            <Element name="pricing" className="section container-fluid" id="Pricing">
              <h1>PRICING</h1>
                <TextArea>
                    £300 per session (up to 3 hours) <br /> <br /> <br />
                    This is a guide price, so please get in touch for a quote.
                </TextArea>      
                <Quote>Worth every penny and so much more</Quote>
            </Element>
        );
    }
}

export default Pricing;