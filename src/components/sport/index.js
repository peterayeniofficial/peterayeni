import React from 'react'

class Sport extends React.Component {
  render() {
    return (
      <section id="top-project" className="section bb-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-6 mb-md-0">
              <img src="../img/sport-trivia.png" alt="project image" />
            </div>

            <div className="col-md-4">
              <h5>Sport Trivia</h5>

              <p>
                Sport Trivia is a quick experiment on a bigger online
                educational quiz app I am working on.
              </p>

              <ul className="project-detail mt-7">
                <li>
                  <strong>Client</strong>
                  <span>Experimental Project</span>
                </li>

                <li>
                  <strong>Skills</strong>
                  <span>UI/UX, HTML, CSS, Javascript, React, </span>
                </li>

                <li>
                  <strong>Project Demo</strong>
                  <a href="https://my-app-nu-ten.now.sh/">SportTrivia Demo</a>
                </li>

                <li>
                  <strong>Project Code</strong>
                  <a href="https://my-app-nu-ten.now.sh/">SportTrivia Github</a>
                </li>

                <li>
                  <strong>Contact Me</strong>
                  <div className="social social-sm social-gray social-inline mt-2">
                    <a
                      className="social-git"
                      href="https://www.linkedin.com/in/peterayeni/"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                    <a
                      className="social-twitter"
                      href="https://twitter.com/thePeterAyeni"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      className="social-linkedin"
                      href="https://www.linkedin.com/in/peterayeni/"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Sport
