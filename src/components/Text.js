import styled from "styled-components"
import { compose, typography, space, color } from "styled-system"

export const Text = styled.div(
  compose(
    typography,
    space,
    color
  )
)
