import React from "react";
import { graphql, Link } from "gatsby";
import RegButton from '../components/Layout/RegButton'

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
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="more-articles-btn">
                <Link to="/blog">
                    <RegButton text="WATCH MORE ARTICLES" />
                </Link>
                </div>
        </Layout>
    )
}