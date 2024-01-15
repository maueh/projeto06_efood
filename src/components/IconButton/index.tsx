import * as S from './styles'

type Props = {
  title: string
  onClick?: () => void
  icon: string
}

const IconButton = ({ title, icon, onClick }: Props) => {
  return (
    <S.IconButtonStyle type="button" onClick={onClick} title={title}>
      <img src={icon} alt="" />
    </S.IconButtonStyle>
  )
}

export default IconButton
