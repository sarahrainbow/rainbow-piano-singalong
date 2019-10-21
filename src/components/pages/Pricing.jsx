import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';

class Pricing extends Component {
    render(){
        return(
            <div className="section container-fluid" id="Pricing">
                <TextArea>
                    £1500
                </TextArea>      
                <Quote><i>‘Worth every penny and so much more’</i></Quote>
            </div>
        );
    }
}

export default Pricing;