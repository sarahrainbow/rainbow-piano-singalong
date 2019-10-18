import React, { Component } from 'react';
import quoteOpenIcon from '../images/quoteOpen.png';
import quoteCloseIcon from '../images/quoteClose.png';

class Quote extends Component {
    constructor(props){
        super()
        this.state = {
            value: props.children,
        }
    }

    render() {
        return(
            <div className="quote badge">
                    <img src={quoteOpenIcon} height="30px"/>
                    <p>{this.state.value}</p>
            </div>
            
        );
    }
}

export default Quote;