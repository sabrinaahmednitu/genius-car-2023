import React from 'react';
import Helpinfo from '../../Helpinfo/Helpinfo';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';


const Home = () => {
    return (
        <>
      <Banner></Banner>
        <Services></Services>
        <Helpinfo></Helpinfo>
       <Experts></Experts>
        </>
    );
};

export default Home;