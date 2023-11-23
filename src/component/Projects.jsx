import React from "react";

export const Projects = () => {
  let projects = [
    {
      title: "Shonen Throwdown",
      img: "",
      alt: "image of Shonen Throwdown",
      desc: "description of project 1",
      link: "capstone-red-zeta.vercel.app",
      linkText: "Link to Project",
    },
    {
      title: "E-Commerce Project",
      img: "image of E-commerce Project",
      alt: "",
      desc: "description of project 1",
      link: "",
    },
    {
      title: "Angular Project",
      img: "",
      alt: "",
      desc: "description of project 1",
      link: "",
    },
    {
      title: "proj4",
      img: "",
      alt: "",
      desc: "description of project 1",
      link: "",
    },
  ];

  return (
    <>
      <h2 id="projects" className="section-title">
        My Projects
      </h2>
      <div>
        {projects.map((project) => {
          return (
            <div key={projects.indexOf(project)}>
              <h3>{project.title}</h3>
              <img src={project.img} alt={project.alt} />
              <p>{project.desc}</p>
              <a href={project.link}>{project.linkText}</a>
            </div>
          );
        })}
      </div>
    </>
  );
};
