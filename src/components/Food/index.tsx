import { useEffect } from 'react'

import Button from '../Button'
import { Card, Descricao, Titulo, MainContent, LinhaConteudo } from './styles'

export interface Food {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  food: Food
  // name: string
  // description: string
  // image: string
  carregarModal: (food: Food) => void
}

let modal

const FoodCard = ({ food, carregarModal }: Props) => {
  useEffect(() => {
    modal = document.getElementById('food-modal')
    console.log(modal)
  }, [])

  return (
    <>
      <Card>
        <img src={food.foto} alt={food.nome} />
        <MainContent>
          <LinhaConteudo>
            <Titulo>{food.nome}</Titulo>
          </LinhaConteudo>
          <Descricao>{food.descricao}</Descricao>
          <Button
            type="button"
            title={`Ver detalhes de ${food.nome}`}
            onClick={() => {
              carregarModal(food)
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
