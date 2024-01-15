import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  box-sizing: border-box;
  background-color: ${colors.white};

  border: 1px solid ${colors.primary};

  padding: 0px;
  position: relative;
  overflow: hidden;
  align-self: stretch;

  /* max-width: 472px; */
  width: 100%;
  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 100%;
    height: 272px;
    display: block;
  }
`
export const MainContent = styled.div`
  padding: 0 8px 8px 8px;
  /* border: 4px solid ${colors.primary}; */
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  span {
    font-size: 18px;
  }

  > img {
    height: auto;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
`
export const Description = styled.p`
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
