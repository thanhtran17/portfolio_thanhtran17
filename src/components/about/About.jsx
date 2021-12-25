import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <h1>ABOUT ME</h1>
      <div className="container">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/man3.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="rightContainer">
            <h3>
              I'm a Front End Developer and also a Learner from Ninh Binh,
              VietNam.
            </h3>
            <h3>
              I currently learning ReactJS in order to build Website UI.
              Besides, I keen on discovering Geography, playing Sports,
              listening to Music, watching Western Sitcom and other stuffs.
              Furthermore, I am always energetic and eager to learn new things.
            </h3>
            <h3>
              If you want to get in touch, feel free to{' '}
              <a href="#contact">contact</a> with me.
            </h3>
            <hr size="1" />
            <div className="basicInfo smallHidden">
              <h2>Timeline</h2>
              <div className="info">
                <div className="leftInfo">
                  <h3> Luong Van Tuy High School for the Gifted 📓</h3>
                  <h3> Hanoi University of Science and Technology 📓</h3>
                  <h3> Pippip.vn (ReactJS Intern) 💻</h3>
                </div>
                <div className="rightInfo">
                  <h3>2016 - 2019</h3>
                  <h3>2019 - Now </h3>
                  <h3>2021 - 2022</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
