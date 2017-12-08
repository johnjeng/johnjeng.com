import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import {rhythm} from "../utils/typography"

// import '../css/index.css'; // add some style if you want!

export default function RecentPosts({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1 style={{ display: `inline-block` }}>
        Recent Posts
      </h1>
      {posts
        .filter(post => post.node.frontmatter.date)
        .map(({ node: post }) => {
          return (
            <div key={post.id}>
              <Link to={post.fields.slug} >
                <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                  {post.frontmatter.title}{" "}
                  <span style={{ color: `#BBB` }}>— {post.frontmatter.date}</span>
                </h3>
                <p>{post.excerpt}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query RecentBlogPostsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
    ){
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
