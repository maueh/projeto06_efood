import { IconButtonStyle } from './styles'

type Props = {
  title: string
  onClick?: () => void
  icone: string
}

const IconButton = ({ title, icone, onClick }: Props) => {
  return (
    <IconButtonStyle type="button" onClick={onClick} title={title}>
      <img src={icone} alt="" />
    </IconButtonStyle>
  )
}

export default IconButton
