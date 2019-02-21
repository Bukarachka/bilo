import React from 'react';

import './Features.css';

import itemImg1 from '../../../assets/img/home_features_1.png';
import itemImg2 from '../../../assets/img/home_features_2.png';
import itemImg3 from '../../../assets/img/home_features_3.png';
import itemImg4 from '../../../assets/img/home_features_4.png';

const items = [
    {className:"item", title:"Easy To Control", image:itemImg1, text:"Lorem ipsum dolor sit amet, consecte tur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.", href:""},
    {className:"item", title:"Account Management", image:itemImg2, text:"Lorem ipsum dolor sit amet, consecte tur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.", href:""},
    {className:"item", title:"Overview Reports", image:itemImg3, text:"Lorem ipsum dolor sit amet, consecte tur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.", href:""},
    {className:"item", title:"Chat Setup", image:itemImg4, text:"Lorem ipsum dolor sit amet, consecte tur adipi sicing elit, sed do eiusmod tempor incididunt ut labore.", href:""}
]

const mapItems = (items) => {
    return items.map((item) => <li>
        <img src={item.image}/>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
        <a href={item.href}>Read More</a>
    </li>);
}

class Features extends React.PureComponent{
    render(){
        return<div className="HomeFeatures">
            <div className="About">
                <a href="">Get started from today</a>
                <h1>Easily Intrigate Business Plan</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <button>Download Now</button>
            </div>
            <div className="Features">
                <ul>
                    {mapItems(items)}
                </ul>
            </div>
        </div>
    }
}

export default Features;