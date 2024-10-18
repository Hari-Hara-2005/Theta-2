import Navbar from './Companatent/Navbar';
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

import { TypingText } from "typing-text-animation";



const Home = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000 }); // Set the AOS animation duration to 1000ms
    //   }, []);
    
    return (
        
        <div data-aos="fade-right overflow-hidden ">
            <div className='absolute backdrop-filter bg-black/100  brightness-75   w-[100%] h-auto overflow-hidden'>
           
                <video className=' w-[100%] h-[100%]   ' autoPlay loop muted>
                    <source src='/Assest/motion graphic of technology background_preview.mp4' type='video/mp4' />

                </video>
            </div>
            <Navbar/>


            <div className=' relative ml-20 flex items-center mt-16 justify-center h-[60vh] overflow-hidden'>
                <div>
                    <h1 className='text-4xl font-serif text-center text-white '>Change your mind to <br className='text-center mt-4' />become sucess</h1>
                    <h2 className='text-6xl font-serif text-center text-white mt-4 '>Teata 2k23 fun<br className='mt-4'/> Beyond Limits </h2>
                    <div>
             <button className='text-2xl bg-white p-4 font-bold rounded-lg  mt-6 ml-32 hover:bg-cyan-900 hover:text-white'>Get Started</button>
                    </div>
                    <div className="text-4xl">
                       

                    </div>
                </div>
               
                {/* <div>
                    <img src='Assest/harish-1.png' />
                </div> */}

            </div>
           

        </div>

    );
}

export default Home;