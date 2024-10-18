import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Youtube() {
    return (
        
        <div className='flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 py-40 '>
            {/* Form Section */}
            <div className='flex flex-col ml-[60rem] w-[60rem] p-8  backdrop-filter backdrop-blur-sm brightness-75  overflow-hidden bg-transparent'>
                {/* Name Input */}
                <div className="flex items-center border mt-5 bg-white p-2 rounded-md focus-within:border-rose-500 w-[70%]">
                    <FaUser className='text-2xl text-gray-400' />
                    <input
                        className="ml-4 w-full p-2 focus:outline-none border-b border-gray-300 focus:border-rose-500 transition duration-300"
                        type="text"
                        placeholder="Your Name"
                    />
                </div>

                {/* Phone Input */}
                <div className="flex items-center border mt-5 bg-white p-2 rounded-md focus-within:border-rose-500 w-[70%]">
                    <IoCall className='text-2xl text-gray-400' />
                    <input
                        className="ml-4 w-full p-2 focus:outline-none border-b border-gray-300 focus:border-rose-500 transition duration-300"
                        type="text"
                        placeholder="Enter your phone"
                    />
                </div>

                {/* Email Input */}
                <div className="flex items-center border mt-5 bg-white p-2 rounded-md focus-within:border-rose-500 w-[70%]">
                    <MdEmail className='text-2xl text-gray-400' />
                    <input
                        className="ml-4 w-full p-2 focus:outline-none border-b border-gray-300 focus:border-rose-500 transition duration-300"
                        type="text"
                        placeholder="Enter Email"
                    />
                </div>

                {/* Message Input */}
                <div className="flex flex-col mt-5 w-[70%]">
                    <label className="text-gray-400 mb-2">Enter your Message</label>
                    <textarea
                        className="p-3 rounded-md focus:outline-none border border-gray-300 focus:border-rose-500 resize-y"
                        rows="4"
                        placeholder="Your message here..."
                    />
                </div>
                <button className='text-2xl font-bold p-2 bg-white mt-4 hover:bg-blue'>Register</button>
            </div>
            <img/>
            {/* Video Section */}
            <div className='absolute backdrop-filter brightness-75 w-[50%] ml-12 h-[70%] overflow-hidden'>
                <video className='w-full' autoPlay loop muted>
                    <source src='/Assest/THETA 2K23 AFTER MOVIE _ FUN BEYOND LIMITS _ EMULSION 23.mp4' type='video/mp4' />
                </video>
            </div>

           
        </div>
    );
}

export default Youtube;
