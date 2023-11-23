import React from "react";

export const Skills = () => {
  const frontEnd = [
    "CSS",
    "HTML",
    "JavaScript",
    "React",
    "Redux",
    "TailWindCss",
  ];
  const backEnd = [
    "ExpressJS",
    "NodeJS",
    "PostGreSQL",
    "Restful APIs",
    "SQL",
    "Sequelize",
    "Supabase",
  ];
  const other = [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Arduino",
    "Autodesk 3ds Max",
    "Figma",
    "Git",
    "GitHub",
    "Restore365",
    "VS Code",
    "WordPress",
  ];

  let section = (array) => {
    return (
      <div>
        <ul>
          {array.map((skill) => (
            <li key={array.indexOf({ skill })}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-section-container">
        <div className="skills-row" id="front-end-sec">
          <div className="skills-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 1.25h12c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5Z" />
                <path d="M4.64 5.75a1.39 1.39 0 1 0 0-2.781a1.39 1.39 0 0 0 0 2.781ZM6 10.25l-1 2.5m3-2.5l1 2.5m-5 0h6m-5.91-2.5l5.075-4.88a.48.48 0 0 1 .624 0L13.5 8.11" />
              </g>
            </svg>
            <h3>Front End</h3>
          </div>
          {section(frontEnd)}
        </div>
        <div className="skills-row" id="back-end-sec">
          <div className="skills-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.25 6c0-1.542 1.23-2.736 2.758-3.5C7.58 1.716 9.7 1.25 12 1.25s4.42.465 5.992 1.25c1.528.764 2.758 1.958 2.758 3.5v12c0 1.542-1.23 2.735-2.758 3.5c-1.572.785-3.692 1.25-5.992 1.25s-4.42-.465-5.992-1.25C4.48 20.734 3.25 19.541 3.25 18V6Zm1.5 0c0-.667.56-1.474 1.929-2.158C8.002 3.181 9.882 2.75 12 2.75s3.998.43 5.321 1.092C18.69 4.526 19.25 5.332 19.25 6c0 .667-.56 1.474-1.929 2.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092C5.31 7.474 4.75 6.668 4.75 6Zm0 12c0 .667.56 1.474 1.929 2.158c1.323.661 3.203 1.092 5.321 1.092s3.998-.43 5.321-1.092c1.368-.684 1.929-1.49 1.929-2.158v-3.293c-.377.3-.804.565-1.258.792C16.42 16.285 14.3 16.75 12 16.75s-4.42-.465-5.992-1.25a7.146 7.146 0 0 1-1.258-.793V18Zm14.5-9.293V12c0 .667-.56 1.474-1.929 2.158c-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.31 13.474 4.75 12.668 4.75 12V8.707c.377.3.804.565 1.258.792C7.58 10.285 9.7 10.75 12 10.75s4.42-.465 5.992-1.25a7.144 7.144 0 0 0 1.258-.793Z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Back End</h3>
          </div>
          {section(backEnd)}
        </div>
        <div className="skills-row" id="other-sec">
          <div className="skills-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="m5.25 2.75l-.563.531l-1.406 1.406l-.531.563l.406.656l2.094 3.5l.281.5H8.47l4 3.969c-3.574 3.59-8.121 8.152-8.281 8.313c-1.567 1.566-1.57 4.132.03 5.625c1.563 1.542 4.11 1.582 5.595 0l.03-.032L16 21.594l6.188 6.218l.093.063c1.57 1.48 4.067 1.5 5.532-.063v-.03h.03c1.532-1.567 1.548-4.114-.03-5.595l-.032-.03l-5.218-5.188c3.511-.328 6.261-3.293 6.312-6.875h.031c.004-.02 0-.043 0-.063V10c.098-1.156-.152-2.262-.75-3.219L27.47 5.72l-4.657 4.656l-1.406-1.469l4.75-4.75l-1.375-.562A7.03 7.03 0 0 0 22 3c-3.844 0-7 3.156-7 7c0 .418.09.781.156 1.156c-.437.438-.765.797-1.281 1.313L9.906 8.5V5.531l-.5-.281l-3.5-2.094zM22 5c.14 0 .238.082.375.094l-3.781 3.781l.687.719l2.813 2.906l.687.719L26.75 9.25c.02.23.184.398.156.656V10c0 2.754-2.246 5-5 5c-.367 0-.812-.086-1.312-.188l-.532-.093l-.375.375l-11.28 11.312h-.032v.032c-.71.777-1.953.796-2.781-.032v-.031h-.032c-.777-.71-.796-1.953.032-2.781c.379-.38 7.718-7.782 11.312-11.375l.407-.406l-.157-.563A6.113 6.113 0 0 1 17 10c0-2.754 2.246-5 5-5zm-16.438.25l2.344 1.438v1l-.218.218h-1L5.25 5.563zm14.625 12.156l6.22 6.188v.031h.03c.778.71.797 1.953-.03 2.781h-.032v.032c-.71.777-1.953.796-2.781-.032l-6.188-6.218z"
              />
            </svg>
            <h3>Other</h3>
          </div>
          {section(other)}
        </div>
      </div>
      <div className="skills-button-container">
        <a
          href="../src/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View My Resume</button>
        </a>
        <a download="Jon-Wei-Resume" href="../src/assets/Resume.pdf">
          <button>Download A Copy of My Resume</button>
        </a>
      </div>
    </div>
  );
};
