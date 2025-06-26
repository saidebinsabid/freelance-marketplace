import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import LeafletBanner from "./LeafletBanner";

const ContactInfo = () => {
  const contactItems = [
    {
      id: 1,
      icon: <FaMapMarkerAlt size={32} className="text-indigo-500" />,
      title: "Address",
      description: "3517 W. Gray St. Utica, Pennsylvania 57867",
    },
    {
      id: 2,
      icon: <FaEnvelope size={32} className="text-indigo-500" />,
      title: "Email",
      description: "m.alyaqout@4house.Com",
    },
    {
      id: 3,
      icon: <FaPhoneAlt size={32} className="text-indigo-500" />,
      title: "Contact",
      description: "(480) 555-0103",
    },
    {
      id: 4,
      icon: <FaLocationArrow size={32} className="text-indigo-500" />,
      title: "Location",
      description: "3517 W. Gray St. Utica, Pennsylvania 57867",
    },
  ];

  return (
<div className="pt-16">
        <LeafletBanner
        pageTitle="Contact Us"
        breadcrumb={["Home", "Contact"]}
      ></LeafletBanner>
    <div className="w-11/12 mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default ContactInfo;
