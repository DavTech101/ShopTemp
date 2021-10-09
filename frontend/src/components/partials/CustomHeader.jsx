import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';

const CustomHeader = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
};

export default CustomHeader;
