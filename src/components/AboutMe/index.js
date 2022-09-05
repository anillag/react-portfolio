import React from "react";
import avatar from "../../assets/img/avatar.png";

function AboutMe() {
  return (
    <header>
      <div className="flex-row">
        <div className="title">
          <h1 id="about-me">About Me</h1>
          <img src={avatar} alt="avatar" height="100px" width="100px" />
        </div>
        <div className="titletext">
          <h3>
            Joe Gallina is an aspiring web development coder, as a soon-to-be
            graduate of the UCF Coding Bootcamp program (administered by Trilogy
            Education Services). From his first GeoCities account to his modern
            endeavors in React, Joe can pick up anything that's put down in
            front of him! Someone should really hire this guy!
          </h3>
        </div>
      </div>
    </header>
  );
}

export default AboutMe;
