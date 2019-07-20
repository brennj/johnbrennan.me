import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { BlogPostCard } from "../../components/BlogPostCard"

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default function BlogIndex({ data }) {
  const { edges } = data.allMdx
  const posts = edges.sort(
    (x, y) =>
      new Date(y.node.frontmatter.date) - new Date(x.node.frontmatter.date)
  )
  return (
    <Layout>
      {posts.map(e => (
        <>
          <BlogPostCard {...e} />
          <hr />
        </>
      ))}
    </Layout>
  )
}
