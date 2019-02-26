import React from 'react';

import './Download.css';

import phonesImage from '../../../assets/img/home_download_phones.png';
import quoteImage from '../../../assets/img/home_download_quote.png';

class Download extends React.PureComponent{
    render(){
        return<div className="HomeDownload">
            <div className="Image">
                <img src={phonesImage} alt=""/>
            </div>
            <div className="Content">
                <a href="/">interested in the app</a>
                <h1>Available For Your Cute Smartphone & Tab.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                <div className="Buttons">
                    <button>
                        <p>Get It On</p>
                        <h2>Google Play</h2>
                    </button>
                    <button>
                        <p>Get It On</p>
                        <h2>Appple Store</h2>
                    </button>
                </div>
                <div className="Quote">
                    <img src={quoteImage} alt="" />
                    <h2>2M Happy Users</h2>
                    <a href="/">Read More</a>
                </div>
            </div>
        </div>
    }
}

export default Download;