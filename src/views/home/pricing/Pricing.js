import React from 'react';

import './Pricing.css';

const items = [
    {className:"item", bset:false, title:"", price:{}, elements:[]}
]

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
                content {this.state.checkboxChecked + ''}
            </div>
        </div>
    }
}

export default Pricing;