import { useState, useEffect } from "react";
import PlanetCard from "./PlanetCard";
import "./PlanetsGrid.css";

function PlanetsGrid() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((response) => response.json())
      .then((data) => setPlanets(data));
  }, []);

  return (
    <section className="planets-section" id="planets">
      <h2 className="planets-title">
        Visualizing the Differences Between Planets
      </h2>
      <p className="planets-subtitle">
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      <div className="planets-grid">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
    </section>
  );
}

export default PlanetsGrid;
