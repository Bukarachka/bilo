import React from 'react';

import './Features2.css';

import itemImg1 from '../../../assets/img/home_features2_1.png';
import itemImg2 from '../../../assets/img/home_features2_2.png';
import itemImg3 from '../../../assets/img/home_features2_3.png';
import itemImg4 from '../../../assets/img/home_features2_4.png';
import itemImg5 from '../../../assets/img/home_features2_5.png';

const items = [
    {className:"Item", image:itemImg1, title:"Video Conference", text:"Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm od tempor incididunt ut."},
    {className:"Item", image:itemImg2, title:"Share Video, Image", text:"Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm od tempor incididunt ut."},
    {className:"Item", image:itemImg3, title:"Make A Call", text:"Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm od tempor incididunt ut."},
    {className:"Item", image:itemImg4, title:"Photo Editing", text:"Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm od tempor incididunt ut."},
    {className:"Item", image:itemImg5, title:"24/7 Online Support", text:"Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm od tempor incididunt ut."}
]

const ITEM_WIDTH = 300;

const mapItems = (items) => {
    return <ul style={{columns: items.length}}>
        {items.map((item, index)=><li key={item.title}>
            <div className={(((index % 2 === 0) ? "Upper" : "Lower") + ' ' + item.className)}>
                <img src={item.image} alt=""/>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
        </li>)}
    </ul>
}

class Features2 extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            styles: {
                left: '0%'
            }
        }
        window.onmousemove = (e) => {
            let x = e.clientX;
            let left = (x - window.innerWidth / 2) / window.innerWidth * 2 * (items.length - 4) * ITEM_WIDTH / -2;
            this.setState({
                styles: {
                    left: left + 'px'
                }
            })
        }
    }
    render(){
        return<div className="HomeFeatures2">
            <div className="Header">
                <a href="/">core features</a>
                <h1>Bilo Built With All Cool Featues</h1>
            </div>
            <div className="Container">
                <div className="Features" style={this.state.styles}>
                    {mapItems(items)}
                </div>
            </div>
        </div>
    }
}

export default Features2;