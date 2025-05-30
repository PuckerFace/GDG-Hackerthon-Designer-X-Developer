import React from 'react';
import Banner from '../assets/Banner.webp';
import datacamp from '../assets/datacamp.webp';
import parallex from '../assets/parallex.webp';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
// import babcock from '../assets/babcock.jpg';
const containerVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // only trigger once
    threshold: 0.3, // trigger when 30% visible
  });

  return (
    <div className="bg-neutral-50 text-neutral-700 pt-6 lg:pt-10  ">
      <div className="lg:py-8 block py-4  px-3  sm:flex items-center justify-center">
        <motion.img
          src={Banner}
          alt=""
          className="w-full lg:w-5xl rounded-md "
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVarients}
        className="flex flex-col items-center justify-center text-center"
      >
        <motion.h1
          variants={childVarients}
          className=" text-xl sm:text-2xl lg:text-4xl"
        >
          GDG on Campus Babcock University - Ilishan-Remo, Nigeria
        </motion.h1>
        <div className="mt-2 px-2">
          {' '}
          <motion.p
            variants={childVarients}
            className="text-sm sm:text-[15px] lg:text-lg font-medium text-neutral-600"
          >
            <span className="text-[#FD2C25]">Build.</span>{' '}
            <span className="text-[#FFBA00]">Learn.</span>{' '}
            <span className="text-[#00A150]">Connect.</span> With GDG On Campus
            Babcock University
          </motion.p>
        </div>
      </motion.div>

      <div
        ref={ref}
        className="flex justify-center items-center mt-10 gap-4  md:gap-8"
      >
        {/* <p className="text-lg font-medium text-neutral-600 mt-2">
                Join us in our mission to empower students through technology and
                innovation.
            </p> */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 bg-white px-6 py-2 sm:w-[250px] sm:h-[100px] w-[110px] rounded-lg shadow-md">
          <p className="text-lg sm:text-4xl font-semibold ">
            {inView && <CountUp end={1107} duration={2.75} useEasing={false} />}
          </p>

          <div className="leading-[1.1] text-neutral-500 text-center lg:text-left">
            <p>Group</p>
            <p> Members</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 bg-white px-6 py-2 sm:w-[250px] sm:h-[100px] w-[110px] rounded-lg shadow-md  ">
          <p className="text-lg sm:text-4xl font-semibold">
            {inView && <CountUp end={30} duration={2.8} useEasing={false} />}+
          </p>
          <div className="leading-[1.1] text-neutral-500 text-center lg:text-left">
            <p>Events &</p>
            <p>Hackerthons</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 bg-white px-6 py-2 sm:w-[250px] sm:h-[100px] w-[110px] rounded-lg shadow-md ">
          <p className="text-lg sm:text-4xl font-semibold">
            {inView && <CountUp end={13} duration={3} useEasing={false} />}+
          </p>
          <div className="leading-[1.1] text-neutral-500 text-center lg:text-left">
            <p>Tracks &</p>
            <p>Specializtions</p>
          </div>
        </div>
      </div>

      {/* <hr className="mt-10 border border-[#2B82FB]" /> */}
      <div className="flex my-20 flex-col items-center justify-center text-center gap-3 ">
        {' '}
        <p className="text-lg text-center md:text-3xl">
          What are you waiting for?
        </p>
        <button className="bg-[#2B82FB] text-white px-4 py-2 rounded-md hover:bg-[#1a5bbf] transition-colors ">
          Become a Memeber Today!
        </button>
      </div>

      <motion.div
        className="flex items-center justify-evenly  text-center mt-10 gap-4 sm:gap-8 bg-blue-50 py-2"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-[15px] md:text-3xl font-semibold text-neutral-700">
          In Partnership With
        </h2>
        <div className="flex gap-4 justify-between ">
          <img src={datacamp} alt="" className="w-[100px] md:w-[200px]" />
          <img src={parallex} alt="" className="w-[100px] md:w-[200px]" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
