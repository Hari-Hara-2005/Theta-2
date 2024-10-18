
import { TypingText } from "typing-text-animation";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


function Product() {
    // Initialize AOS inside the component using useEffect
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Set the AOS animation duration to 1000ms
    }, []);
  
  return (
<div>


<h2>Tabs</h2>
<p>Click on the buttons inside the tabbed menu:</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 bg-[#1F2937] py-20 -mb-[20] px-20 justify-between gap-20  ">
    <div data-aos="zoom-in">
        <div class="bg-[#121212] mt-8  hover:scale-110 transition-all duration-500  box py-10 px-10 rounded-lg">
          <h5 class="text-center text-2xl text-white font-serif">Hey Guys Let's Go</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">9:00 a.m. - 12:00 p.m. | Venue: 303</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Strategia</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl font-bold bg-black flex justify-center items-center text-white p-2 rounded-lg'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="bg-[#121212] hover:scale-110 transition-all duration-500  box py-10 px-10 rounded-lg">
          <h5 class="text-center text-2xl text-white font-serif">Code Hunt</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">2:00 p.m. - 5:00 p.m. | Venue: LAB-2</p>
          <p className='text-xl font-bold text-yellow-600 text-center mt-2'>information</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>



        <div data-aos="zoom-in">
        <div class="bg-[#121212] hover:scale-110 transition-all duration-500 box py-10 px-10 rounded-lg">
          <h5 class="text-center text-2xl text-white font-serif">Robo-Saga</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">9:30 a.m. - 1:30 p.m. | Venue: Basketball Court</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Robotics</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="bg-[#121212] box py-10 px-10 hover:scale-110 transition-all duration-500 rounded-lg">
          <h5 class="text-center text-2xl text-white font-serif">Capture Caption Captivat</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">10:00 a.m. - 1:00 p.m. | Venue: 401</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Access America</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="bg-[#121212] box py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">Natrramizh: Ezhuthukol Vazhi em Mozhi</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">
            10:00 a.m. - 1:00 p.m. | Venue: 202</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Equilibria</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class=" box bg-[#121212] py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">Hey Guys Let's Go</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">9:00 a.m. - 12:00 p.m. | Venue: 303</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Strategia</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="box bg-[#121212] py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">
            Natrramizh: Avai Anjaamai</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">
            10:00 a.m. - 1:00 p.m. | Venue: 203</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Equilibria</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class=" box bg-[#121212] py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">Byte Banko</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">10:00 a.m. - 1:00 p.m. | Venue: 406</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Electronica</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="box bg-[#121212] py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">Hey Guys Let's Go</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">9:00 a.m. - 12:00 p.m. | Venue: 303</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Strategia</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="box bg-[#121212] py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">HWonder Fest</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">
            10:00 a.m. - 4:00 p.m. | Venue: 2123</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Mathematica</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="box bg-[#121212] py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">HWonder Fest</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">
            10:00 a.m. - 4:00 p.m. | Venue: 2123</p>
          <p className='text-xl font-bold text-yellow-700 text-center mt-2'>Mathematica</p>
          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
        <div data-aos="zoom-in">
        <div class="box bg-[#121212] py-10 px-10 rounded-lg hover:scale-110 transition-all duration-500">
          <h5 class="text-center text-2xl text-white font-serif">HWonder Fest</h5>
          <p class="text-center text-white text-lg font-semibold mt-4">
            10:00 a.m. - 4:00 p.m. | Venue: 2123</p>

          <div className='flex justify-center items-center mt-4'>
            <button className='text-2xl  font-bold bg-black flex justify-center items-center text-white p-4 rounded-2xl'>Register</button>
          </div>
          </div>

        </div>
      </div>

      </div>

   


  )
}
export default Product; 