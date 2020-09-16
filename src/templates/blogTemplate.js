import React from "react";
import { graphql, Link } from "gatsby";
import RegButton from '../components/Layout/RegButton'
import { Helmet } from "react-helmet"

import Layout from "../components/Layout";

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        author
        date
        title
        description
        path
      }
      html
    }
  }
`;

export default function Template({ data }) {
    const post = data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
                <Helmet>
                  <title>{title}</title>
                </Helmet>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="more-articles-btn">
                <Link to="/blog">
                    <RegButton text="READ MORE ARTICLES HERE" />
                </Link>
                </div>
        </Layout>
    )
}