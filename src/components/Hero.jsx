function Hero() {
  return (
    <section id="hero">
      <div id="introduction">
        <h1>Hi there, I'm Nicole</h1>
        <div className="heart">&#128151;</div>
      </div>
      <p>I'm an aspiring front-end developer slash UI/UX designer based in Manila, Philippines. Currently, I'm dedicating my time to learning and improving my skills in front-end development.</p>
      <div id="introduction-cta">
        <div className="status">Open for Work</div>
        <a href="/Resume.pdf" target="_blank">
          View resume
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;