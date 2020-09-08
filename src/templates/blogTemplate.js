import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`;

export default function Template({ data }) {
    const post = data.markdownRemark;
    const { title, author, date } = post.frontmatter;
    return (
        <Layout>
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}