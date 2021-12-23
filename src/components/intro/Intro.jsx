import React from 'react';
import './intro.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      cursorChar: '│',
      backDelay: 1000,
      backSpeed: 40,
      strings: [
        'Web Development',
        'Linux',
        'Graphic Design',
        'Technology',
        'Geography',
        'ANYTHING',
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>TRẦN PHÚC THÀNH</h1>
          <h3>
            I learn <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="down.png"></img>
        </a>
      </div>
    </div>
  );
}
