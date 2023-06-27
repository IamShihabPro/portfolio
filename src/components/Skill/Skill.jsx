import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import jsIcon from '../../assets/images/js.webp';
import tailwindIcon from '../../assets/images/tailwind.png';
import bootstrapIcon from '../../assets/images/bootstrap.png';
import mongodbIcon from '../../assets/images/mongodb.png';
import nextIcon from '../../assets/images/next.png';
import reactIcon from '../../assets/images/react.png';
import nodeIcon from '../../assets/images/node.png';
import expressIcon from '../../assets/images/express.png';
// Add other skill icons here...

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const skills = [

    { name: 'JavaScript', level: 'Advanced', icon: jsIcon },
    { name: 'Node', level: 'Advanced', icon: nodeIcon },
    { name: 'Express', level: 'Advanced', icon: expressIcon },
    { name: 'Mongo DB', level: 'Advanced', icon: mongodbIcon },
    { name: 'React', level: 'Advanced', icon: reactIcon },
    { name: 'Next', level: 'Advanced', icon: nextIcon },
    // Add other skills here...
  ];

  return (
    <section name="Skill" className="bg-gray-950 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-bold mb-6 text-center text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={200 * index}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white">
                {skill.name}
              </h3>
              <p className="text-white">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
