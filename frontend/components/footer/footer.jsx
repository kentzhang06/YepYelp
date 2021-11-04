import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>YepYelp by Kent Zhang</p>
      <div className="right-bio-links">
        <p className="github">
          <a target="_blank" href="https://github.com/kentzhang06">
            <ion-icon name="logo-github"></ion-icon>
            <span>GitHub</span>
          </a>
        </p>
        <p className="linkedin">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kent-zhang-297591193/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
            <span>LinkedIn</span>
          </a>
        </p>
        <p className="angellist">
          <a target="_blank" href="https://angel.co/u/kent-zhang">
            <span className="iconify" data-icon="logos:angellist"></span>
            <span>AngelList</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;