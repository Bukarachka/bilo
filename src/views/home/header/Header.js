import React from 'react';

import './Header.css';

class Header extends React.PureComponent{
    render(){
        return<div className="HomeHeader">
            <p className="Title">Bilo.</p>
            <div className="Anchors">
                <p>About</p>
                <p>Features</p>
                <p>Services</p>
                <p>Pricing</p>
                <p>Download</p>
            </div>
            <div className="DownloadNow">
                <button>Download Now</button>
            </div>
            <div className="MenuBars">
                <p id="Menu">Menu</p>
                <p id="Bars">Bars</p>
            </div>
            <div className="About">
                <h1>Best App For Grow Business.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className="Buttons">
                <button id="GetStarted">Get Started Now</button>
                <button id="LearnMore">Learn More</button>
            </div>
        </div>
    }
}

export default Header;