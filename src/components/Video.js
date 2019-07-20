import React from "react"

export default ({ videoSrcURL, videoTitle, ...props }) => (
  <iframe
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    {...props}
  />
)
