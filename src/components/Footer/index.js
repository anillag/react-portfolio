import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex-row">
        <div className="title"></div>
        <div className="titletext">
          <ul>
            <li>
              <a href="tel:+19045551234">+1 (904) 555-1234</a>
            </li>
            <li>
              <a href="mailto:joe@domain.com">joe@domain.com</a>
            </li>
            <li>
              <a href="https://github.com/anillag">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joe-gallina-229091234/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
