/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href='#'
        className='menu-item-fb'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button-fb'>{props.leftIcon}</span>
        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className='dropdown-fb'
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu-fb'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu='settings'
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon='🦧'
            rightIcon={<ChevronIcon />}
            goToMenu='animals'
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu-fb'>
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu='main'>
            <h2>Setting</h2>{' '}
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}> Settings</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}> Settings</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}> Settings</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon='🦘'>Kangaroo</DropdownItem>
          <DropdownItem leftIcon='🐸'>Frog</DropdownItem>
          <DropdownItem leftIcon='🦋'>Horse?</DropdownItem>
          <DropdownItem leftIcon='🦔'>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
