import React from "react"

import Link from "gatsby-link"

export default () =>
  <div>
    <h3>Hi, I'm John</h3> Blogging is one of my 
    <Link
      to="/blog-posts/2018-goals/"
    >
      {" "}goals for 2018{" "}
    </Link>
    so here we go!

    <br/>
    <br/>
    <small>
      This website is under construction using
      {" "}<a href="https://www.gatsbyjs.org/">gatsbyjs</a>.
    </small>
  </div>
