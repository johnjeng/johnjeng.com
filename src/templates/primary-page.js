import React from "react";
import { Nav } from "./nav-bar";
import styled from "styled-components";

const Subpage = styled.div`
  display: grid;
`
const Article = styled.div`

`

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log("rendering som md?");
  return (
    <Subpage className="subpage">
      <Nav />
      <Article className="article">
        <h1>{post.frontmatter.title}</h1>
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
