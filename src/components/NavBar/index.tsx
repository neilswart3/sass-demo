import React from 'react';
import NavItem from './NavItem';

const NavBar: React.FC = () => {
  return (
    <div className='NavBar'>
      <ul>
        <NavItem href='/' text='Home' />
        <NavItem href='/about' text='About' />
      </ul>
    </div>
  );
};

export default NavBar;
