import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <section className="portfolio-content">
      <div id="about-me">
        <div className="about-me-content">
          <h2>Hi , I'm Tien . Nice to meet you</h2>
          <p>
            I began the journey with coding since 2020 . At the begin , I
            studied by myself through internet materials and then I found some
            online courses which help me to sharpen my skill even more . I love
            learning new technologies , meeting new people and playing a part of
            dynamic team where I can learn from the best to become the better
            version of myself{" "}
          </p>
        </div>
      </div>
      <div id="project">
        <h2>My Recent Project</h2>
        <div className="row project-items">
          <div className="col-12 col-md-6">
            <div className="project-view">
              <h3>BUGTIFY .</h3>
              <div className="row">
                <div className="col-6">
                  <img
                    data-toggle="modal"
                    data-target="#bugtify"
                    src={require("../../assets/img/bugtify.png").default}
                    alt="bugtify"
                    style={{cursor: "pointer"}}
                  />
                </div>
                <div className="col-6">
                  <img
                    data-toggle="modal"
                    data-target="#bugtify1"
                    src={require("../../assets/img/bugtify1.png").default}
                    alt="bugtify"
                    style={{cursor: "pointer"}}
                  />
                </div>
              </div>

              <div className="project-view-links">
                <a
                  className="preview-button"
                  href="http://bugtifyapp.surge.sh/"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa fa-desktop"></i> Live Preview
                </a>
                <a
                  className="source-button"
                  href="https://github.com/tienpahm/Jira_phamtien"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa fa-code-branch"></i> View Source
                </a>
              </div>
              <div className="tips text-center">
                <p>
                  <span>Tips</span> : to use app please can sign up or use test
                  account <span>Email</span> : abc@gmail.com{" "}
                  <span>Password</span> : 123456{" "}
                </p>
              </div>
              <div className="tech-used d-none d-md-block">
                <h5>Technologies Use</h5>
                <ul>
                  <li>
                    <i className="fa fa-dot-circle"></i>HTML5
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>CSS3
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>ReactJS
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Redux
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Redux-saga
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>RESTful API
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-block">
            <div className="project-information">
              <div className="description">
                <h5 className="title">Description</h5>
                <p>
                  BUGTIFY is a Jira clone project in which you can create
                  project and assign task for each member involve in project .
                  Meanwhile , tracking , monitor and manage project progress{" "}
                  <br />
                </p>
              </div>
            </div>
            <div className="project-information">
              <div className="project-difficulties">
                <h5 className="title">Project Difficulties</h5>
                <p>
                  BUGTIFY , for me , is a pretty big project . Therefore , where
                  to begin is also a problem . In addition , the order of API
                  call can collapse each other leading to loading no data or
                  error . Finally , because of the usage of the number of form
                  since create each form is time consuming and uneffective
                </p>
              </div>
            </div>
            <div className="project-information">
              <div className="My solutions">
                <h5 className="title">My solutions</h5>
                <p>
                  To Deal with each problem . First of all , I starting with
                  building the UI first and step by step apply data as well as
                  state to it . Seconly , to avoid API problems , I use
                  redux-saga to organize my code better also checking on every
                  step that I made to optimize it . Finally , to reuse form ,
                  template , etc ... I create HOC which is a great way to
                  component recycle
                </p>
              </div>
            </div>
            <div className="project-information">
              <div className="notable-features">
                <h5 className="title">Notable Features</h5>
                <ul>
                  <li>
                    <i className="fa fa-dot-circle"></i>Registration
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Login
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Account Information
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>TOKEN Authenticator
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Create , Delete , Edit
                    Task and Project
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Task Dragable in Project
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Comment on Task
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>User Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row project-items">
          <div className="col-12 col-md-6">
            <div className="project-view">
              <h3>HONDA Homepage UI</h3>
              <div className="row">
                <div className="col-6 ">
                  {" "}
                  <img
                    src={require("../../assets/img/honda.png").default}
                    alt="honda"
                    data-toggle="modal"
                    data-target="#honda"
                    style={{cursor: "pointer"}}
                  />
                </div>
                <div className="col-6">
                  {" "}
                  <img
                    src={require("../../assets/img/Honda1.png").default}
                    alt="honda"
                    data-toggle="modal"
                    data-target="#honda1"
                    style={{cursor: "pointer"}}
                  />
                </div>
              </div>

              <div className="project-view-links">
                <a
                  className="preview-button"
                  href="http://hondaclone.surge.sh/#"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa fa-desktop"></i> Live Preview
                </a>
                <a
                  className="source-button"
                  href="https://github.com/tienpahm/Honda_Homepage"
                  target="_blank"
                  rel="noreferrer">
                  <i className="fa fa-code-branch"></i> View Source
                </a>
              </div>
              <div className="tips text-center">
                <p>
                  <span>Tips</span> : You can click the vehicle navtab to open
                  vehicle section
                </p>
              </div>
              <div className="tech-used d-none d-md-block">
                <h5>Technologies Use</h5>
                <ul>
                  <li>
                    <i className="fa fa-dot-circle"></i>HTML5
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>CSS3
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>SASS
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>JavaScript
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>JQuery
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Boostrap4
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-block">
            <div className="project-information">
              <div className="description">
                <h5 className="title">Description</h5>
                <p>
                  Honda Hompage is an UI clone in which I practice how to set up
                  UI layout and organize section . In addition , building this
                  site help me to practice my responsive skill as well .
                  <br />
                </p>
              </div>
            </div>
            <div className="project-information">
              <div className="project-difficulties">
                <h5 className="title">Project Difficulties</h5>
                <p>
                  This is the first project that I have ever made . At the
                  begining , Due to the lacking of experiences , I felt
                  overwhelming cause the amount of task that I need to do .
                  Moreover , first time apply JavaScript to UI is also a
                  challenge for me . Finally , how to effective responsive a
                  website is a knowledge that take me a lot of time to
                  understand.
                </p>
              </div>
            </div>
            <div className="project-information">
              <div className="My solutions">
                <h5 className="title">My solutions</h5>
                <p>
                  To begin with , I tackle the mount of task by devide it into
                  small task and set up a plan for every day basic ; therefore ,
                  I know where to start and what I achieve in that day .
                  Secondly , to effectively apply JS into UI , I watch the
                  tutorial carefully as well as search for documents and
                  problems on Internet try my best to solve the problem by
                  myself without watching the answer . Finally , to responsive
                  website I watch the official site end to end , pixel by pixel
                  to look for how they responsive it .
                </p>
              </div>
            </div>
            <div className="project-information">
              <div className="notable-features">
                <h5 className="title">Notable Features</h5>
                <ul>
                  <li>
                    <i className="fa fa-dot-circle"></i>Responsive
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Animation
                  </li>
                  <li>
                    <i className="fa fa-dot-circle"></i>Carousel
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
