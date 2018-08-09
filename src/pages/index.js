import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Don't let the internet browse you.</h1>
        <p>Protect yourself online with the world's most powerful VPN.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>

  </div>
)

export default IndexPage
