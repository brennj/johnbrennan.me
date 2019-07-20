import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import styled from "styled-components"

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

export default function BlogIndex({ data }) {
  const { edges } = data.allMdx
  const posts = edges.sort((x, y) => new Date(x) - new Date(y))
  console.log(posts)
  return (
    <Layout>
      {posts.map(
        ({
          node: {
            id,
            excerpt,
            fields: { slug },
            frontmatter: { date, title },
          },
        }) => (
          <React.Fragment>
            <BlogPostLink to={slug} key={id}>
              <h3>{title}</h3>
            </BlogPostLink>
            <date>{new Date(date).toLocaleDateString()}</date>
            <p>{excerpt}</p>
            <hr />
          </React.Fragment>
        )
      )}
    </Layout>
  )
}
