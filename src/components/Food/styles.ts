import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.primaria};
  color: ${cores.primariaClara1};
  position: relative;
  border: 8px solid ${cores.primaria};
  border-radius: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;
  }
`
export const MainContent = styled.div`
  border: 1px solid ${cores.primaria};
`

export const LinhaConteudo = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
`
