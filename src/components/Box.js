import styled from "styled-components"
import { space, layout, color, flexbox } from "styled-system"

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${flexbox}
  ${layout}
  ${color}
`

export default Box
