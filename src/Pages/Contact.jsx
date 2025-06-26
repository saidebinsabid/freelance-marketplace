import React from "react";
import PopularFreelancer from "../Components/PopularFreelancer";
import DifferentDataCount from "../Components/DifferentDataCount";
import { Faq } from "../Components/Faq";
import ContactInfo from "../Components/ContactInfo";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
   <ContactInfo></ContactInfo>
      <PopularFreelancer />
      <DifferentDataCount />
      <Faq />
    </div>
  );
};

export default Contact;
