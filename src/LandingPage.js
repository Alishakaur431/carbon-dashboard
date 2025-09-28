import React from "react";
import "./LandingPage.css";

function LandingPage({ onViewDashboard }) {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="topbar landing-topbar">
        <div className="brand">
          <div className="logo">♻️</div>
          <div className="brand-text">
            <div className="brand-title">Offset</div>
          </div>
        </div>
      </header>

      {/* Hero / Background overlay */}
      <div className="landing-hero">
        <div className="overlay">
          <h1>Offset Carbon Credits</h1>
          <p>Track, verify, and retire carbon credits effortlessly</p>
          <button className="landing-btn" onClick={onViewDashboard}>
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
