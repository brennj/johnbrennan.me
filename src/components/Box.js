import styled from "styled-components"
import { space, layout, color, flexbox, grid } from "styled-system"

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${grid}
  ${flexbox}
  ${layout}
  ${color}
`

export default Box
