import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: none;
  color: ${colors.primary};
  background-color: ${colors.lightPrimary_1};
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

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  &:disabled {
    color: ${colors.lightGrey_1};
    background-color: ${colors.lightGrey_2};
  }
`

export const ButtonLink = styled(Link)`
  color: ${colors.white};
  background-color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`
