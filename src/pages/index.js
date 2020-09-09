import React from 'react';
import Layout from '../components/Layout'
import Home from '../components/Home'
import { graphql } from "gatsby";

export const AllBlogsQuerySlider = graphql`
query AllBlogPostsSlider {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date
          author
          description
          image {
            publicURL
          }
        }
      }
    }
  }
}
`

export default ({data}) => {
  return (
    <Layout>
      <Home data={data}/>
    </Layout>
  )
};