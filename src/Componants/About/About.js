import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <p className='about-me'><b>About Me</b></p>
      <div className='about-container'>
        <div className='img-container'>
          <img className='img-sekhar' src='/Assets/Sekhar.JPG' alt='Sekhar' />
        </div>
        <div className='about'>
          <p className='about-content'>
            Hello! I'm a dedicated full-stack developer with a passion for building robust and scalable web applications.
            I specialize in creating seamless user experiences on the frontend using technologies like React, HTML, CSS, and JavaScript,
            paired with strong backend expertise. My backend skills include working with Node.js, Express, MongoDB, SQL, and PostgreSQL,
            enabling me to design and manage efficient databases and APIs. Whether it's crafting dynamic interfaces or implementing powerful server-side logic,
            I focus on delivering high-quality solutions tailored to user needs.
          </p>
          <div className='dwnld-cv'>
            <button>Download</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
