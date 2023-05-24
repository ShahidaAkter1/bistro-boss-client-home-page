import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from '../CallUs/CallUs';
import BistroBoss from '../BistroBoss/BistroBoss';
import ChefRecommend from '../CheifRecommend/ChefRecommend';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecommend></ChefRecommend>
        <Featured></Featured>
        <Testimonials></Testimonials>
        </div>
    );
};

export default Home;