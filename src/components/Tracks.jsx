import React from 'react';
import { motion } from 'framer-motion';
import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
  Code,
  Braces,
  Cloud,
  Figma,
  FolderKanban,
  Clapperboard,
  Gamepad2,
  Database,
} from 'lucide-react';
const Tracks = () => {
  const Fields = [
    {
      image: <Code className="w-6 h-6 text-blue-500" />,
      title: 'Web Development',
      description:
        'Learn the latest web technologies and frameworks to build dynamic and responsive websites.',
    },
    {
      image: <Braces className="w-6 h-6 text-rose-500" />,
      title: 'Backend Systems',
      description:
        'Master server-side programming and database management to create robust applications.',
    },
    {
      image: <BotMessageSquare className="w-6 h-6 text-green-500" />,
      title: 'Data & AI ',
      description:
        'Dive into the world of AI and machine learning, exploring algorithms and data science.',
    },
    {
      image: <Fingerprint className="w-6 h-6 text-purple-500" />,
      title: 'Cybersecurity',
      description:
        'Understand the principles of cybersecurity and how to protect systems from threats.',
    },
    {
      image: <Cloud className="w-6 h-6 text-red-500" />,
      title: 'Cloud Computing',
      description:
        'Explore cloud platforms and learn how to deploy and manage applications in the cloud.',
    },
    {
      image: <Figma className="w-6 h-6 text-emerald-500" />,
      title: 'Product Design',
      description:
        'Learn the principles of product design and user experience to create intuitive applications.',
    },
    {
      image: <BatteryCharging className="w-6 h-6 text-yellow-500" />,
      title: 'Mobile Development',
      description:
        'Master mobile app development for Android and iOS using popular frameworks.',
    },
    {
      image: <FolderKanban className="w-6 h-6 text-pink-500" />,
      title: 'Product Management',
      description:
        'Learn how to manage product development from ideation to launch, focusing on user needs.',
    },
    {
      image: <PlugZap className="w-6 h-6 text-orange-500" />,
      title: 'CLC & DevOps',
      description:
        'Learn about DevOps practices and tools to streamline software development and operations.',
    },
    {
      image: <GlobeLock className="w-6 h-6 text-teal-500" />,
      title: 'Web3 & Blockchain',
      description:
        'Discover blockchain technology and its applications in various industries.',
    },
    {
      image: <Gamepad2 className="w-6 h-6 text-sky-500" />,
      title: 'Games & Interactive Media',
      description:
        'Explore game development and interactive media design, focusing on creativity and technology.',
    },
    {
      image: <Database className="w-6 h-6 text-lime-500" />,
      title: 'Data Structures & Algorithms',
      description:
        'Master the fundamentals of data structures and algorithms to solve complex problems efficiently.',
    },
  ];
  return (
    <div id="tracks" className="mt-20">
      <div>
        <div className="flex flex-col items-center justify-start mb-4">
          <h1 className="text-5xl">Tracks</h1>
          <p className="text-lg text-[#FD2C25]">Focus Areas</p>
        </div>
        <p className="text-center px-2 pb-4 mb-5 text-neutral-500">
          Explore our diverse tracks designed to help you grow as a developer.
        </p>
        <div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
              {Fields.map((field, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1.5 }}
                >
                  <div className="mb-4">{field.image}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {field.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {field.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
