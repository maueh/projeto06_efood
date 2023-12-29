import styled from 'styled-components'
import { cores } from '../../styles'

const Card = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  max-width: 480px;
  padding: 32px;

  div {
    width: 100%;
    height: 217px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const RestaurantCard = styled(Card)`
  background-color: ${cores.branca};
  border: 1px solid ${cores.primaria};
`
