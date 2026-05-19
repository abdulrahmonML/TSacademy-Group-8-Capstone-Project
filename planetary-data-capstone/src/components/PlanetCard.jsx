import "./PlanetCard.css";

const planetImages = {
  Mercury:
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
  Venus:
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  Earth:
    "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  Jupiter:
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  Saturn:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  Uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  Neptune:
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
  Pluto:
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg",
};

function PlanetCard({ planet }) {
  return (
    <figure className="planet-card">
      <img src={planetImages[planet.planet]} alt={planet.planet} />
      <figcaption>
        <p className="planet-name">{planet.planet}</p>
        <p className="planet-distance">
          {planet.distanceFromSun} million km from Sun
        </p>
      </figcaption>
    </figure>
  );
}

export default PlanetCard;
