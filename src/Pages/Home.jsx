import React from 'react';
import Hero from '../Components/Hero';
import DifferentDataCount from '../Components/DifferentDataCount';
import PopularFreelancer from '../Components/PopularFreelancer';


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <PopularFreelancer></PopularFreelancer>
           <DifferentDataCount></DifferentDataCount>
           
        </div>
    );
};

export default Home;