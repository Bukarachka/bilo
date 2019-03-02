import React from 'react';

import './Video.css';

import placeholder from '../../../assets/img/home_video_placeholder.png';

class Video extends React.PureComponent{
    render(){
        return<div className="HomeVideo">
            <div>
            <a href="/">intro video</a>
                <h1>High Quality Video Chating & Conference</h1>
                <div className="Video">
                    <img src={placeholder} alt=""/>
                    <div className="Overlay">
                        <p>Play</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Video;