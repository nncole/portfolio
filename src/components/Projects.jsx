import SectionHeading from "./SectionHeading";

function Projects({project}) {
  return (
    <section id="projects" className="section">
      <SectionHeading
        title="Projects" />
      {project.map((proj, key) => (
        <div className="card" key={key.id}>
          <a href={proj.url} target="_blank">
            <h2 className="card-title ref-link">
              {proj.title} 
                <span>
                  <svg  className="link-icon" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </span>
              {proj.isWIP ? <span className="wip"> (wip)</span> : null}
            </h2>
          </a>
          <div className="card-description">
            <span className="detail">{proj.detail}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;