import { useEffect } from 'react'

import Button from '../Button'
import * as S from './styles'

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
  loadModal: (food: Food) => void
}

let modal

const FoodCard = ({ food, loadModal }: Props) => {
  useEffect(() => {
    modal = document.getElementById('food-modal')
    console.log(modal)
  }, [])

  return (
    <>
      <S.Card>
        <img src={food.foto} alt={food.nome} />
        <S.MainContent>
          <S.Title>{food.nome}</S.Title>
          <S.Description>{food.descricao}</S.Description>
          <Button
            type="button"
            title={`Ver detalhes de ${food.nome}`}
            onClick={() => {
              loadModal(food)
            }}
          >
            Mais detalhes
          </Button>
        </S.MainContent>
      </S.Card>
    </>
  )
}
export default FoodCard
