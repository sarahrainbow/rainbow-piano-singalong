import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super();
        this.state = {
            value: props.children,
        }
    }

    render() {
        return (
            <div className="textarea">
                {this.state.value}
            </div>
        );
    }
}

export default TextArea;