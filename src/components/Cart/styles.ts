import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { IconButtonStyle } from '../IconButton/styles'

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

export const Sidebar = styled.aside`
  color: ${cores.primariaClara1};
  background-color: ${cores.primaria};
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
    color: ${cores.primaria};
    background-color: ${cores.primariaClara1};
    padding: 8px;
  }
`
export const CardFood = styled.li`
  display: flex;
  gap: 8px;
  position: relative;

  .food-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    width: 100%;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  .excluir {
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  ${IconButtonStyle} {
    right: 0;
    bottom: 0;
    position: absolute;
  }
`
