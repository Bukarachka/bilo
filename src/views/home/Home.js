import React from 'react';

import Header from './header';
import Features from './features';

class Home extends React.PureComponent{
    render(){
        return<div className='Home'>
            <Header />
            <Features />
        </div>
    }
}

export default Home;