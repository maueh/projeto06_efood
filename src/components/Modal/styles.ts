import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { IconButtonStyle } from '../IconButton/styles'

export const ModalContainer = styled.dialog`
  z-index: 10;
  display: flex;
  column-gap: 24px;
  background-color: ${cores.primaria};
  color: ${cores.branca};
  align-self: center;

  border: none;
  padding: 32px;
  position: relative;
  width: 100%;
  ${TagContainer} {
    margin-right: 8px;
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
  }

  ${IconButtonStyle} {
    position: absolute;
    top: 0;
    right: 0;
  }

  /* .close {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;
  } */

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
export const MainContent = styled.div`
  padding: 0 8px 8px 8px;
  border: 1px solid ${cores.primaria};
  border-width: 0 1px 1px 1px;
`

export const LinhaConteudo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Nota = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  span {
    font-size: 18px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const PageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
