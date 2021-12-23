import React from 'react';
import './menu.scss';
export default function Menu({ menuOpen, setMenuOpen }) {
  const liOnClick = () => setMenuOpen(false);

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={liOnClick}>
          <a href="#intro">HOME</a>
        </li>
        <li onClick={liOnClick}>
          <a href="#about">ABOUT</a>
        </li>
        <li onClick={liOnClick}>
          <a href="#works">WORKS</a>
        </li>
        <li onClick={liOnClick}>
          <a href="#rewards">MOMENTS</a>
        </li>
        <li onClick={liOnClick}>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}
