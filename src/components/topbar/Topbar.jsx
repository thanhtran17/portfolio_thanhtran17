import React from 'react';
import './topbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo" title="Home Page">
            thanhtran.
          </a>
          <a
            className="itemContainer"
            href="mailto:thanhtran17.work@gmail.com"
            title="Mail To: thanhtran17.work@gmail.com"
          >
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
