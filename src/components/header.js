import { Link as L } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Box from "./Box"

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

const Header = () => (
  <Box py={3} mb={3}>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Writing</NavLink>
      </nav>
    </header>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
