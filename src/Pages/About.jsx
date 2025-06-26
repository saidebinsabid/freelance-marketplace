import React from "react";
import PopularFreelancer from "../Components/PopularFreelancer";
import DifferentDataCount from "../Components/DifferentDataCount";
import { Faq } from "../Components/Faq";
import OpportunitiesSection from "../Components/OpportunitiesSection";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
    <OpportunitiesSection></OpportunitiesSection>
      <PopularFreelancer />
      <DifferentDataCount />
      <Faq />
    </div>
  );
};

export default About;
