import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';

class Pricing extends Component {
    render(){
        return(
            <div>
                <h1>£1500</h1>       
                <Quote><i>‘Turns out some things really are priceless’</i></Quote>
            </div>
        );
    }
}

export default Pricing;