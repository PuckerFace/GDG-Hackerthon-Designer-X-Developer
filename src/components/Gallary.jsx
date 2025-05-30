import React, { useState } from 'react';
import image from '../assets/image00044.jpeg';
import image1 from '../assets/image00020.jpeg';
import image2 from '../assets/image00021.jpeg';
import image3 from '../assets/image00022.jpeg';
import image4 from '../assets/image00023.jpeg';
import image5 from '../assets/image00029.jpeg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Gallary = () => {
  const images = [
    {
      url: image,
    },
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div
      id="gallary"
      className="bg-white mt-20 flex flex-col p-3 items-center justify-center text-neutral-700"
    >
      <div className="flex flex-col items-center justify-start mb-4">
        <h1 className="text-5xl">Gallery</h1>
        <p className="text-lg">Our Events</p>
      </div>
      <p className="text-center pb-4 mb-5 text-neutral-500">
        Explore our gallery to see the highlights from our events and
        activities.
      </p>
      <div className="w-full h-[500px] p-4 flex justify-center relative overflow-hidden">
        <div
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          className="h-full w-3/4 bg-center object-contain bg-cover rounded-lg shadow-md mb-6"
        ></div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <ChevronLeft
            className="w-10 h-10 text-white bg-gray-800 rounded-full p-1 cursor-pointer"
            onClick={handlePrev}
          />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <ChevronRight
            className="w-10 h-10 text-white bg-gray-800 rounded-full p-1 cursor-pointer"
            onClick={handlePrev}
          />
        </div>
      </div>
      <div>
        {' '}
        <button className="bg-[#2B82FB] text-white px-4 py-2 rounded-md hover:bg-[#1a5bbf] transition-colors ">
          Join Us!
        </button>
      </div>
    </div>
  );
};

export default Gallary;
