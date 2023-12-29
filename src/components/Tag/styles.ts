import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.primaria};
  color: ${cores.primariaClara1};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  display: inline-block;
`
