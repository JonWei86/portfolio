import React from "react";

export const About = () => {
  const gallery = [];

  return (
    <div id="about">
      <h2 className="section-title">About Me</h2>
      <div className="gallery-container">
        <button className="gallery-button"> &lt; </button>
        <div className="gallery"></div>
        <button className="gallery-button">&gt;</button>
      </div>
      <p className="about-p">
        Hello, my name is Jon. I am a jack of all trades. I create digitally and
        physically. I have experience in front end development, back end
        development, and WordPress, as well as experience in graphic design and
        3D modeling. I also have experience in carpentry and 3D printing as well
        as embedded software development with Aurdino.
      </p>
    </div>
  );
};
