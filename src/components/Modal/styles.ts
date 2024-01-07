import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const ModalContainer = styled.dialog`
  background-color: ${cores.primaria};
  color: ${cores.branca};

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
  }

  .imgFood {
    width: 280px;
    height: 280px;
    object-fit: cover;
    float: left;
    padding-right: 24px;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  h1 {
    font-size: 18px;
    font-weight: 900;

    margin-bottom: 16px;
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
