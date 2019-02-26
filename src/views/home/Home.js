import React from 'react';

import Header from './header';
import Features from './features';
import Download from './download';

class Home extends React.PureComponent{
    render(){
        return<div className='Home'>
            <Header />
            <Features />
            <Download />
        </div>
    }
}

export default Home;