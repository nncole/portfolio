import SectionHeading from "./SectionHeading";

function Certifications({certificate}) {
  return (
    <section id="certifications">
      <SectionHeading
        title="Certifications" />
       {certificate.map((cert, key) => (
          <div className="card" key={key.id}>
            <h2 className="card-title">{cert.title}</h2>
            <div className="card-description">
              <span className="detail">{cert.detail}</span>
              <span className="dot"></span>
              <span className="date">Obtained {cert.date}</span>
            </div>
          </div>)
        )}
    </section>
      
  );
}

export default Certifications;