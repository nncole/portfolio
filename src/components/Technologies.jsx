import SectionHeading from "./SectionHeading";

function Technologies({technology}) {
  return (
    <section id="technologies" className="section">
      <SectionHeading
        title="Technologies" />
      <div id="technologies-list">
      {technology.map((tech, key) => (
        <span key={key}>{tech}</span>
      ))}
      </div>
    </section>
  );
}

export default Technologies;