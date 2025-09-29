import SectionHeading from "./SectionHeading";

function Technologies({technology}) {
  return (
    <section id="technologies">
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