import React from 'react';

import Image from '../assets/img/studying.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-[445px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Zarrar Shaikh
              </h2>
              <p className='mb-4 text-accent'>
                DevOPS Engineer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I have 4 years of professional work experience working as a backend and devops engineer at various startups.
                Am always eager to learn new languages, frameworks and tools to be able to deliver with high fidelity.
                Currently I work as a consultant for a company while also pursuing a web designing course at Humber College.
                I've been learning tools such as Photoshop and Adobe After Effects and have found a new hobby in working with them.<br/>
                <br/>
                Coding is my hobby and passion and a career now. Besides coding, I like playing games on my computer. And
                when am not doing either of those, I am usually watching an anime or some sci-fi content on the internet.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
