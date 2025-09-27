import SectionHeading from "./SectionHeading.jsx"

function Education() {
  return (
    <section id="education">
        <SectionHeading
          title="Education" />
        <div className="card">
          <h2 className="card-title">Bachelor of Science in Computer Science</h2>
          <div className="card-description">
            <span className="detail">Manila, Philippines</span>
            <span className="dot"></span>
            <span className="date">Graduated July 2025</span>
          </div>
        </div>
      </section>
  );
}

export default Education;