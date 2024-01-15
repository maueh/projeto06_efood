import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  padding: 80px 0 120px 0;
  background-color: ${colors.lightPrimary_2};

  @media (max-width: 1024px) {
    padding: 40px 16px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
