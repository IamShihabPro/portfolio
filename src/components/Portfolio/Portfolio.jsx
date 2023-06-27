import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import project1 from '../../assets/Skill/jobHunt.png';
import project2 from '../../assets/Skill/summerCamp.png';
import project3 from '../../assets/Skill/nextPage.png';
import project4 from '../../assets/Skill/AiHub.png';
import project5 from '../../assets/Skill/geo.png';
import project6 from '../../assets/Skill/shoe.png';
// Add other project images here...

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const projects = [
    {
      name: 'Job Hunter',
      image: project1,
      githubLink: 'https://github.com/IamShihabPro/react-career-hub',
      liveLink: 'https://profound-syrniki-1034b0.netlify.app',
      likes: 10,
    },
    {
      name: 'Art & Craft',
      image: project2,
      githubLink: 'https://github.com/IamShihabPro/summer-camp-client',
      liveLink: 'https://summer-camp-7583b.web.app',
      likes: 15,
    },
    {
      name: 'Book Shop',
      image: project3,
      githubLink: 'https://github.com/IamShihabPro/nextPage-complete',
      liveLink: 'https://storied-brigadeiros-ebe023.netlify.app',
      likes: 5,
    },
    {
      name: 'Ai Universe',
      image: project4,
      githubLink: 'https://github.com/IamShihabPro/API-data-project',
      liveLink: 'https://strong-semifreddo-0130f6.netlify.app',
      likes: 10,
    },
    {
      name: 'Geometry Genius',
      image: project5,
      githubLink: 'https://github.com/IamShihabPro/DOM-area-calculation',
      liveLink: 'https://regal-tartufo-05909e.netlify.app',
      likes: 15,
    },
    {
      name: 'Shoes',
      image: project6,
      githubLink: 'https://github.com/IamShihabPro/responsive-shoes',
      liveLink: 'https://resplendent-bavarois-15b0ab.netlify.app',
      likes: 5,
    },
    // Add other projects here...
  ];

  return (
    <section name="Portfolio" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-bold mb-6 text-center text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-gray-900 rounded-lg shadow-md flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={200 * index}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.name}
              </h3>
              <div className="flex items-center mb-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-white hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-white hover:scale-105"
                >
                  Live
                </a>
                {/* <span className="text-white ml-1 hover:scale-105"> <a href={project.liveLink}> Live </a> </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
