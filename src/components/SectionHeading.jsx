function SectionHeading(props) {
  return (
    <div className="section-heading">
      <div className="divider"></div>
      <h2 className="section-title">{props.title}</h2>
    </div>
  );
}

export default SectionHeading;