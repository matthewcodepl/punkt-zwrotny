// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
const Logo = styled.div`
  display:flex;
  justify-content:center;
`;

const Header = () => (
  <Logo>
  </Logo>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
