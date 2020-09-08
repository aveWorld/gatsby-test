import * as React from 'react';
import Layout from '../../components/Layout'
// import MapArticles from '../../components/MapArticles';
import { graphql } from "gatsby";
import ArticleTile from '../../components/ArticleTile'

  export const AllBlogsQuery = graphql`
    query AllBlogPosts {
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

const Blog = ({ data }) => (
  <Layout>
    <div className="container layout">
      <h1 className="blog__h1">
        <span className="blog__slash">/</span>
        {' '}
        Blog
      </h1>
      <div className="blog__articles">
        {/* <MapArticles /> */}
        {
        data.allMarkdownRemark.edges.map((post, el) => {
          const { title, author, date, description, path, image } = post.node.frontmatter;
          return (
            <ArticleTile 
            url={path} 
            img={image.publicURL} 
            key={el} 
            title={title} 
            subtitle={description} 
            date={date} 
            />
          )
          }
        )
      }
      </div>
    </div>
  </Layout>
);

export default Blog;
