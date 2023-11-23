import React from "react";

export const Contact = () => {
  let contacts = [{ title: "", icon: "", link: "", text: "" }];

  return (
    <div id="contact">
      <h2 className="section-title">Let&apos;s Get In Touch</h2>
      <button onClick={() => (window.location = "mailto:yourmail@domain.com")}>
        Send Me an Email
      </button>
      <div id="social">
        <h3>...Or Contact me through social media</h3>
        <ul>
          <a
            href="https://github.com/JonWei86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>GitHub</li>
          </a>
          <a
            href="https://www.instagram.com/jonwhey/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Instagram</li>
          </a>
          <a
            href="https://www.linkedin.com/in/wei-jon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>LinkedIn</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
