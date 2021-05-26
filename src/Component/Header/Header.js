import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <section className="portfolio_header">
      <div className="portfolio_header-content ">
        <Navbar />
        <div className="introduction text-center mt-5 ">
          <div className="introduction-context">
            <h1>Front End Developer</h1>
            <p>
              I am coding and learning new technologies , and I love what I do{" "}
            </p>
          </div>
          <div className="header-avatar">
            <img
              src={require("../../assets/img/unnamed.png").default}
              alt="avatar"
            />
          </div>
        </div>
        <div className="header_skills">
          <div className="header_skills_content">
            <img
              src={require("../../assets/img/css3-logo.png").default}
              alt="css3"
            />
            <img
              src={require("../../assets/img/html5.png").default}
              alt="html5"
            />
            <img
              src={require("../../assets/img/JavaScript-logo.png").default}
              alt="js"
            />
            <img
              src={require("../../assets/img/react-logo.png").default}
              alt="react"
            />
            <img
              src={require("../../assets/img/sass-logo.png").default}
              alt="sass"
            />
            <img
              src={require("../../assets/img/git-logo.png").default}
              alt="git"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
