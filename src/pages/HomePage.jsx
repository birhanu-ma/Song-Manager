import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  function handleStarted() {
    navigate("/songs");
  }

  return (
    <div className="homepage">
      <h1>🎵 Song Manager</h1>
      <p className="intro">
        Welcome to the Song Manager app a simple yet powerful tool to manage
        your music collection.
      </p>
      <button className="btn" onClick={handleStarted}>
        get started
      </button>
    </div>
  );
}

export default HomePage;
