import { useEffect, useState } from 'react'
import { IconButtonStyle, ImageSize } from './styles'

type Props = {
  title: string
  onClick?: () => void
  // handleModal: (estaAberta: boolean) => void
  icone: string
}

const IconButton = ({ title, icone, onClick }: Props) => {
  const [iconSize, setIconSize] = useState<ImageSize>()

  useEffect(() => {
    const img = new Image()
    img.src = icone
    img.onload = () => {
      setIconSize({ width: img.width, height: img.height })
    }
  })

  return (
    <IconButtonStyle
      icone={icone}
      imageSize={iconSize}
      type="button"
      onClick={onClick}
      title={title}
    >
      {/* <img src={icone} alt="" /> */}
    </IconButtonStyle>
  )
}

export default IconButton
