import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";

import { certificate } from "./data.js";

function App() {
  return (
    <>
      <Hero />
      <Education />
      <Certifications certificate={certificate} />
    </>
  )
}

export default App;
