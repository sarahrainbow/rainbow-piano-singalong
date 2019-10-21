import React, { Component } from 'react';
import TextArea from '../TextArea';
import Quote from '../Quote';

class About extends Component {
    render(){
        return(
            <div id="About" className="section container-fluid">
                              <br/>
                    <br/>
                    <br/>
                <TextArea>
                    <p>The human jukebox Mark Rainbow will bring harmony in every concievable way. </p>
                            
                    <p>Whether it be a wild <b>hen do</b>, a spectacular <b>wedding</b>, your mum’s 60th birthday <b>party</b>, your boyfriend’s 30th, or a last ditch attempt to make the office <b>christmas</b> party fun this year, he knows the key to everyone’s hearts.</p>
                    
                    <p>Because why sing alone when you can <b>singalong?</b></p>
                </TextArea>
                <br/>
                <Quote><i>‘The feeling of us all singing together was so moving I actually cried’</i></Quote>
                <br/>
            </div>
        );
    }
}

export default About;