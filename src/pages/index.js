import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { BlogPostCard } from "../components/BlogPostCard"
import Box from "../components/Box"

export const pageQuery = graphql`
  query home {
    allMdx(limit: 2) {
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

export default ({
  data: {
    allMdx: { edges: posts },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! John here.</h1>
    <p>
      I'm a software engineer working in Dublin, Ireland. I share and document
      about development and whatever else I find interesting. Catch me on{" "}
      <a href="https://twitter.com/jgbrenno" target="_blank">
        Twitter
      </a>{" "}
      or{" "}
      <a href="https://www.linkedin.com/in/jgbrennan/" target="_blank">
        LinkedIn
      </a>
      .
    </p>

    <hr />

    <h2>Latest writing</h2>
    <Box
      display="grid"
      gridTemplateColumns={["1fr", "1fr 1fr"]}
      gridGap={[0, 3]}
    >
      {posts.map(BlogPostCard)}
    </Box>
  </Layout>
)
