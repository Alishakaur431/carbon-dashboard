import React, { useState } from "react";
import credits from "./data/credits.json";
import "./App.css";

// Template function to generate certificate HTML
const getCertificateHTML = (credit) => {
  const timestamp = new Date().toLocaleString();
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Retirement Certificate - ${credit.unic_id}</title>
        <style>
          body { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial; background:#f8fafc; padding:30px; }
          .certificate { max-width:700px; margin:0 auto; background:#fff; border-radius:10px; padding:28px; box-shadow: 0 8px 30px rgba(20,20,50,0.06); border:1px solid #e6eef8; text-align:left; }
          h1 { color:#0b66ff; font-size:22px; margin-bottom:18px; text-align:center; }
          .row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px dashed #eef6ff; }
          .label { color:#6b7280; font-weight:600; width:40%; }
          .value { color:#111827; width:60%; text-align:right; font-weight:600; }
          .footer { margin-top:20px; font-size:13px; color:#6b7280; text-align:center; }
        </style>
      </head>
      <body>
        <div class="certificate">
          <h1>Retirement Certificate</h1>
          <div class="row"><div class="label">UNIC ID</div><div class="value">${credit.unic_id}</div></div>
          <div class="row"><div class="label">Project Name</div><div class="value">${credit.project_name}</div></div>
          <div class="row"><div class="label">Vintage</div><div class="value">${credit.vintage}</div></div>
          <div class="row"><div class="label">Status</div><div class="value">${credit.status}</div></div>
          <div class="row"><div class="label">Timestamp</div><div class="value">${timestamp}</div></div>
          <div class="footer">This certificate confirms the retirement of the selected carbon credit.</div>
        </div>
      </body>
    </html>
  `;
};

function App({ goToLanding }) {
  const [filteredCredits, setFilteredCredits] = useState(credits);
  const [query, setQuery] = useState("");

  const downloadCertificate = (credit) => {
    const certificateHTML = getCertificateHTML(credit);
    const blob = new Blob([certificateHTML], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${credit.unic_id}-certificate.html`;
    link.click();
  };

  const handleSearch = (value) => {
    setQuery(value);
    const q = value.toLowerCase();
    setFilteredCredits(
      credits.filter(
        (c) =>
          c.project_name.toLowerCase().includes(q) ||
          c.vintage.includes(q) ||
          c.unic_id.toLowerCase().includes(q)
      )
    );
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        {/* Clickable logo to go to landing page */}
        <div
          className="brand"
          style={{ cursor: "pointer" }}
          onClick={goToLanding}
        >
          <div className="logo">♻️</div>
          <div className="brand-text">
            <div className="brand-title">Offset</div>
            <div className="brand-sub">Carbon Credits</div>
          </div>
        </div>

        <nav className="nav-actions">
          {/* Optional dashboard buttons */}
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Search, verify, and retire carbon credits with ease</h1>

          <div className="search-row">
            <input
              className="search-input"
              type="text"
              placeholder="Search by project name, vintage or UNIC ID..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="stats">{filteredCredits.length} results</div>
          </div>
        </section>

        <section className="table-card">
          <table className="credits-table">
            <thead>
              <tr>
                <th>UNIC ID</th>
                <th>Project</th>
                <th>Vintage</th>
                <th>Status</th>
                <th className="actions-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCredits.map((credit) => (
                <tr key={credit.unic_id}>
                  <td className="mono">{credit.unic_id}</td>
                  <td>{credit.project_name}</td>
                  <td>{credit.vintage}</td>
                  <td>
                    <span
                      className={
                        credit.status === "Active"
                          ? "badge badge-active"
                          : "badge badge-retired"
                      }
                    >
                      {credit.status}
                    </span>
                  </td>
                  <td className="actions-col">
                    <button
                      className="btn-download"
                      onClick={() => downloadCertificate(credit)}
                    >
                      Download Certificate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer className="footer">
          <small>© 2025 Offset Carbon — Track and retire credits responsibly.</small>
        </footer>
      </main>
    </div>
  );
}

export default App;
