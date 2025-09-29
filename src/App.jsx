import UpperNav from "./components/UpperNav.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";

import { certificate, technology, project } from "./data.js";


function App() {
  return (
    <>
      <UpperNav />
      <Hero />
      <Education />
      <Certifications certificate={certificate} />
      <Technologies technology={technology} />
      <Projects project={project} />
    </>
  )
}

export default App;
