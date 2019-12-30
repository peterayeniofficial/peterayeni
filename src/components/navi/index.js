import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-stick-dark"
        data-navbar="smart"
      >
        <div className="container">
          <div className="navbar-left">
            <Link className="navbar-brand" to="/">
              <img class="logo-dark" src="img/logo.png" alt="logo" />
              <img class="logo-light" src="img/logo.png" alt="logo" />
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navi
