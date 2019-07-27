import React from "react"
import Layout from "../components/layout"
import Box from "../components/Box"

export default function BlogPostLayout({
  children,
  pageContext: {
    frontmatter: { date, title },
  },
}) {
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <Box mb={4}>{new Date(date).toLocaleDateString()}</Box>
        <Box maxWidth="60ch">{children}</Box>
      </article>
    </Layout>
  )
}
