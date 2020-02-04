import React, { Component } from 'react';
import TextArea from '../TextArea';
import { Element } from 'react-scroll';
import placeholder2 from '../../images/placeholder2.jpg';
import placeholder3 from '../../images/placeholder3.jpg';

class Gallery extends Component {
    render(){
        return(
            <Element name="gallery" className="section container-fluid" id="Gallery">
                <h1>Gallery</h1>
                <div class="video-grid">
                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/yjmZLaymJU8?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <img src={placeholder2} alt="placeholder image" />
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/0AKpIeQTvAs?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/fPKrrzCEz2w?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/Y2LuQAtD9tE?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/itLxXeyM2aM?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <img src={placeholder3} alt="placeholder image" />
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/fTvJ1TYORJg?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/36FNJiP8GWk?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/58LeVo7j46w?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/pLRGz4UHQCI?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>

                    <div class="video-item">
                        <iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="https://www.youtube.com/embed/WamQZisA9LE?portrait=0" webkitallowfullscreen="" width="640"></iframe>
                    </div>
                </div>
                     
            </Element>
        );
    }
}

export default Gallery;