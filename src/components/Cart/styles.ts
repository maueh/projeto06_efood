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

  ${IconButtonStyle} {
    right: 0;
    bottom: 0;
    position: absolute;
  }
`

export const Message = styled.div`
  .empty {
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }
`
