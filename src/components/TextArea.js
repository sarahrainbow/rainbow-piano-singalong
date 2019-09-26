import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

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
                <p> {this.state.value} </p>
            </div>
        );
    }
}

export default TextArea;