import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 80%;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SidebarContainer = styled.aside`
  color: ${colors.lightPrimary_1};
  background-color: ${colors.primary};
  z-index: 1;
  padding: 32px 8px;
  font-size: 14px;
  width: 100%;
  max-width: 360px;
  position: sticky;
  overflow-y: auto;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 56px;
  }

  .right {
    float: right;
  }

  ul {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
    line-height: 22px;
  }

  .totalPrice {
    font-weight: 700;
  }

  li {
    color: ${colors.primary};
    background-color: ${colors.lightPrimary_1};
    padding: 8px;
  }
`
