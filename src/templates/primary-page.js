import React from "react";
import { Nav } from "./nav-bar";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log("rendering som md?");
  return (
    <div className="subpage" style={{maxWidth:"800px"}}>
      <Nav />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
