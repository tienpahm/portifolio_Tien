import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="portfolio_header_nav">
        <div className="logo">
          <h2 style={{fontWeight: "800", fontSize: "2rem"}}>
            <span
              style={{
                color: "#3498db",
                fontSize: "2.7rem",
              }}>
              T
            </span>
            ien{" "}
            <span
              style={{
                color: "#3498db",
                fontSize: "2.7rem",
                marginRight: "2px",
              }}>
              .
            </span>
          </h2>
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#footer-social">Contact</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1-v4ruixOPg-Y8EoR82P6X3sDJpmLxswo/view?usp=sharing"
                target="_blank"
                rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
