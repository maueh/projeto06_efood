import styled from 'styled-components'

import { cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 0 120px 0;
  background-color: ${cores.primariaClara2};

  @media (max-width: 1024px) {
    padding: 40px 16px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  column-gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
