import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="portfolio-footer mb-2">
      <div className="portfolio-footer-content text-center">
        <h3>Thank you for you time</h3>
        <p>Please feel free to contact me</p>
        <div>
          <div id="footer-social">
            <div className="social-items">
              <a
                href="https://www.linkedin.com/in/tien-pham-aapoly/"
                rel="noreferrer"
                target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="social-items">
              <a
                href="https://github.com/tienpahm"
                rel="noreferrer"
                target="_blank">
                {" "}
                <i className="fab fa-github-alt" />
              </a>
            </div>
            <div className="social-items">
              <a
                href="https://www.facebook.com/tien.siva/"
                rel="noreferrer"
                target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
            <div className="social-items">
              <a
                href="mailto:phamtienacu@gmail.com"
                rel="noreferrer"
                target="_blank">
                {" "}
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
