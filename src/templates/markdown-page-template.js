import React from "react";
import { Nav } from "./nav-bar";
import styled from "styled-components";

const Subpage = styled.div`
  display: grid;
  grid-template-rows: 20rem;
  grid-gap: 10px;
`
const Article = styled.div`
  margin: 3rem auto;
  width: 60%;
`

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Subpage className="subpage">
      <Nav />
      <Article className="article">
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
    </Subpage>
  );
};

export const query = graphql`
  query PrimaryPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
