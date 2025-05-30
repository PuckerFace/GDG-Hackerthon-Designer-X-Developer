import React, { useEffect, useState } from 'react';
import image from '../assets/image00044.jpeg';
import image1 from '../assets/image00020.jpeg';
import image2 from '../assets/image00021.jpeg';
import image3 from '../assets/image00022.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
const About = () => {
  const images = [
    {
      image: image,
    },
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    if (!hovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval); // Clean up on unmount
    }
  }, [hovering, images.length]);
  return (
    // bg-gray-900

    <div className="bg-white mt-20 text-neutral-700 " id="about">
      {/* */}
      {/* Community Driven
      
       */}
      {/*Inclusive Environment
      
        */}
      <section className="">
        <div className="flex flex-col items-center justify-start mb-4">
          <h1 className="text-5xl">About GDG </h1>
          <p className="text-lg text-[#2B82FB]">on Campus BU</p>
        </div>
        <p className="text-center">What is GDG On Campus?</p>
        <div className="flex flex-col lg:flex-row mt-10 p-4 items-start justify-center lg:justify-evenly gap-3 lg:gap-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start justify-center gap-4 w-full lg:w-[500px]"
          >
            <p>
              GDG On Campus BU is a student-led tech community passionate about
              helping students grow as developers through hands-on learning,
              networking, and real-world projects.
            </p>
            <p>
              {' '}
              Google Developer Groups (GDGs) are community groups for developers
              who are interested in Google's developer technology.
            </p>{' '}
          </motion.div>
          <motion.div
            className="relative w-full sm:w-[580px] h-[400px] cursor-pointer mt-6 md:mt-0"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <AnimatePresence>
              {images.map((img, index) =>
                index === currentIndex ? (
                  <motion.img
                    key={img.image}
                    src={img.image}
                    className=" w-full lg:w-[500px] rounded-md object-contain absolute "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                ) : null
              )}
            </AnimatePresence>
          </motion.div>
          {/* 
          <img
            src={image}
            alt=""
            className="object-contain w-[450px] rounded-md"
          /> */}
        </div>
        <div className="flex  flex-col lg:flex-row-reverse mt-0 lg:mt-10 p-4 items-start justify-evenly gap-8">
          <motion.div
            className="flex flex-col items-start justify-center w-full  gap-4 lg:w-[500px]"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <p>
              {' '}
              They are open to all developers, regardless of their skill level
              or experience.
              <br /> GDGs are driven by the community, for the community.
            </p>
            <p>
              We organize events, workshops, and meetups to share knowledge and
              foster collaboration.
              <br />
              We welcome developers of all backgrounds and skill levels. <br />{' '}
              Our goal is to create an inclusive environment where everyone can
              learn and grow.
            </p>
          </motion.div>
          <motion.div
            className="relative w-full sm:w-[580px] h-[400px] cursor-pointer mt-6 md:mt-0"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <AnimatePresence>
              {images.map((img, index) =>
                index === currentIndex ? (
                  <motion.img
                    key={img.image}
                    src={img.image}
                    className="w-[500px] rounded-md object-contain absolute "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                ) : null
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
