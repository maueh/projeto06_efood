import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: none;
  color: ${cores.primaria};
  background-color: ${cores.primariaClara1};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
  width: auto;

  cursor: pointer;

  &.fullWidth {
    width: 100%;
  }
`

export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  background-color: ${cores.primaria};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`
