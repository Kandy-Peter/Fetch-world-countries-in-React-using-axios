import React from 'react';
import Countries from '../component/Countries';
import Logo from '../component/Logo';
import Navigation from '../component/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <Countries />
        </div>
    );
};

export default Home;