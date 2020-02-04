import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';
import { Element } from 'react-scroll';

class Work extends Component {
    render(){
        return(
            <Element name="work" className="section container-fluid" id="Work">
                <h1>Work</h1>
                <TextArea>
                    Kirsty has done some shit hot work, some of which you can read below.
                </TextArea>      
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        <h2>Sessions</h2>
                        <p>Alt-J</p>
                        <p>SiVu</p>
                        </div>
                        <div class="col-sm">
                        <h2>Arrangements</h2>
                        <p>Some cool arrangement</p>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

export default Work;