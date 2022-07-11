import React from 'react';
import Banner from './Banner';
import BannerX from './BannerX';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import Feedback from './Feedback';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <BannerX></BannerX>
           <MakeAppointment></MakeAppointment>
           <Feedback></Feedback>
         
           <Footer></Footer>
        </div>
    );
};

export default Home;