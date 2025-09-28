import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';

function Root() {
  const [showDashboard, setShowDashboard] = useState(false);

  
  const goToLanding = () => setShowDashboard(false);
  const goToDashboard = () => setShowDashboard(true);

  return showDashboard ? (
    <App goToLanding={goToLanding} />
  ) : (
    <LandingPage onViewDashboard={goToDashboard} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
