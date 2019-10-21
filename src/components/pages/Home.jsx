import React, { Component } from 'react';
import Quote from '../Quote';
import RainbowIcon from '../../images/rainbow.png';
import PlusIcon from '../../images/plus.png';
import PianoIcon from '../../images/keys.png';
import EqualsIcon from '../../images/equals.png';
import HappyIcon from '../../images/happy.png';


class Home extends Component {
    render(){
        return(
            <div id="Home" className="container-fluid section">
                <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img src={RainbowIcon} alt="rainbow icon" height='100px'/>
                    <img src={PlusIcon} alt="rainbow icon" height='30px'/>
                    <img src={PianoIcon} alt="rainbow icon" height='50px'/>
                    <img src={EqualsIcon} alt="rainbow icon" height='50px'/>
                    <img src={HappyIcon} alt="rainbow icon" height='50px'/>
                    <br/>
                    <br/>
                    <br/>
                    <Quote>Best night of my life</Quote>
            </div>
        );
    }
}

export default Home;