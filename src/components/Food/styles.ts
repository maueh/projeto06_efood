import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.primary};
  color: ${colors.lightPrimary_1};
  position: relative;
  border: 8px solid ${colors.primary};
  border-radius: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;
  }
`
export const MainContent = styled.div`
  border: 1px solid ${colors.primary};
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
`
export const Description = styled.p`
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
