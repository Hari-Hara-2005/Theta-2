import React, { useEffect } from 'react';
import AOS from 'aos';


import 'aos/dist/aos.css'; // Import AOS styles

export const reviews = [
  {
    id: 1,
    img: 'Assest/clusters-1.png',
    description: "Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows.",
    name: "Emulsion",
    position: 'We Speak cinema'
  },
  {
    id: 2,
    img: 'Assest/cluster-2.png',
    description: "Team flatten stroke follower overflow move. Rectangle export arrange invite follower plugin star connection underline.",
    name: "Stuart Mark",
    position: 'Chef'
  },
  {
    id: 3,
    img: '/Assest/cluster-3.png',
    description: "It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.",
    name: "Megan Johnson",
    position: 'Customer'
  },
  {
    id: 4,
    img: '/Assest/cluster-6.jpg',
    description: "Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows.",
    name: "Mila Smith",
    position: 'Food Blogger'
  },
  {
    id: 5,
    img: '/Assest/cluster-5.png',
    description: "Team flatten stroke follower overflow move. Rectangle export arrange invite follower plugin star connection underline.",
    name: "Stuart Mark",
    position: 'Chef'
  },
  {
    id: 6,
    img: '/Assest/cluster-6.jpg',
    description: "It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.",
    name: "Megan Johnson",
    position: 'Customer'
  },
  {
    id: 7,
    img: '/Assest/cluster-7.jpg',
    description: "Pen arrange link background community line figma horizontal link. Follower layer content hand undo. Figma edit flows.",
    name: "Armas Rosie",
    position: 'Chef'
  },
  {
    id: 8,
    img: '/Assest/cluster-9.jpg',
    description: "It look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.",
    name: "Johnson Pele",
    position: 'Customer'
  },
  {
    id: 9,
    img: '/Assest/cluster-10.jpg',
    description: "Team flatten stroke follower overflow move. Rectangle export arrange invite follower plugin star connection underline.",
    name: "Andrew Watson",
    position: 'Chef'
  },
  {
    id: 10,
    img: '/Assest/cluster-8.png',
    description: "Team flatten stroke follower overflow move. Rectangle export arrange invite follower plugin star connection underline.",
    name: "Andrew Watson",
    position: 'Chef'
  },
  {
    id: 11,
    img: '/Assest/cluster-11.png',
    description: "Team flatten stroke follower overflow move. Rectangle export arrange invite follower plugin star connection underline.",
    name: "Andrew Watson",
    position: 'Chef'
  },

];

const colorStyles = [
  { circleColor: "#7F60A3", lineColor: "#7F60A3" },
  { circleColor: "#81DE76", lineColor: "#81DE76" },
  { circleColor: "#7F60A3", lineColor: "#7F60A3" },
  { circleColor: "#81DE76", lineColor: "#81DE76" },
];

const Autoslider = () => {
  const duplicateClients = [...reviews, ...reviews];
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set the AOS animation duration to 1000ms
  }, []);
  return (
    <div data-aos="zoom-out-up overflow-hidden ">

      <div className="overflow-hidden mt-1 mb-3 p-20 bg-slate-900 w-full user-select-none">
        <h1 className='text-5xl ml-20 text-white font-semibold p-8'>Our Events</h1>
        <div className="flex animate-marquee gap-5">
          {duplicateClients.map((review) => {
            const colorStyle = colorStyles[review.id % colorStyles.length];
            return (
              <div key={review.id} className="relative my-5 min-w-[300px] max-w-[300px]">
                <div className="relative bg-gray-100 rounded-lg text-center p-6  shadow-lg h-[400px]">
                  <h6 className="text-lg font-semibold mt-10">{review.name}</h6>
                  <p className="text-gray-600">{review.position}</p>
                  <div className="flex justify-center my-5">
                    <div
                      className="w-24 h-24 flex justify-center items-center overflow-hidden"
                      style={{
                        backgroundColor: colorStyle.circleColor,
                        borderRadius: "50%",
                        zIndex: 2,
                      }}
                    >
                      <img
                        src={review.img}
                        alt="img"
                        className="w-28 h-28 scale-110 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="mt-2 mb-2">
                    <p className="italic">"{review.description}"</p>
                  </div>

                  <div className="flex justify-center items-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="text-gold w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.9 3.1 1.1-6.3L0 6.1l6.3-.9L10 0l2.7 5.2L20 6.1l-5.2 5.7 1.1 6.3L10 15z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Autoslider;
