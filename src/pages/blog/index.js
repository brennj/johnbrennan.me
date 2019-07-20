import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"

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
          <Link to={slug} key={id}>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <hr />
          </Link>
        )
      )}
    </Layout>
  )
}
