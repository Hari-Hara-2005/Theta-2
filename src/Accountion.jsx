import React, { useState } from 'react';
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion panel
  };

  return (
    <div data-aos="fade-right">
    <div className="mx-40 bg-[#1F2937]  px-40 p-12 ">
      {/* Accordion Panel 1 */}
      <div className="border-[2px]  shadow-2xl border-gray-300">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex justify-between items-center text-left py-6 px-10 bg-white  text-black  focus:outline-none"
        >
          <h3 className="text-lg font-bold">What is Tailwind CSS?</h3>

          {/* Icon that changes when accordion is open */}
          {activeIndex === 1 ? (
            <IoRemoveSharp className="text-2xl transition-transform duration-300" />
          ) : (
            <IoAddSharp className="text-2xl transition-transform duration-300" />
          )}
        </button>

        {activeIndex === 1 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <p>
              Tailwind CSS is a utility-first CSS framework for creating custom designs without leaving your HTML.
            </p>
          </div>
        )}
      </div>

      {/* Accordion Panel 2 */}
      <div className="border-[2px] mt-10  shadow-2xl border-gray-300">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex justify-between items-center text-left py-6 px-10  bg-white  text-black focus:outline-none"
        >
          <h3 className="text-lg font-medium">How do I install Tailwind CSS?</h3>

          {activeIndex === 2 ? (
            <IoRemoveSharp className="text-2xl transition-transform duration-300" />
          ) : (
            <IoAddSharp className="text-2xl transition-transform duration-300" />
          )}
        </button>

        {activeIndex === 2 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <p>To install Tailwind CSS, you can use npm: `npm install tailwindcss`.</p>
          </div>
        )}
      </div>

      {/* Accordion Panel 3 */}
      <div className="border-[2px] mt-10  shadow-2xl border-gray-300">
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full flex justify-between items-center text-left py-6 px-10 bg-white  text-black focus:outline-none"
        >
          <h3 className="text-lg font-medium">Can I customize Tailwind CSS?</h3>

          {activeIndex === 3 ? (
            <IoRemoveSharp className="text-2xl transition-transform duration-300" />
          ) : (
            <IoAddSharp className="text-2xl transition-transform duration-300" />
          )}
        </button>

        {activeIndex === 3 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <p>
              Yes, Tailwind CSS can be customized using the `tailwind.config.js` file, where you can add custom colors,
              spacing, and more.
            </p>
          </div>
        )}
      </div>
      <div className="border-[2px] mt-10  shadow-2xl border-gray-300">
        <button
          onClick={() => toggleAccordion(4)}
          className="w-full flex justify-between items-center text-left py-6 px-10  bg-white  text-black focus:outline-none"
        >
          <h3 className="text-lg font-medium">How do I install Tailwind CSS?</h3>

          {activeIndex === 4 ? (
            <IoRemoveSharp className="text-2xl transition-transform duration-300" />
          ) : (
            <IoAddSharp className="text-2xl transition-transform duration-300" />
          )}
        </button>

        {activeIndex === 4 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <p>To install Tailwind CSS, you can use npm: `npm install tailwindcss`.</p>
          </div>
        )}
      </div>
      <div className="border-[2px] mt-10  shadow-2xl border-gray-300">
        <button
          onClick={() => toggleAccordion(5)}
          className="w-full flex justify-between items-center text-left py-6 px-10  bg-white  text-black focus:outline-none"
        >
          <h3 className="text-lg font-medium">How do I install Tailwind CSS?</h3>

          {activeIndex === 5 ? (
            <IoRemoveSharp className="text-2xl transition-transform duration-300" />
          ) : (
            <IoAddSharp className="text-2xl transition-transform duration-300" />
          )}
        </button>

        {activeIndex === 5 && (
          <div className="px-5 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <p>To install Tailwind CSS, you can use npm: `npm install tailwindcss`.</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Accordion;
