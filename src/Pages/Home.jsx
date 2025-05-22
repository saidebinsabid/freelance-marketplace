import React from 'react';
import Hero from '../Components/Hero';
import DifferentDataCount from '../Components/DifferentDataCount';
import PopularFreelancer from '../Components/PopularFreelancer';
import FeaturedTask from '../Components/FeaturedTask';
import { ThemeProvider } from '../Provider/ThemeContext';



const Home = () => {

    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white'>
            <Hero />
            <FeaturedTask />
            <PopularFreelancer />
            <DifferentDataCount />

        </div>
    );
};

export default Home;