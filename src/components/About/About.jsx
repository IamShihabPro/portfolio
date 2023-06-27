import React from 'react';

const About = () => {
  return (
    <section name='About' className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"  data-aos="fade-up"
          data-aos-delay="200">About Me</h2>
          <p className="text-white mb-8"  data-aos="fade-up"
          data-aos-delay="200">
            Hi, I'm Md Shihab, a passionate web developer with experience in building responsive and user-friendly web applications. I have expertise in HTML, CSS, JavaScript, and React, and I enjoy creating intuitive and visually appealing interfaces.
          </p>
          <p className="text-white mb-8"  data-aos="fade-up"
          data-aos-delay="200">
            I love turning complex problems into simple, elegant, and efficient solutions. With a strong attention to detail and a focus on user experience, I strive to deliver high-quality code that meets the needs of clients and end-users.
          </p>
          <p className="text-white mb-8"  data-aos="fade-up"
          data-aos-delay="200">
            When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying outdoor activities. I'm always excited to learn and grow in the ever-evolving field of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
