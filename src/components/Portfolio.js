import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-secondary min-h-[1400px] mt-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
            Collection of projects using various frameworks and tools I worked on as part of the curricullum at Humber College 
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
