import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { IconButtonStyle } from '../IconButton/styles'

export const ModalContainer = styled.dialog`
  z-index: 1;
  display: flex;
  gap: 24px;
  background-color: ${cores.primaria};
  color: ${cores.branca};
  align-self: center;
  border: none;
  padding: 32px;
  max-width: 1024px;
  /* position: relative; */
  /* width: 100%; */

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 96%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-wrap: wrap;
  }

  p {
    font-size: 14px;
    margin-bottom: 1rem;
    line-height: 22px;
  }

  .imgFood {
    width: 280px;
    height: 280px;
    object-fit: cover;
    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }

  ${IconButtonStyle} {
    position: absolute;
    top: 0;
    right: 0;
  }

  h1 {
    font-size: 18px;
    font-weight: 900;

    margin-bottom: 16px;
  }

  &::backdrop {
    background: #000;
    opacity: 80%;
  }
`
export const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
`
