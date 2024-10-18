// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// function Number({ n }) {
//     const { number } = useSpring({
//         from: { number: 0 },
//         number: n,
//         delay: 200,
//         config: { mass: 1, tension: 20, friction: 10 },
//     });
//     return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>;
// }

// function Sastra() {
//     return (
//         <div>
//             {/* Header image */}
//             <div>
//                 <img className='h-[612px]  absolute bg-cover w-full' src='/Assest/sastra-5.jpg' alt="University Image" />
//             </div>

//             {/* Title */}
//             <div>
//                 <h1 className='text-5xl mt-[3px] p-20 relative ml-12 font-serif text-white'>
//                     A Few Facts About our
//                     <br className='leading-9' />
//                     University
//                 </h1>
//             </div>

//             {/* Stats Section */}
//             <div className='flex gap-40 my-20 ml-20'>
//                 {/* First Column */}
//                 <div>
//                     <div className='backdrop-blur-sm  bg-white/15 w-[15rem]  h-[10rem]'>
//                         <p className='text-orange-400 duration-1000 text-center text-7xl font-bold italic'>
//                             <Number n={94} />
//                         </p>
//                         <h2 className='text-2xl text-white text-center mt-6 font-serif'>Succeeded students</h2>
//                     </div>

//                     <div className='backdrop-blur-sm bg-white/15 w-[15rem] mt-20 h-[10rem]'>
//                         <p className='text-orange-400 text-center text-7xl font-bold italic'>
//                             <Number n={2341} />
//                         </p>
//                         <h2 className='text-2xl text-white text-center mt-6 font-serif'>New students</h2>
//                     </div>
//                 </div>

//                 {/* Second Column */}
//                 <div>
//                     <div className='backdrop-blur-sm bg-white/15 w-[15rem] mt-6 h-[10rem]'>
//                         <p className='text-orange-400 text-center text-7xl font-bold italic'>
//                             <Number n={160} />
//                         </p>
//                         <h2 className='text-2xl text-white text-center mt-6 font-serif'>Current teachers</h2>
//                     </div>

//                     <div className='backdrop-blur-sm bg-white/15 w-[15rem] mt-20 h-[10rem]'>
//                         <p className='text-orange-400 text-center text-7xl font-bold italic'>
//                             <Number n={40} />
//                         </p>
//                         <h2 className='text-2xl text-white text-center mt-6 font-serif'>Achieved students</h2>
//                     </div>
//                 </div>

//                 {/* Third Column */}
//                 {/* <div>
//           <div>
//             <img className='relative -mt-24 rounded mr-60' src='/Asset/video-item-bg.jpg' alt='Video Item Background' />
//             <img className='relative ml-80 -mt-64' src='/Asset/play-icon.png' alt='Play Icon' />
//           </div>
//         </div> */}
//             </div>
//         </div>
//     );
// }

// export default Sastra;
