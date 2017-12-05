import React from "react"
import Link from "gatsby-link"

export default () =>
  <div>
    <h1>About</h1>
    This website is under construction using gatsby.js
    <br/>
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
      </ul>
    </nav>
  </div>
