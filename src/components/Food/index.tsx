import { Card, Descricao, Titulo, MainContent, LinhaConteudo } from './styles'

import Button from '../Button'
import { useEffect } from 'react'

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
  // name: string
  // description: string
  // image: string
  carregarModal: (cardapio: Cardapio) => void
}

let modal

const FoodCard = ({ cardapio, carregarModal }: Props) => {
  useEffect(() => {
    modal = document.getElementById('food-modal')
    console.log(modal)
  }, [])

  return (
    <>
      <Card>
        <img src={cardapio.foto} alt={cardapio.nome} />
        <MainContent>
          <LinhaConteudo>
            <Titulo>{cardapio.nome}</Titulo>
          </LinhaConteudo>
          <Descricao>{cardapio.descricao}</Descricao>
          <Button
            type="button"
            title={`Ver detalhes de ${cardapio.nome}`}
            onClick={() => {
              carregarModal(cardapio)
            }}
          >
            Mais detalhes
          </Button>
        </MainContent>
      </Card>
    </>
  )
}
export default FoodCard
