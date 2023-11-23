import { Navbar } from "./component/Navbar";
import { Skills } from "./component/Skills";
import "./App.css";
import { About } from "./component/About";
import { Projects } from "./component/Projects";
import { Contact } from "./component/Contact";
import { NavHashLink } from "react-router-hash-link";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Hello my name is Jon</h1>
        <p>Fullstack web development and graphic design solutions</p>
        <div className="hero-buttons-container">
          <NavHashLink
            className="
          hero-buttons"
            smooth
            to={"/#contact"}
          >
            <button>Contact Me</button>
          </NavHashLink>
          <NavHashLink
            className="
          hero-buttons"
            smooth
            to={"/#projects"}
          >
            <button>My Projects</button>
          </NavHashLink>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
