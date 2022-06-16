import React from 'react';

import { navigation } from '../data';

import { Link } from 'react-scroll';

const Nav = () => {

  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {

          const isPortfolioPage = window.location.href.includes('/portfolio');
          const isContactPage = window.location.href.includes('/contact');
          const isPageNav = ['portfolio', 'contact'].includes(item.name.toLowerCase());

          let route = `/${item.name}`;
          if((isPortfolioPage || isContactPage) && ['home', 'about'].includes(item.name.toLowerCase())) {
            route = ['home'].includes(item.name.toLowerCase()) ? '/' : '/#about';
          }

          if(isPortfolioPage || isContactPage || isPageNav) {
            return (
              <li
                className='text-white hover:text-accent cursor-pointer'
                key={idx} onClick={() => {window.location.href=`${route}`}}
              >
                {item.name}
              </li>
            )
          } else {
            return (
              <li
                className='text-white hover:text-accent cursor-pointer'
                key={idx}
              >
                <Link
                  to={item.href}
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className='transition-all duration-300'
                >
                  {item.name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Nav;
