import React from 'react';

import Header from './header';
import Features from './features';
import Download from './download';
import Features2 from './features2';
import Video from './video';
import Pricing from './pricing';
import Process from './process';
import Trail from './trail';
import Testimonials from './testimonials';
import Blog from './blog';
import Footer from './footer';

class Home extends React.PureComponent{
    render(){
        return<div className='Home'>
            <Header />
            <Features />
            <Download />
            <Features2 />
            <Video />
            <Pricing />
            <Process />
            <Trail />
            <Testimonials />
            <Blog />
            <Footer />
        </div>
    }
}

export default Home;