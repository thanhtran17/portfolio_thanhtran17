import React from 'react';
import './contact.scss';
import {
  FacebookFilled,
  LinkedinFilled,
  SlackCircleFilled,
  InstagramFilled,
  GithubFilled,
  PhoneFilled,
  MailFilled,
  HomeFilled,
  IeCircleFilled,
  EnvironmentFilled,
  BookFilled,
} from '@ant-design/icons';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>CONTACT</h1>
      <div className="container">
        <div className="left">
          <div className="leftContainer">
            <div className="part">
              <div className="smallIcon">
                <PhoneFilled className="icons" />
              </div>
              <h3 className="h3">0918322965</h3>
            </div>
            <div className="part">
              <div className="smallIcon">
                <MailFilled className="icons" />
              </div>
              <h3 className="h3">thanhtran17.work@gmail.com</h3>
            </div>
            <div className="part">
              <div className="smallIcon">
                <IeCircleFilled className="icons" />
              </div>
              <h3 className="h3">thanhtran.tech</h3>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="rightContainer">
            <div className="part">
              <div className="smallIcon">
                <BookFilled className="icons" />
              </div>
              <h3 className="h3">Hanoi University of Science and Technology</h3>
            </div>
            <div className="part">
              <div className="smallIcon">
                <EnvironmentFilled className="icons" />
              </div>
              <h3 className="h3">
                CT16 Hong Ha Eco City, Tu Hiep, Thanh Tri, Ha Noi
              </h3>
            </div>
            <div className="part">
              <div className="smallIcon">
                <HomeFilled className="icons" />
              </div>
              <h3 className="h3">
                108 Nguyen Viet Xuan, Ninh Binh City, Ninh Binh
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="iconsContainer">
          <a href="https://www.facebook.com/thanhtran.17/" target="_blank">
            <FacebookFilled title="Facebook" className="icons" />
          </a>
          <a href="mailto:thanhtran17.work@gmail.com">
            <SlackCircleFilled title="Slack" className="icons" />
          </a>
          <a href="https://www.instagram.com/thanhtran17_/" target="_blank">
            <InstagramFilled title="Instagram" className="icons" />
          </a>
          <a href="https://github.com/thanhtran17" target="_blank">
            <GithubFilled title="Github" className="icons" />
          </a>
          <a href="https://www.instagram.com/thanhtran17_/" target="_blank">
            <LinkedinFilled title="LinkedIn" className="icons last" />
          </a>
        </div>
      </div>
    </div>
  );
}
