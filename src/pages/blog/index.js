import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import styled from "styled-components"
import Box from "../../components/Box"

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

const BlogPostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const BlogPost = ({
  node: {
    id,
    excerpt,
    fields: { slug },
    frontmatter: { date, title },
  },
}) => (
  <Box mb={4} key={id}>
    <BlogPostLink to={slug}>
      <h3>{title}</h3>
    </BlogPostLink>
    <Box mb={3}>{new Date(date).toLocaleDateString()}</Box>
    <p>{excerpt}</p>
    <Box mb={3}>
      <BlogPostLink to={slug}>Read more...</BlogPostLink>
    </Box>
    <hr />
  </Box>
)

export default function BlogIndex({ data }) {
  const { edges } = data.allMdx
  const posts = edges.sort(
    (x, y) =>
      new Date(y.node.frontmatter.date) - new Date(x.node.frontmatter.date)
  )
  return <Layout>{posts.map(BlogPost)}</Layout>
}
