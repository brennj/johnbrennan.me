import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Box from "./Box"
import { Text } from "./Text"

const BlogPostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const BlogPostCard = ({
  node: {
    id,
    excerpt,
    fields: { slug },
    frontmatter: { date, title },
  },
}) => (
  <Box mb={4} key={id} display="grid" gridTemplateRows="auto auto">
    <BlogPostLink to={slug}>
      <Text fontSize={2}>
        <h3>{title}</h3>
      </Text>
    </BlogPostLink>
    <Box mb={3}>{new Date(date).toLocaleDateString()}</Box>
    <p>{excerpt}</p>
    <Box mb={3}>
      <BlogPostLink to={slug}>Read more...</BlogPostLink>
    </Box>
  </Box>
)
