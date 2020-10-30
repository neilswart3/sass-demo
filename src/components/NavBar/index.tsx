import React from 'react';
import NavItem from './NavItem';

const NavBar: React.FC = () => {
  return (
    <div className='NavBar'>
      <ul>
        <NavItem href='/' text='Home' />
        <NavItem href='/mixins' text='Mixins' />
        <NavItem href='/placeholders' text='Placeholders' />
        <NavItem href='/ampersand' text='Ampersand' />
        <NavItem href='/lists-maps-loops' text='Lists Maps Loops' />
        <NavItem href='/built-in-modules' text='Built In Modules' />
        {/* <NavItem href='/at-rules' text='@rules' /> */}
      </ul>
    </div>
  );
};

export default NavBar;
