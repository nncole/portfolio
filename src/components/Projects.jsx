import SectionHeading from "./SectionHeading";

function Projects({project}) {
  return (
    <section id="projects" className="section">
      <SectionHeading
        title="Projects" />
      {project.map((proj, key) => (
        <div className="card" key={key.id}>
          <h2 className="card-title">
            {proj.title}
            {proj.isWIP ? <span className="wip"> (wip)</span> : null}
          </h2>
          <div className="card-description">
            <span className="detail">{proj.detail}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;