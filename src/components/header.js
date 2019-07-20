import { Link as L } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Link = styled(L)`
  margin-right: 1rem;
`

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: `inherit`,
      textDecoration: `none`,
    }}
  >
    {children}
  </Link>
)

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.45rem` }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Writing</NavLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
