import React, {useState} from "react";
import "./BacktoTop.css";

export default function BacktoTop() {
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      this.document.querySelector(".back-to-top").style.transform =
        "translateX(50px)";
    } else {
      this.document.querySelector(".back-to-top").style.transform =
        "translateX(0px)";
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
  return (
    <div>
      <div
        className="back-to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}>
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
}
