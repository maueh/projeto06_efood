import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.primary};
  color: ${colors.lightPrimary_1};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  display: inline-block;
`
