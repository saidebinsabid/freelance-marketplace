import { useEffect, useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700 dark:text-gray-300">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => 
        console.error("Failed to load FAQs:", err)
    );
  }, []);

  return (
    <div className="mx-auto font-roboto">
        <div className=" w-11/12 px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12 ">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-700 uppercase rounded-full bg-teal-accent-400">
              Need Help?
            </p>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-6">
            Fequently Asked Questions About <span>Kaj<span className="text-indigo-500">Kori</span>.com</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Learn how to post tasks, connect with freelancers, and get work done— all in one platform.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Item key={faq.id} title={faq.question}>
              {faq.answer}
            </Item>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
