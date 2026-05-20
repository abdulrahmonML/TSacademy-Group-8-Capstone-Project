import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="vid-sect-container">

      <div className="video-section">
        <h3>How Planetary Data Helps Us Understand Space</h3>

        <p>
          Planetary science goes beyond images. Comparing<a href="#" target="_blank"> mass</a>,<a href="#" target="_blank"> diameter</a>,
          <a href="#" target="_blank"> gravity</a>, and <a href="#" target="_blank"> density</a> helps us understand planets.
        </p>
      </div>

      <div className="video1">
        <video
          src="https://www.pexels.com/download/video/2695085/"
          controls
          autoPlay
          muted
          loop
        />
      </div>

    </section>
  );
}

export default VideoSection;