import React from 'react';
import AILead from '../assets/AILead.png';
import Web3Lead from '../assets/Web3Lead.jpg';
import weblead from '../assets/weblead.png';
import DataLead from '../assets/DataLead.PNG';
import productLead from '../assets/ProductManagementTrackLead.png';
import cyberLead from '../assets/CybersecurityLead.jpg';
import designLead from '../assets/ProductDesignLead.jpg';
import MobileLead from '../assets/MobileLead.jpeg';
import backendLead from '../assets/backendead.png';
import { motion } from 'framer-motion';

// web3 Ayomide Soji-Oni
// web development lead Victor Ibironke
// data Dunmade Olorundamisi
// product IDUMU IMMANUEL C
//

const Team = () => {
  const Leads = [
    {
      image: AILead,
      name: 'Anjolaoluwa Ajayi ',
      title: 'Data & AI Lead',
    },
    {
      image: weblead,
      name: 'Victor Ibironke',
      title: 'Web Development Lead',
    },
    {
      image: backendLead,
      name: 'collins ikotun',
      title: 'Backend Systems Lead',
    },
    {
      image: DataLead,
      name: 'Dunmade Olorundamisi',
      title: 'Data Structures & Algorithms Lead',
    },
    {
      image: cyberLead,
      name: 'Oluwatomilola Arogundade',
      title: 'Cybersecurity Lead',
    },
    {
      image: productLead,
      name: 'Oluwatomilola Arogundade',
      title: 'Cloud Computing Lead',
    },
    {
      image: designLead,
      name: 'Osisanya Oluwadayomisi',
      title: 'Product Design Lead',
    },
    {
      image: MobileLead,
      name: 'Ikeaba Adrian ',
      title: 'Mobile Development Lead',
    },
    {
      image: Web3Lead,
      name: 'Ayomide Soji-Oni',
      title: 'Web3 Lead',
    },
  ];
  return (
    <div className="mt-20">
      {' '}
      <div>
        <div className="flex flex-col items-center justify-start mb-4">
          <h1 className="text-5xl">Meet the Team</h1>
          <p className="text-lg text-[#00A150]">
            that makes all the magic happen
          </p>
        </div>
        <p className="text-center pb-4 mb-5 text-neutral-500">
          Our team is dedicated to empowering students through technology and
          innovation.
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {Leads.map((lead, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={lead.image}
                  alt={lead.title}
                  className=" rounded-md mb-2 w-[250px] h-[250px] object-cover"
                />
                <h2>{lead.name}</h2>
                <h3 className="text-xl font-semibold text-center">
                  {lead.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
