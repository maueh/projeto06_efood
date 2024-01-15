import { TextCase } from '../../styles'
import * as S from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
  textCase?: TextCase
}

const Tag = ({ children, size, textCase }: Props) => (
  <S.TagContainer size={size} className={textCase?.toString()}>
    {children}
  </S.TagContainer>
)

export default Tag
