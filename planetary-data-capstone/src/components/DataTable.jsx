import "./DataTable.css";

const planets = [
  {
    name: "Mercury",
    mass: 0.33,
    diameter: 4878,
    density: 5427,
    gravity: 3.7,
    category: "Terrestrial Planets",
    rowSpan: 4,
  },
  { name: "Venus", mass: 4.87, diameter: 12104, density: 5243, gravity: 8.9 },
  { name: "Earth", mass: 5.97, diameter: 12756, density: 5514, gravity: 9.8 },
  { name: "Mars", mass: 0.642, diameter: 6792, density: 3933, gravity: 3.7 },
  {
    name: "Jupiter",
    mass: 1898,
    diameter: 142984,
    density: 1326,
    gravity: 23.1,
    subCategory: "Gas Giants",
    subRowSpan: 2,
    parentCategory: "Jovian Planets",
    parentRowSpan: 4,
  },
  { name: "Saturn", mass: 568, diameter: 120536, density: 687, gravity: 9.0 },
  {
    name: "Uranus",
    mass: 86.8,
    diameter: 51118,
    density: 1271,
    gravity: 8.7,
    subCategory: "Ice Giants",
    subRowSpan: 2,
  },
  { name: "Neptune", mass: 102, diameter: 49528, density: 1638, gravity: 11.0 },
  {
    name: "Pluto",
    mass: 0.0146,
    diameter: 2370,
    density: 2095,
    gravity: 0.7,
    category: "Dwarf Planets",
    rowSpan: 1,
  },
];

function DataTable() {
  return (
    <section className="datatable-section">
      <h2 className="datatable-title">Planetary Facts at a Glance</h2>
      <p className="datatable-subtitle">
        Below is a comparative table of major planets in our solar system. The
        data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>

      <p className="datatable-source">
        Data about the planets of our solar system (Planetary facts taken from
        NASA)
      </p>

      <div className="datatable-wrapper">
        <table className="datatable">
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th>Name</th>
              <th>Mass (10^24kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m3)</th>
              <th>Gravity (m/s2)</th>
            </tr>
          </thead>
          <tbody>
            {/* Terrestrial Planets */}
            <tr>
              <td className="category-cell" rowSpan={4}>
                Terrestrial Planets
              </td>
              <td></td>
              <td>Mercury</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5,427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td></td>
              <td>Venus</td>
              <td>4.87</td>
              <td>12,104</td>
              <td>5,243</td>
              <td>8.9</td>
            </tr>
            <tr>
              <td></td>
              <td>Earth</td>
              <td>5.97</td>
              <td>12,756</td>
              <td>5,514</td>
              <td>9.8</td>
            </tr>
            <tr>
              <td></td>
              <td>Mars</td>
              <td>0.642</td>
              <td>6,792</td>
              <td>3,933</td>
              <td>3.7</td>
            </tr>

            {/* Jovian - Gas Giants */}
            <tr>
              <td className="category-cell" rowSpan={4}>
                Jovian Planets
              </td>
              <td className="subcategory-cell" rowSpan={2}>
                Gas Giants
              </td>
              <td>Jupiter</td>
              <td>1,898</td>
              <td>142,984</td>
              <td>1,326</td>
              <td>23.1</td>
            </tr>
            <tr>
              <td>Saturn</td>
              <td>568</td>
              <td>120,536</td>
              <td>687</td>
              <td>9.0</td>
            </tr>

            {/* Jovian - Ice Giants */}
            <tr>
              <td className="subcategory-cell" rowSpan={2}>
                Ice Giants
              </td>
              <td>Uranus</td>
              <td>86.8</td>
              <td>51,118</td>
              <td>1,271</td>
              <td>8.7</td>
            </tr>
            <tr>
              <td>Neptune</td>
              <td>102</td>
              <td>49,528</td>
              <td>1,638</td>
              <td>11.0</td>
            </tr>

            {/* Dwarf Planets */}
            <tr>
              <td className="category-cell">Dwarf Planets</td>
              <td></td>
              <td>Pluto</td>
              <td>0.0146</td>
              <td>2,370</td>
              <td>2,095</td>
              <td>0.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DataTable;
