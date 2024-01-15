import FoodCard from '../Food'
import * as S from './styles'

export type Props = {
  restaurant: Restaurant
  loadModal: (food: Food) => void
}

const FoodsList = ({ restaurant, loadModal }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurant.cardapio.map((food) => (
            <FoodCard key={food.id} food={food} loadModal={loadModal} />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default FoodsList
