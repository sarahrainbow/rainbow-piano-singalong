import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll';
import TitlePricing from '../../images/TitlePricing.png';

class Pricing extends Component {
    render(){
        return(
            <Element name="pricing" className="section container-fluid" id="Pricing">
                <img className='title' src={TitlePricing} alt="Title for pricing section"/>
                <TextArea>
                    £1500
                </TextArea>      
                <Quote>Worth every penny and so much more</Quote>
            </Element>
        );
    }
}

export default Pricing;