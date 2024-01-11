import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  fullWidth?: boolean
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  fullWidth = true
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        className={fullWidth ? 'fullWidth' : "'"}
      >
        {children}
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
