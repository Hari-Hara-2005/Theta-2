
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const products = [
  {
    img: '/Assest/image-3.jpg',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus.",
  },
  {
    img: '/Assest/events-1.avif',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus.",
  },
  {
    img: '/Assest/events-8.jpg',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus.",
  },
  {
    img: '/Assest/events-2.jpg',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus.",
  },
  {
    img: '/Assest/events-6.jpg',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus.",
  },
  {
    img: '/Assest/imge-4.jpg',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus.",
  },
  {
    img: '/Assest/image-6.jpg',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus.",
  },
];

function Aslider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    with: 80,
  };
// Initialize AOS inside the component using useEffect
useEffect(() => {
  AOS.init({ duration: 1000 }); // Set the AOS animation duration to 1000ms
}, []);

  return (
    <div data-aos="fade-left">
      <div className='overflow-hidden '>
        <div className='h-full bg-slate-900'>
          <h1 className='text-5xl ml-20 text-white font-semibold p-8'>Our Events</h1>

          <hr className='text-white relative p-12 mt-4 h-[1px] w-[60rem] ml-80' />


          <div className='w-3/4  m-auto gap-5'>
            <Slider {...settings}>
              {products.map((product, index) => (
                <div key={index} className='bg-white rounded-lg'>
                  <div>
                    <img
                      className='w-full rounded-t-lg h-[20rem]'
                      src={product.img}
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                  <div>
                    <p className='text-lg w-2/3 ml-10 text-center leading-2 font-serif text-black'>
                      {product.title}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <hr className='text-white relative mt-20 p-8 h-[1px] w-[60rem] ml-80' />
        </div>
      </div>


    </div>
  );
}

export default Aslider;
