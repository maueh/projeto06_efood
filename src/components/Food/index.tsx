import { Card, Descricao, Titulo, MainContent, LinhaConteudo } from './styles'

import Button from '../Button'

type Props = {
  name: string
  description: string
  image: string
}

const FoodCard = ({ name, description, image }: Props) => (
  <>
    <Card>
      <img src={image} alt={name} />
      <MainContent>
        <LinhaConteudo>
          <Titulo>{name}</Titulo>
        </LinhaConteudo>
        <Descricao>{description}</Descricao>
        <Button type="button" title="Adicionar ao carrinho">
          Adicionar ao carrinho
        </Button>
      </MainContent>
    </Card>
  </>
)

export default FoodCard
