import { Card, Descricao, Titulo, MainContent, LinhaConteudo } from './styles'

import Button from '../Button'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  cardapio: Cardapio
  name: string
  description: string
  image: string
}

const modal = document.querySelector('dialog')

const FoodCard = ({ name, description, image, cardapio }: Props) => (
  <>
    <Card>
      <img src={image} alt={name} />
      <MainContent>
        <LinhaConteudo>
          <Titulo>{name}</Titulo>
        </LinhaConteudo>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={() => {
            modal && modal.showModal()
          }}
        >
          Adicionar ao carrinho
        </Button>
      </MainContent>
    </Card>
  </>
)

export default FoodCard
