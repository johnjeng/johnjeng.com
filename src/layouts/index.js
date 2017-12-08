import React from "react"
import Link from "gatsby-link"
import Icon from "react-fontawesome"
import Helmet from "react-helmet";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0px`}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const IconLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0px` }}>
    <a href={props.to} target="_blank" role="button" >
      <Icon name={props.name} />
    </a>
  </li>


export default ({ children, data }) => (
  <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1rem` }}>
    <Helmet>
      <script src="https://use.fontawesome.com/be0931746d.js"></script>
    </Helmet>
    <header style={{ margin: `2rem 0` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, margin:`0px` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/recent-posts/">Blog Posts</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <IconLink to="mailto:john.jeng5@gmail.com" name="envelope" />
        <IconLink to="https://facebook.com/johnjeffjeng" name="facebook" />
        <IconLink to="https://instagram.com/johnjeffjeng/" name="instagram" />
        <IconLink to="https://m.me/johnjeffjeng" name="message" />
      </ul>
    </header>
    {children()}
  </div>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
