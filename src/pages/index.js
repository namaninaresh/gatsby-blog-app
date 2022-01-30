import * as React from "react"
import {  graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="container allposts">
          <div className="blogsBar">
          <ol style={{ listStyle: `none` }} className="cardListing">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug


          return (
            <li key={post.fields.slug} className="cardmd">
            
              <article style={{color: "#fff"}}>
                <Link to="/blog-post">{title}</Link>
                <p> {post.frontmatter.description}
              
                </p>

                <Link>Read More </Link>
              </article>
           

          
              
            </li>
          )
        })}
      </ol>
          </div>

      <div className="sidebar">
            <span className="filerBox"> React Js</span>
      </div>

      </div>
     
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
