import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Technologies from "./components/Technologies.jsx";

import { certificate, technology } from "./data.js";

function App() {
  return (
    <>
      <Hero />
      <Education />
      <Certifications certificate={certificate} />
      <Technologies technology={technology} />
    </>
  )
}

export default App;
