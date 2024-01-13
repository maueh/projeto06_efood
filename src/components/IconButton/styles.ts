import styled from 'styled-components'

export type Props = {
  icone: string
  imageSize?: ImageSize
}

export type ImageSize = {
  width: number
  height: number
}

export const IconButtonStyle = styled.button<Props>`
  cursor: pointer;
  background: none;
  border: none;
  margin: 8px;
  background-image: url(${(props) => props.icone});
  background-repeat: no-repeat;
  width: ${(props) => props.imageSize?.width}px;
  height: ${(props) => props.imageSize?.height}px;
`
