import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import { useLocation } from 'react-router-dom'
import Watches from '../Watches/Watches';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Watches></Watches>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;