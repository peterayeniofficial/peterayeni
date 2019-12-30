import React from 'react'

class Wyr extends React.Component {
  render() {
    return (
      <section id="top-project" className="section bb-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-6 mb-md-0">
              <img src="../img/wyr.png" alt="project image" />
            </div>

            <div className="col-md-4">
              <h5>Would You Rather</h5>

              <p>
                The would you Rather App is a project as part of the Udacity
                React Nano Degree. The app allow users to create polls that
                present two options that users can vote on the option thy
                prefer.
              </p>

              <ul className="project-detail mt-7">
                <li>
                  <strong>Client</strong>
                  <span>React Nano Degree Project</span>
                </li>

                <li>
                  <strong>Skills</strong>
                  <span>HTML, CSS, Javascript, React, Redux, Semantic UI</span>
                </li>

                <li>
                  <strong>Project Demo</strong>
                  <a href="https://wyr.ayenicology.now.sh/">WYR Demo</a>
                </li>

                <li>
                  <strong>Project Code</strong>
                  <a href="https://github.com/peterayeniofficial/wyr-react-app">
                    WYR Github
                  </a>
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

export default Wyr
