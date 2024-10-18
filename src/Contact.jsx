import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

 function Contact() {
  return (
    <div className='bg-[#222831] p-8'>
    <div className=' py-20 flex justify-center gap-36  text-white '>
        <div>
           <img className='w-[250px] h-[350px] -mt-[6rem]' src='/Assest/logo-teat.png'/>
        </div>
        <div className=''>
            <h2 className='text-3xl text-bold'>Quick Link</h2>
           
            <p className='text-lg flex items-center gap-2 mt-4 hover:text-slate-300'> <FaAngleRight  className='text-yellow-300' />Home</p>
            <p className='text-lg  flex items-center gap-2 mt-4 hover:text-slate-300'> <FaAngleRight  className='text-yellow-300' />Abouts</p>
            <p className='text-lg  flex items-center gap-2 mt-4 hover:text-slate-300'> <FaAngleRight  className='text-yellow-300' />Clusters</p>
            <p className='text-lg  flex items-center gap-2 mt-4 hover:text-slate-300'> <FaAngleRight  className='text-yellow-300' />Contact</p>
        </div>
        <div>
            <h3 className='text-3xl text-bold'>Userful Links</h3>
            <p className='text-lg flex items-center gap-2 mt-4  hover:text-slate-300'> <FaAngleRight  className='text-yellow-300' />Sastra University</p>
            <p className='text-lg flex items-center gap-2  mt-4 hover:text-slate-300'> <FaAngleRight  className='text-yellow-300' />Rules & Regulation</p>
        </div>
        <div>
            <h4 className='text-3xl text-bold'>Newsletter</h4>
            <p className='text-lg flex items-center gap-2 mt-4 hover:text-slate-300 '><FaAngleRight  className='text-yellow-300' />Subscribe for latest upadates</p>
            <div class="flex border  mt-5 bg-white p-2 rounded-md focus-within:border-rose-500">

<div class="w- flex px-2 text-gray-400">
    <MdEmail  className='  my-auto text-2xl' />

</div>


<div class="w-">
    <label class="block text-gray-400 text-sm mb-1"></label>
    <input
        class="w- p-2 focus:outline-none border-b border-gray-300 focus:border-rose-500 transition duration-300"
        type="text"
        placeholder="Enter Email"
    />
</div>
</div>
        </div>
      
    </div>
    <div className='text-4xl text-white justify-center gap-8 flex'>
        <CiFacebook />
        <CiYoutube />
        <CiInstagram />
        <FaWhatsapp />

        </div>
    <hr className='bg-slate-700 mt-4 w-[80%] ml-36 h-[1px] '/>
    <p className='text-lg text-slate-500 text-center mt-2'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
    </div>
  )
}
export default Contact;
