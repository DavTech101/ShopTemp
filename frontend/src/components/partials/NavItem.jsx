/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item-fb'>
      <a href='#' className='icon-button-fb' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavItem;
