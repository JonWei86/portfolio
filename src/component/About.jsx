import React, {useState} from "react";

export const About = () => {
  const [counter, setCounter] = useState(0);

  const images = [
    {img: '../src/assets/img01.jpg', alt: ''},
    {img: '../src/assets/img02.jpg', alt: ''},
    {img: '../src/assets/img03.jpg', alt: ''},
    {img: '../src/assets/img04.jpg', alt: ''},
    {img: '../src/assets/img05.jpg', alt: ''},
    {img: '../src/assets/img06.jpg', alt: ''},
    {img: '../src/assets/img07.jpg', alt: ''},
    {img: '../src/assets/img08.jpg', alt: ''}];

    let currentImg = images[counter];

  function next() {
    counter < 7 ? setCounter(counter+1) : setCounter(0);
    console.log(counter)
    return counter
  }

  function back() {
    counter === 0 ? setCounter(7) : setCounter(counter - 1);
  console.log(counter)
  return counter
  }

  return (
    <div id="about">
      <h2 className="section-title">About Me</h2>
      <div className="gallery-body">
      <div className="gallery-container">
        <button className="gallery-button" onClick={back}> &lt; </button>
        <div className="gallery">
          <img src={currentImg.img} height={'450vw'}/>
        </div>
        <button className="gallery-button" onClick={next}>&gt;</button>
      </div>
      <p className="about-p">
        Hello, my name is Jon. I am a jack of all trades. I create digitally and
        physically. I have experience in front end development, back end
        development, and WordPress, as well as experience in graphic design and
        3D modeling. I also have experience in carpentry and 3D printing as well
        as embedded software development with Aurdino.
      </p>
      </div>
    </div>
  );
};
