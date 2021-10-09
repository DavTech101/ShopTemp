import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar-fb'>
      <ul className='navbar-nav-fb'>{props.children}</ul>
    </nav>
  );
};

export default Navbar;
