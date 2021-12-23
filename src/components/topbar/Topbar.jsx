import React from 'react';
import './topbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            thanhtran.
          </a>
          {/* <div className="itemContainer">
            <FontAwesomeIcon className="icon" icon={faUser}></FontAwesomeIcon>
            <span className="iconSpan">+84 918 322 965</span>
          </div> */}
          <a className="itemContainer" href="mailto:thanhtran17.work@gmail.com">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <span className="iconSpan">thanhtran17.work@gmail.com</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
