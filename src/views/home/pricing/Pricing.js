import React from 'react';

import './Pricing.css';

import bestImage from '../../../assets/img/home_pricing_best.png';

const monthlyItems = [
    {className:"item", best:false, title:"Regular", price:"$45", elements:[
        {highlighted:false, text:"Unlimited Results Per Search"},
        {highlighted:true, text:"Unlimited Saved Search"},
        {highlighted:false, text:"Unlimited Invites"},
        {highlighted:false, text:"Unlimited Campaigns"}
    ]},
    {className:"item", best:true, title:"Advanced", price:"$99", elements:[
        {highlighted:false, text:"Unlimited Results Per Search"},
        {highlighted:true, text:"Unlimited Saved Search"},
        {highlighted:false, text:"Unlimited Invites"},
        {highlighted:false, text:"Unlimited Campaigns"},
        {highlighted:false, text:"Unlimited Messages"},
        {highlighted:false, text:"Unlimited Hosting Plans"},
        {highlighted:false, text:"Unlimited Call & Sms"}
    ]},
    {className:"item", best:false, title:"Team", price:"$378", elements:[
        {highlighted:false, text:"Unlimited Results Per Search"},
        {highlighted:true, text:"Unlimited Saved Search"},
        {highlighted:false, text:"Unlimited Invites"},
        {highlighted:false, text:"Unlimited Campaigns"}
    ]}
]
const yearlyItems = [
    {className:"item", best:false, title:"Regular Yearly", price:"$45", elements:[
        {highlighted:false, text:"Unlimited Results Per Search"},
        {highlighted:true, text:"Unlimited Saved Search"},
        {highlighted:false, text:"Unlimited Invites"},
        {highlighted:false, text:"Unlimited Campaigns"}
    ]},
    {className:"item", best:true, title:"Advanced Yearly", price:"$99", elements:[
        {highlighted:false, text:"Unlimited Results Per Search"},
        {highlighted:true, text:"Unlimited Saved Search"},
        {highlighted:false, text:"Unlimited Invites"},
        {highlighted:false, text:"Unlimited Campaigns"},
        {highlighted:false, text:"Unlimited Messages"},
        {highlighted:false, text:"Unlimited Hosting Plans"},
        {highlighted:false, text:"Unlimited Call & Sms"}
    ]},
    {className:"item", best:false, title:"Team Yearly", price:"$378", elements:[
        {highlighted:false, text:"Unlimited Results Per Search"},
        {highlighted:true, text:"Unlimited Saved Search"},
        {highlighted:false, text:"Unlimited Invites"},
        {highlighted:false, text:"Unlimited Campaigns"}
    ]}
]

const mapItems = (items) => {
    return <ul >
        {items.map((item)=><li className={item.best?"Best":""} key={item.title}>
            <h2>{item.title}</h2>
            {item.best?<img src={bestImage}/>:null}
            <h1>{item.price}<span>/mo</span></h1>
            <div>{item.elements.map((element, index)=><p key={index + 70} className={element.highlighted ? "Highlighted" : ""}>{element.text}</p>)}</div>
            <button>Purchase Now</button>
        </li>)}
    </ul>
}

class Pricing extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            checkboxChecked: true
        }
    }

    switchCheck = (e) => {
        this.setState({
            checkboxChecked: e.target.checked
        });
    }

    render(){
        let items = [];
        if(this.state.checkboxChecked){
            items = monthlyItems;
        }
        else {
            items = yearlyItems;
        }

        return<div className="HomePricing">
            <div className="Head">
                <div>
                    <a href="/">pricing plans</a>
                    <h1>Get Your Attention With Bilo App.</h1>
                </div>
                <label className="Switch">
                    <input type="checkbox" checked={this.state.checkboxChecked} onChange={this.switchCheck}/>
                    <span className="Slider" />
                    <div>
                        <p className={!this.state.checkboxChecked ? "White" : "Black"}>Yearly</p>
                        <p className={this.state.checkboxChecked ? "White" : "Black"}>Monthly</p>
                    </div>
                </label>
            </div>
            <div className="Content">
                {mapItems(items)}
            </div>
        </div>
    }
}

export default Pricing;