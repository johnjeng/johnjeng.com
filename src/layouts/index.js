import React from "react";
import Helmet from "react-helmet";
import "../assets/css/main.css";


export default ({ children, data }) => {
  return (
    <div>
      <Helmet>
        <script src="https://use.fontawesome.com/be0931746d.js" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      {children()}
    </div>
  );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
