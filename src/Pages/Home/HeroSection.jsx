export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sotirios</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Software developer with work experience in mobile development. Built
            both native and cross-platform apps on Android and iOS.
            <br id="aboveContactBtn" /> Passionate about solving real-world
            problems and enhancing user experience. Team player and fast
            learner.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/sotirios-petsas/",
              "_blank"
            )
          }
        >
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
