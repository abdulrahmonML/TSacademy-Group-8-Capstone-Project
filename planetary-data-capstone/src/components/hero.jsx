import "./Hero.css";
import planetImage from "../assets/planet.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>

        <p>
          Understand the planets not just by name, but by measurable facts. From
          size and mass to gravity and density, this page breaks down the solar
          system in a clear, data-driven way.
        </p>

        <div className="hero-buttons">
          <a href="#planets" className="btn-primary">
            Explore the Data
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={planetImage} alt="Planet" />
      </div>
    </section>
  );
}

export default Hero;
