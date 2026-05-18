/* function App() {
  return <h1>Test</h1>;
}

export default App; */

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import PlanetsGrid from "./components/PlanetsGrid";
import PlanetCard from "./components/PlanetCard";
import DataTable from "./components/DataTable";
import ContactForm from "./components/ContactForm";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <PlanetsGrid />
      <DataTable />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
