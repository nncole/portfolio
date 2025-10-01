import SectionHeading from "./SectionHeading";

function Certifications({certificate}) {
  return (
    <section id="certifications" className="section">
      <SectionHeading
        title="Certifications" />
      {certificate.map((cert, key) => (
        <div className="card" key={key.id}>
          <a href={cert.url} target="_blank">
            <h2 className="card-title ref-link">
              {cert.title}
                <span>
                  <svg  className="link-icon" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </span>
            </h2>
          </a>
          <div className="card-description">
            <span className="detail">{cert.detail}</span>
            <span className="dot"></span>
            <span className="date">Obtained {cert.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Certifications;