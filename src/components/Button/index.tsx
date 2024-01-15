import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  fullWidth?: boolean
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  fullWidth = true,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        className={fullWidth ? 'fullWidth' : "'"}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
