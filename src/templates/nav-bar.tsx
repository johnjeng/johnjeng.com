import * as React from "react";
import Link from "gatsby-link";
import * as Icon from "react-fontawesome";
import * as Helmet from "react-helmet";

const ListLink = (props: any) => {
  return (
    <li
      style={{
        display: `inline-block`,
        marginRight: `1rem`,
        marginBottom: `0px`
      }}
    >
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
};

const IconLink = (props: any) => {
  return (
    <li
      style={{
        display: `inline-block`,
        marginRight: `1rem`,
        marginBottom: `0px`
      }}
    >
      <a href={props.to} target="_blank" role="button">
        <Icon name={props.name} />
      </a>
    </li>
  );
};

export function Nav() {
  return (
    <header id="header">
      <div className="inner">
        <Link className="logo" to="/">
          <h3 style={{ color: "white" }}>J3 Personal Training</h3>
        </Link>
        <ul
          id="nav"
          style={{ listStyle: `none`, float: `right`, margin: `0px` }}
        >
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/pricing/">Pricing</ListLink>
          <ListLink to="/recent-posts/">Blog</ListLink>
          <IconLink to="https://facebook.com/johnjeffjeng" name="facebook" />
          <IconLink to="https://instagram.com/johnjeffjeng/" name="instagram" />
          <IconLink to="mailto:john.jeng5@gmail.com" name="envelope" />
        </ul>
      </div>
    </header>
  );
}
