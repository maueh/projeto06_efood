import { styled } from 'styled-components'
import { IconButtonStyle } from '../IconButton/styles'

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
