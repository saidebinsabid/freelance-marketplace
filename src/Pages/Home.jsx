import React from 'react';
import Hero from '../Components/Hero';
import DifferentDataCount from '../Components/DifferentDataCount';
import PopularFreelancer from '../Components/PopularFreelancer';
import FeaturedTask from '../Components/FeaturedTask';


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <FeaturedTask></FeaturedTask>
           <PopularFreelancer></PopularFreelancer>
           <DifferentDataCount></DifferentDataCount>
        </div>
    );
};

export default Home;