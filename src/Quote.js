import React, { Component } from 'react';

class Quote extends Component {
    constructor(props){
        super()
        this.state = {
            value: props.children,
        }
    }

    render() {
        return(
            <div class="quote">
                <p>{this.state.value}</p>
            </div>

        );
    }
}

export default Quote;