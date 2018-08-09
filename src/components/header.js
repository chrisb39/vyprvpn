import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
<div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo_vyprvpn.svg')} width="115" /></Link>
      <Link to="/">Features</Link>
      <Link to="/">VPN Apps</Link>
      <Link to="/">Pricing</Link>
      <Link to="/">Business</Link>
      <Link to="/">Support</Link>
    </div>
</div>
)

export default Header
