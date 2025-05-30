import React from 'react';
import '../styles/event.css'; // Import the CSS file for styling
import thumbnail from '../assets/thumbnail.webp';
const Events = () => {
  const events = [
    {
      date: 'JUN 13, 2025',
      type: 'CONFERENCE WITH BEVY VIRTUAL CONFERENCE',
      location: 'LAGOS, NG',
      title: 'Build with AI 2025',
      tags: ['AI', 'Build with AI', 'Gemini', 'Machine Learning'],
      description:
        "Build with AI events offer hands-on experience with Google's latest AI tools through interactive workshops, expert-led tech talks, and networking with developers and industry leaders.",
      image: thumbnail,
    },
    {
      date: 'AUG 5, 2025',
      type: 'IN-PERSON TECH SUMMIT',
      location: 'NAIROBI, KE',
      title: 'DevFest East Africa',
      tags: ['Web', 'Cloud', 'Firebase', 'UX/UI'],
      description:
        'An annual developers’ gathering offering talks, codelabs, and expert sessions around cutting-edge technologies for web, cloud, and mobile.',
      image: thumbnail,
    },
    {
      date: 'SEP 20, 2025',
      type: 'ONLINE WORKSHOP',
      location: 'REMOTE',
      title: 'Intro to Machine Learning',
      tags: ['Machine Learning', 'TensorFlow', 'Python'],
      description:
        'A practical introduction to building machine learning models using TensorFlow and Python, for beginner developers and data enthusiasts.',
      image: thumbnail,
    },
  ];
  return (
    // <div className="mt-20">
    //   <div>
    //     <div className="flex flex-col items-center justify-start mb-4">
    //       <h1 className="text-5xl">Events</h1>
    //       <p className="text-lg text-[#FFBA00]">& Hackerthons</p>
    //     </div>
    //     <p className="text-center pb-4 mb-5 text-neutral-500">
    //       Join us for exciting events and hackathons that foster innovation and
    //       collaboration.
    //     </p>
    //   </div>
    // </div>
    <div className=" mt-20 p-3" id="events">
      <div>
        {' '}
        <div className="flex flex-col items-center justify-start mb-4">
          <h1 className="text-5xl">Events</h1>
          <p className="text-lg text-[#FFBA00]">& Hackerthons</p>{' '}
        </div>{' '}
        <p className="text-center px-2 pb-4 mb-5 text-neutral-500">
          Join us for exciting events and hackathons that foster innovation and
          collaboration.{' '}
        </p>{' '}
      </div>
      <div className="filters">
        <input type="text" placeholder="Search for a city or region" />
        <select>
          <option>Event types</option>
        </select>
        <select>
          <option>Event topics</option>
        </select>
      </div>

      {events.map((event, index) => (
        <div className="event-item" key={index}>
          <div className="event-image">
            <img src={event.image} alt="picture" />
          </div>
          <div className="event-details">
            <p className="event-meta">
              {event.date} - {event.type} -{' '}
              <span className="event-location">{event.location}</span>
            </p>
            <h2 className="event-title">{event.title}</h2>

            <div className="tags">
              {event.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <p className="event-description">{event.description}</p>

            <button className="details-button">View details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
