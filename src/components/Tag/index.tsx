import { TextCase } from '../../styles'
import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
  textCase?: TextCase
}

const Tag = ({ children, size, textCase }: Props) => (
  <TagContainer size={size} className={textCase?.toString()}>
    {children}
  </TagContainer>
)

export default Tag
