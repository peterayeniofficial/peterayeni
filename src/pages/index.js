import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

class Profile extends React.Component {
  render() {
    const { location, data } = this.props
    const profile = get(data, 'profile.childImageSharp.fixed')
    const work1 = get(data, 'work1.childImageSharp.sizes')
    const work2 = get(data, 'work2.childImageSharp.sizes')
    const back1 = get(data, 'back1.childImageSharp.sizes')
    const back2 = get(data, 'back2.childImageSharp.sizes')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <header className="header text-white h-fullscreen bg-fixed header-bg">
          <div className="overlay opacity-95"></div>
          <div className="container text-center">
            <div className="row align-items-center h-100 pt-8 pt-md-7 pb-md-8">
              <div className="col-md-8 mx-auto">
                <h1 className="header-name">I'm Peter Ayeni.</h1>
                <p className="lead mt-5 mb-2">
                  I am passionate about using Technology and Design for Social
                  Good.
                </p>
                <div className="social social-sm social-hover-bg-brand mb-6">
                  <a className="social-github" href="#">
                    <i className="fa fa-github"></i>
                  </a>
                  <a className="social-twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a className="social-instagram" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>

                <p className="gap-xy">
                  <a className="btn btn-lg btn-round btn-light mw-200" href="#">
                    <i className="fa fa-play mr-2 small-8 align-middle"></i>{' '}
                    Projects
                  </a>

                  <Link
                    className="btn btn-lg btn-round btn-outline-accent mw-200"
                    to="/thoughts"
                  >
                    Thoughts
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </header>
      </Layout>
    )
  }
}

export default Profile

export const query = graphql`
  query ProfilePageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
