import React from 'react';
import Blog from '../../Blog/Blog';
import ClientWorks from '../../ClientWorks/ClientWorks';
import Helpinfo from '../../Helpinfo/Helpinfo';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';


const Home = () => {
    return (
        <>
      <Banner></Banner>
        <Services></Services>
        <ClientWorks></ClientWorks>
        <Helpinfo></Helpinfo>
        <Blog></Blog>
       <Experts></Experts>
        </>
    );
};

export default Home;