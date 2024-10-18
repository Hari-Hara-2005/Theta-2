import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Abouts() {
  // Initialize AOS inside the component using useEffect
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set the AOS animation duration to 1000ms
  }, []);

  return (
    <div data-aos="fade-down overflow-hidden ">
      <div className='flex relative py-20 mt-32 justify-center gap-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800'>
        
        {/* Main Image Section */}
        <div className='relative group'>
          <img className='h-[550px] w-[540px] object-cover ' src='/Assest/image-6.jpg' alt="DJ and Team Swaraag" />
          
          {/* Overlay Text */}
          <div className='absolute inset-0 flex flex-col justify-start'>
            <h1 className='text-white text-2xl bg-[#0F172A] h-20 p-8 font-bold'>Day-1</h1>
          </div>
          <div className='absolute inset-0 flex flex-col justify-end'>
            <p className='text-white text-2xl p-4 font-bold'>DJ and Team Swaraag Improve You Business Cards And</p>
            <h2 className='text-slate-100 text-lg ml-6 font-bold'>19th May, 2019</h2>
          </div>
        </div>
        
        {/* Additional Images */}
        <div>
          <div className='relative group'>
            <img  className='h-[255px] w-[540px] object-cover ' src='/Assest/image-3.jpg' alt="Day-2" />
            <div className='absolute inset-0 flex flex-col justify-start'>
              <h1 className='text-white text-2xl bg-[#0F172A] h-20 p-8 font-bold'>Day-2</h1>
            </div>
            <div className='absolute inset-0 flex flex-col justify-end'>
              <p className='text-white text-2xl p-2 font-bold'>DJ and Team Recoil</p>
              <h2 className='text-slate-100 text-lg ml-6 font-bold'>19th May, 2019</h2>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>

          <div className='relative group mt-10'>
            <img className='h-[255px] w-[540px] object-cover ' src='/Assest/imge-4.jpg' alt="Day-3" />
            <div className='absolute inset-0 flex flex-col justify-start'>
              <h1 className='text-white text-2xl bg-[#0F172A] h-20 p-8 font-bold'>Day-3</h1>
            </div>
            <div className='absolute inset-0 flex flex-col justify-end'>
              <p className='text-white text-2xl p-2 font-bold'>DJ and Team pro Nite</p>
              <h2 className='text-slate-100 text-lg ml-6 font-bold'>19th May, 2019</h2>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
