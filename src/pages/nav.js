import React from "react"

import Link from "gatsby-link"

export default () =>
<nav>
  <ul>
    <li>
      <Link to='/'>
        Home
      </Link>
    </li>
  </ul>
  <ul>
    <li>
      <Link to='/recent-posts'>
        Blog Posts
      </Link>
    </li>
    <li>
      <Link to='/contact'>
        Contact
      </Link>
    </li>
    <li>
      <Link to='/about'>
        About
      </Link>
    </li>
  </ul>
</nav>
